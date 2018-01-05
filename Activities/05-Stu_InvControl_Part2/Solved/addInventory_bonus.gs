//create custom menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Add Inventory', 'addInventoryBonus')
      .addToUi();
};

// main function
  function addInventoryBonus() {
    //link current sheet
    var sheet = SpreadsheetApp.getActiveSheet();
    
    //create a user interface prompt
    var ui = SpreadsheetApp.getUi();
    var prompt = ui.prompt('Add Items', 'What item would you like to add?', ui.ButtonSet.OK_CANCEL)
    
    // save the response text from the promt as a variable
    var responseText = prompt.getResponseText();
    
    Logger.log(responseText);
    
    //idenify a dynamic list of items 
    
    //identifies the integer of the last row in the spreadsheet where data is present
    var lastRow = sheet.getLastRow();
    
    // use last row minus 1 to get correct number of rows to identify items since row 1 is excluded.
    // returns an array of items
    var items = sheet.getRange(2,1,lastRow - 1).getValues();
    
    var itemsArray = convertTo1D(items);
    
    Logger.log(itemsArray);
    
    //Add one to add the header row and account for different indexing
    var responseIndex = itemsArray.indexOf(responseText)
    
    // check to see if response is in items array
    if (responseIndex != -1){
      
      //run howMany function
      howMany(sheet, responseText, responseIndex);
  
    } else {
      // give user the option to add an item.
      var ui3 = SpreadsheetApp.getUi();
    
      //alert user of issue
      var alert3 = ui.alert(responseText + " is not currently in inventory. \
                            Please check your spelling.  \
                            Press 'YES' to add the item. \
                            Press 'NO' to Cancel.", ui3.ButtonSet.YES_NO)
      
      //if yes
      if (alert3 == ui.Button.YES){ 
        
        //set item name
        sheet.getRange(lastRow + 1, 1).setValue(responseText)
        //run howMany function to add amount
        howMany(sheet, responseText, lastRow - 1)
      };     
    };
  };
  


// flatten array function
  function convertTo1D(twoDArray) {
    var oneDArray = [];
    
    twoDArray.forEach(function(row){
      oneDArray.push(row[0])
    });
    return oneDArray
                    
  };
  
  

//howMany function to prevent repeat
  function howMany(sheet, itemName, responseIndex){
    // promt for how many
      var ui2 = SpreadsheetApp.getUi();
      var prompt2 = ui2.prompt("How many " + itemName + " would you like to add?", ui2.ButtonSet.OK);
      
      var response2 = parseInt(prompt2.getResponseText());
      
    
    //Add one to add the header row and one to account for different indexing
      var itemCurValueCell = sheet.getRange(responseIndex + 2, 2);
    
    // get current value if there is one, if not, set to 0
      var curValue = parseInt(itemCurValueCell.getValue())
      if (!curValue){
        curValue = 0
      };
    //calculate new value and set to correct destination
      var newValue = curValue + response2;
      itemCurValueCell.setValue(newValue)
    
  };
