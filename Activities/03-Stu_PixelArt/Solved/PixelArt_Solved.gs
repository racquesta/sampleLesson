function colorFace() {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    //black = #ffffff
    //white = #000000
    
    var range = sheet.getRange('C3:N19');
    var colors = range.getBackgrounds();
  
    Logger.log(colors)
    //loop through cells from C3 to N19
    //loop through row coordinates
    for (i=3; i<20; i++){
      //loop though column coordinates
      for (j=3; j<15; j++){
        var curCell = sheet.getRange(i,j);
        //if color is white (#ffffff) then color the cell green
        if (curCell.getBackground() == '#ffffff'){
            curCell.setBackground('#00ff00')
            };
      };
      
    //color eyes brown 
    // saddle brown = #8B4513	
      sheet.getRange("F6:F7").setBackground('#8B4513');
      sheet.getRange("K6:K7").setBackground('#8B4513');
      
    //color eyes red;
    // red = #ff0000
      sheet.getRange("F13:K13").setBackground('#ff0000');
      sheet.getRange("G14:J14").setBackground('#ff0000');
      sheet.getRange("H15:I15").setBackground('#ff0000');
      
    };
    
  };