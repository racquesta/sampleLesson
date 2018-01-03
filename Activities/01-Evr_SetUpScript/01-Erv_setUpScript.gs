function firstFunction() {
  // chains spreadsheet variable to save to current current active sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  
  //Creates an alert displaying the sheet name
  SpreadsheetApp.getUi().alert('This sheet\'s name is ' + sheet.getName())
  
  //Logs a message in the logger found under 'View > Logs'
  Logger.log("Success!")
}