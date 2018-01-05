function myFunction() {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    //add addition column header 
    sheet.getRange(1,23).setValue('category');
    
    
    // loop though rows
    for (i=2; i<=16384; i++){
      // loop through columns
      for (j=15; j <=22; j ++){
        var curCellVal = sheet.getRange(i, j).getValue();
        if (curCellVal){
          var catName = sheet.getRange(1, j).getValue();
          sheet.getRange(i, 23).setValue(catName);
          break;
        };
      };
    };

  };