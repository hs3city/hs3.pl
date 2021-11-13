# Cashflow plot
Returns HTML file with cashflow plot containing revenue, expenses and net balance. 
### Command 
`python dashboard.py [parameters]`

### Options
`--output_file` (string) default: cashflow_plot.html <br> Path to the output file.<p>
`--source_file` (string)  default: finanse.csv <br> Path to the source csv file.<p>
`--offline` (bool) <br>Turn on offline plot (plotly.js will be included in HTML file, +3MB)<p>
`--standalone` (bool) <br>Turn on stand-alone export to full HTML with `<html>` tag. By default returns a string containing 
a single `<div>` block<p>