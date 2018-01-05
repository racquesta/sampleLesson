function createChart() {
    
    //link to entire speadsheet this time since we will be adding a sheet to it
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var dataSheet = ss.getSheetByName('Data');
    
    //identify the ranges we want on the chart
    var lastRow = dataSheet.getLastRow();
    
    var fruits = dataSheet.getRange(1, 1, lastRow, 1);
    var calories = dataSheet.getRange(1,3, lastRow, 1);
    
    //add new sheet
    var chartSheet = ss.insertSheet('Chart');
    
  
    var chartBuilder = chartSheet.newChart()
       .setChartType(Charts.ChartType.BAR)
       .addRange(fruits)
       .addRange(calories)
       .setPosition(5, 5, 0, 0);
    
    var chart = chartBuilder.build();
  
    chartSheet.insertChart(chart);
    
  };
  