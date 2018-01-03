function myFunction() {
    // uses SpreadsheetApp class to save current active Spreadsheet as a variable
    // chains spreadsheet variable to save to current current active sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    
    //Creates an alert displaying to sheet name
    SpreadsheetApp.getUi().alert('This sheet\'s name is ' + sheet.getName())
    
    Logger.log("Success!")
  }