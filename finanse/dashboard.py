import argparse
import pandas as pd
import plotly.graph_objects as go
from datetime import datetime


def export_dashboard_cashflow(source_file, output_file, offline=False, standalone=False):
    '''
    Returns HTML file with cashflow plot
    
    Params
    ------
    source_file : path to csv source file
    output_file : path to html output file
    offline     : if True returns html with plotly.js included (+3MB) 
                  if False plotly.js requires internet connection to load
    standalone  : if True returns full html with html tag
                  if False returns a string containing a single <div>

    '''
    
    include_plotlyjs = 'cdn'
    if offline == True:
        include_plotlyjs = True
        
    # Load data
    df = pd.read_csv(source_file, dtype={'Miesiąc':str})
    # Preprocessing
    df['Miesiąc'] = pd.to_datetime(df['Miesiąc'], yearfirst=True, format="%Y.%m")
    df.sort_values(by=['Miesiąc'], ascending=True, inplace=True)
    
    # Plot settings
    title = 'Hackerspace Trójmiasto Cashflow'
    x = df['Miesiąc']
    fig = go.Figure()

    fig.add_trace(go.Bar(x=x, y=df.Przychody, name='Revenue', 
                         marker_color='lightseagreen', 
                         hovertemplate = "<b>Revenue</b>: %{y:.2f} PLN<extra></extra>"))
    fig.add_trace(go.Bar(x=x, y=-df.Rozchody, name='Expenses', 
                         marker_color='lightslategray', 
                         hovertemplate = "<b>Expenses</b>: %{y:.2f} PLN<extra></extra>"))
    fig.add_trace(go.Scatter(x=x, 
                             y=df.Przychody-df.Rozchody, 
                             name='Net balance', 
                             marker_color='darkslategrey', 
                             line={'width': 1},
                             hovertemplate = "<b>Net balance</b>: %{y:.2f} PLN<extra></extra>", 
                             mode='lines+markers'))
    fig.update_layout(barmode='relative', title_text=title, yaxis_title="PLN")
    fig.update_xaxes(dtick='M1')
    
    fig.write_html(output_file, include_plotlyjs=include_plotlyjs, full_html=standalone)
    
    
if __name__ == '__main__':
    
    parser = argparse.ArgumentParser()
    parser.add_argument("--output_file", type=str, default="cashflow_plot.html")
    parser.add_argument("--source_file", type=str, default="finanse.csv")
    parser.add_argument('--offline', default=False, action=argparse.BooleanOptionalAction)
    parser.add_argument("--standalone", default=False, action=argparse.BooleanOptionalAction)
    
    args = parser.parse_args()
    
    export_dashboard_cashflow(args.source_file, args.output_file, args.offline, args.standalone)