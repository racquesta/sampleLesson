
// main function
function addInventory() {
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
  // if so, prompt user for how many they would like to add
  // else, create an alert for invalid inventory item
    if (responseIndex != -1){
     
    var ui2 = SpreadsheetApp.getUi();
    var prompt2 = ui2.prompt("How many " + responseText + " would you like to add?", ui2.ButtonSet.OK)
    
    var response2 = parseInt(prompt2.getResponseText())
    
    // add amount to existing amount
    var itemCurValueCell = sheet.getRange(responseIndex + 2, 2);
    var newValue = parseInt(itemCurValueCell.getValue()) + response2;
    itemCurValueCell.setValue(newValue)

  
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
        
        
        //prompt user for how many they would like to add
        var ui4 = SpreadsheetApp.getUi();
        var prompt4 = ui4.prompt("How many " + responseText + " would you like to add?", ui4.ButtonSet.OK)
        var response4 = parseInt(prompt4.getResponseText())
    
        sheet.getRange(lastRow + 1, 2).setValue(response4)
        
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
  