# Daniel Boren Day-Planner App README

## Value add proposal

Application allowing user to enter text into pre-made cells for the hours of 9AM to 5PM. Cells will save user input and reload said input if page is reloaded. App will also color code cells based on the time of day; red for current hour, gray for past hours, green for future hours.


### Basic structure

Day-planner chart is hard coded into the html index file which contains links to Bootstrap CSS and a pre-made css stylesheet. Bootstrap is used to set the width of the chart columns (column formate: hour heading | Textarea element for user entry | save button) and border styling.


### Text entry and retention functionality

Each textarea and save button are defined as js variables using jquery to define them according to their id attributes.

Each save button calls their own save function, which saves the user entered string of its associated textarea cell into local storage as individual variables.

Each textarea has its own load function (associated via the textarea elements' unique IDs) that reloads the stored entries from local storage. These functions are called within an init function that is always called upon loading the index page.


### Color coding functionality

The current hour is globally defined as a variable using the getHours() method. Each textarea element is assigned a data-time attribute value according to its associated hour (9-17).

Color coding function takes the cell variables as a parameter, uses jquery to read the cell's data-time attribute value, and uses conditional statements to compare that value to the current hour.

Depending on whether the cell's data-time value is less than, equal to, or greater than the current hour, the cell is assigned a respective css class of past, present, or future. The css attributes of the class color the cell accordingly.


### Reference

![Screenshot of app in use](https://github.com/dboren/db_hw_DayPlanner/blob/main/Assets/DayPlannerSC.JPG?raw=true)


Application can be found here: [https://dboren.github.io/db_hw_DayPlanner/](https://dboren.github.io/db_hw_DayPlanner/)

