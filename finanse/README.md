# Cashflow plot
Returns HTML file with cashflow plot containing revenue, expenses and net balance. 

### Requirements
* Python 3.9+
* requirements.txt

### Command 
`python dashboard.py [parameters]`

### Options
`--source_path` (string) default: "" <br> Path to the directory containing index.html of financial report and finanse.csv <p>
`--offline` (bool) <br>Turn on offline plot (plotly.js will be included in HTML file, +3MB)<p>