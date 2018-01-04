## Hacking Google

### Overview

Today, we will introducing student to to Google Apps Script which can be used to extend the capabilities of G Suite products.  We will be focusing primarily on creating scripts to interact with Google Sheets.  

##### Instructor Priorities/Prior Knowledge Requirements

* Student should have a google account and be familiar with Google Drive.  
* Students should have a basic understanding of javascript functions, variables, conditionals, and loops.

##### Instructor Notes

* Needs editing

- - -

### Objectives

* To introduce students to the capabilities of using Google Apps Script to create macros, custom functions, and charts in 
Google Sheets. 
* 

- - - 

### 1. Instructor Do: Welcome Students (0:01)

* Take a minute to welcome students and see how they are doing while opening [Introduction to Google Apps Script](https://docs.google.com/presentation/d/1ynneIPznmbAwAoNVCto-vulT6IBh7p8fueSiiWtuYN8/edit?usp=sharing).

### 2. Instructor Do: Introduction Google Apps Script (0.03)

* Explain to 

### 3. Everyone Do: Getting Set Up (0:03)

Have students follow along with this first activity to familarize them with creating a container-bound script in Google Sheets and setting the correct permissions.  

Have student sign into their Google Drive account by going to to https://www.google.com/drive/.  Once they are signed into google drive have them make a new folder to hold the Google Sheets for this lesson.  

![03-CreateNewFolder](Images/01-CreateNewFolder.png)

Once inside this Folder have them add a new Google Sheet by choosing `NEW > Google Sheets > Blank spreadsheet`.

![03-NewSheetsFile](Images/01-NewSheetsFile.png)

Students will want to click on the Title of the Spreadsheet currently reading `Untitled spreadsheet` and rename to a title of their chosing.  Explain to student who are unfamilar with G Suite Applications that all changes are immediately saved.  

The Script Editor is found by going to the `Tools` menu and choosing `Script Editor...`.  

![03-FindingScriptEditor](Images/01-FindingScriptEditor.png)

Slack out [01-Evr_SetUpScript.gs](https://github.com/racquesta/sampleLesson/blob/master/Activities/01-Evr_SetUpScript/01-Erv_setUpScript.gs) to students, and have them copy and paste the script into their Google script editor, give the script a new name, save, and run the script either by pressing the ![01-RunButton](Images/01-RunButton.png) or choosing `Run > Run function > Function Name`. 

![01-RunMenu](Images/01-RunMenu.png)

Generally, the first time a new script is run inside a Google App, it will require authorization.  Students can complete this process by:

  1. Clicking `Review Permissions` in the Authorization required window.
  ![01-AuthorizationRequired](Images/01-AuthorizationRequired.png)
  
  2. Choosing the google account they are currently using.
  ![01-ChooseEmail](Images/01-ChooseEmail.png)
  
  3. Clicking the `Advanced` link.  
  ![01-ChoosingAdvanced](Images/01-ChoosingAdvanced.png)
  
  4. Scrolling down and clicking the link that reads `Go to (script name)(unsafe)`.
  ![01-ChoosingGoTo](Images/01-ChoosingGoTo.png)

  5. Choosing `Allow`.
  
__Note important parts of the code for students:__

![01-FirstScript](Images/01-FirstScript.png)

* The first line of the function required to identify the current sheet so that we may interact with it.  `SpreadsheetApp ` is the parent class for Google's spreadsheet service and allows us to access the `getActiveSheet` method which sets the current sheet in the Spreadsheet. 

* The `getUi` method returns an instance of the spreadsheets user inferface and allos us to add menus, dialogs, and sidebars.

* The `Logger` class is similar to the console in javascript.  It allows us to write out or retrieve text from the the debugging log.  The log can be found by going to `Views > Logs`.

* Slack out the following Google Apps Script Spreadsheet Reference link to students: https://developers.google.com/apps-script/reference/spreadsheet/

### 4. Instructor Do: Cells and Ranges
 
Open and slack out the following link to students so they may follow along with the code: https://docs.google.com/spreadsheets/d/1pLszOnk7HanYVpFPMcdpfOuobDuHcA2oS7-aLvytq9Q/copy (Note: This link will force the user to make a copy.)

This spreadsheet contains 5 functions with the goal of familiarizing students with retrieving and manipulating different attributes of cells.  

Unlike javascript, you cannot call multiple functions by running one .gs file.  Instead, you must choose a function to run in one of two ways:

* From the `Run` menu, choose  `Run function` and choose the function you would like run.

* From the ![01-RunButton](Images/01-RunButton.png) after selecting your desired function from the dropdown.  
![02-FunctionDropdown](Images/02-FunctionDropdown.png)

If you desire to run several functions from one script, you must call them from inside the function you choose.

1. The first function covers several ways to indentify a range of cells with Google Apps Script.  

* Note that the method `getRange()` only returns a range object, but does not return the values contained in that range.  This object can be chained with .getValues() to return a *2D array of values*.

!![02-rowRangeCode1](Images/02-rowRangeCode1.png)![02-rowRangeOutput](Images/02-rowRangeOutput.png)

* The syntax for the second `getRange()` method is `getRange(rowCoordinate, columnCoordinate, Number of Rows, Number of Columns)` and will return the range with the top left cell at the given coordinates with the given number of rows and columns.

![02-rowRangeCode2](Images/02-rowrangeCode2.png) 

2. The `getColumn` function returns a list of the fruits from the first column excluding the header row.  Note the structure of the 2D Array for students.  Each row is a separate array within the array while column values are the values held in that inner array.  

![02-columnRangeCode](Images/02-columnrangeCode.png) ![02-columnRangeOutput](Images/02-columnRangeOutput.png)

3.  The `retrieveAllData()` function returns a 2D array holding all of the data in the sheet.
![02-retrieveAllDataCode](Images/02-retrieveAllDataCode.png)
![02-retrieveAllDataOutput](Images/02-retrieveAllDataOutput.png)




### 5. Students Do: Pixel Art



### 6. Instructor Do: Keeping Inventory

Open the [02-Ins_KeepingInventory]() Google Sheet and script and walk through code with students.  



### 7. Students Do: Keeping Inventory

