//This code is to be used with the CellsandRanges Google Sheet found 
//at https://docs.google.com/spreadsheets/d/1ddMLcRbOOvRqOt8cLNdJahpGr5T7pd6r6XEQCFEvY7w/copy.

function rowRange() {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    //********1**********//
    //Retrieve column headers
    var headerRange = sheet.getRange('A1:U1');
    Logger.log("headerRange: " + headerRange)
    
    // can use range object and chain getValues() to get range contents
    var header1a = headerRange.getValues();
    Logger.log("Header 1a:")
    Logger.log(header1a)
    // OR these are equivalent
    var header1b = sheet.getRange('A1:U1').getValues();
    Logger.log("Header1b:")
    Logger.log(header1b)
    //****End 1****//
    
    //********2**********//
    //Alternative Syntax for defining Range
    var header2 = sheet.getRange(1,1,1,20).getValues();
    Logger.log("Header2:")
    Logger.log(header2)
    //*******End 2*******//
    
    //********3**********//
    //alternatively you can set a variable for the last column that holds data and return the header in the same way
    var lastColumn = sheet.getLastColumn();
    Logger.log("Last Column: " + lastColumn);
    var header3 = sheet.getRange(1, 1, 1, lastColumn).getValues();
    Logger.log("Header3:")
    Logger.log(header3);
    
  };
  
  
  
  function columnRange(){
    var sheet = SpreadsheetApp.getActiveSheet();
    //return a list of fruits
    
    // identify last Row
    var lastRow = sheet.getLastRow();
    
    //get column values
    var fruits = sheet.getRange(2, 1, lastRow, 1).getValues();
    Logger.log(fruits);
  };
  
  
  
  
  function retrieveAllData(){
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    Logger.log(data)
  };
  
  
  
  
  function writeCellsAndRanges(){
    var sheet = SpreadsheetApp.getActiveSheet();
    
    //add 5 calories to an Apple
    var curValue = sheet.getRange('C2').getValue(); //OR sheet.getRange(2,3).getValue();
    
    var newValue = parseInt(curValue) + 5;
    
    sheet.getRange(2, 3).setValue(newValue);
    
  };
  
  
  function newData(){
    var starFruitInfo = [['Starfruit', '1 medium (3-5/8" long) (91 g)', 28, 2.5, 0.3, 0, 1.8, 0, 121, 3, 6.2, 2, 2.5, 10, 3.6, .9, 1, 52, 0, 0]];
    
    var sheet = SpreadsheetApp.getActiveSheet();
    var lastRow = sheet.getLastRow();
    var lastColumn = sheet.getLastColumn();
   
    var newRange = sheet.getRange(lastRow + 1, 1, 1, lastColumn);
    newRange.setValues(starFruitInfo);
  }