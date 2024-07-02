import os
import argparse
import pandas as pd
import plotly.graph_objects as go
from bs4 import BeautifulSoup


def export_dashboard_cashflow(source_path, dest_path="", offline=False, standalone=False):
    """
    Returns HTML file with cashflow plot

    Params
    ------
    source_path : path with finanse.csv and current index.html included
    dest_path   : path to which the resulting file will be written
    offline     : if True returns html with plotly.js included (+3MB)
                  if False plotly.js requires internet connection to load
    standalone  : if True returns full html with html tag
                  if False returns a string containing a single <div>

    """

    if dest_path == "":
        dest_path = source_path
    source_file = os.path.join(source_path, "finanse.csv")
    output_file = os.path.join(dest_path, "finanse.html")

    include_plotlyjs = "cdn"
    if offline:
        include_plotlyjs = True

    # Load data
    df = pd.read_csv(source_file, dtype={"Miesiąc": str})

    # Preprocessing
    df["Miesiąc"] = pd.to_datetime(df["Miesiąc"], yearfirst=True, format="%Y.%m")
    df.sort_values(by=["Miesiąc"], ascending=True, inplace=True)

    df["Zysk"] = df.Przychody - df.Rozchody
    total_balance = []
    balance = 0
    for i in range(len(df["Zysk"])):
        balance += df["Zysk"][i]
        total_balance.append(balance)

    df["Balance"] = total_balance

    # Plot settings
    title = "Hackerspace Trójmiasto Cashflow"
    current_balance = df["Balance"][len(df["Balance"]) - 1]

    x = df["Miesiąc"]
    fig = go.Figure()

    fig.add_trace(
        go.Bar(
            x=x,
            y=df.Przychody,
            name="Revenue",
            marker_color="lightseagreen",
            hovertemplate="<b>Revenue</b>: %{y:.2f} PLN<extra></extra>",
        )
    )
    fig.add_trace(
        go.Bar(
            x=x,
            y=-df.Rozchody,
            name="Expenses",
            marker_color="lightslategray",
            hovertemplate="<b>Expenses</b>: %{y:.2f} PLN<extra></extra>",
        )
    )
    fig.add_trace(
        go.Scatter(
            x=x,
            y=df["Balance"],
            name="Net balance",
            marker_color="darkslategrey",
            line={"width": 1},
            hovertemplate="<b>Net balance</b>: %{y:.2f} PLN<extra></extra>",
            mode="lines+markers",
        )
    )
    fig.update_layout(
        barmode="relative",
        title_text=f"{title} -- Bilans: {current_balance:.2f}PLN",
        yaxis_title="PLN",
    )
    fig.update_xaxes(dtick="M1")

    fig.write_html(output_file, include_plotlyjs=include_plotlyjs, full_html=standalone)


def update_html(source_path, dest_path):

    with open(
        os.path.join(dest_path, "finanse.html"),
        encoding="utf-8",
    ) as cashflow:
        soup_cashflow = BeautifulSoup(cashflow, "html.parser")

        with open(
            os.path.join(dest_path, "finanse.html"),
            mode="w",
            encoding="utf-8",
        ) as output:
            output.write(str(soup_cashflow))


if __name__ == "__main__":

    parser = argparse.ArgumentParser()
    parser.add_argument("--source_path", type=str, default="")
    parser.add_argument("--dest_path", type=str, default="")
    parser.add_argument(
        "--offline", default=False, action=argparse.BooleanOptionalAction
    )
    parser.add_argument(
        "--standalone", default=False, action=argparse.BooleanOptionalAction
    )

    args = parser.parse_args()

    export_dashboard_cashflow(args.source_path, args.dest_path, args.offline, args.standalone)
    update_html(args.source_path, args.dest_path)
    print("Graph plotted and exported successfully to HTML")
