// Load the Visualization API and the piechart package.
  google.load('visualization', '1.0', {'packages':['corechart']});
  
  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);


  // Callback that creates and populates a data table, 
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300,
                 'colors': ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
	  			 'is3D': true
             	};
  var options2 = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300
             	};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
  var chartA = new google.visualization.BarChart(document.getElementById('chart_divA'));
  var chartB = new google.visualization.BarChart(document.getElementById('chart_divB'));
  chart.draw(data, options);
  chart2.draw(data, options2);
  chartA.draw(data, options);
  chartB.draw(data, options2);
}

$(window).resize(function(){
  drawChart();
  drawChart2();
});