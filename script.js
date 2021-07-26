//Creating global variables and grabbing elemtns off page
const blockContainer = $("#timeblock-container");
const currentDay = $("#currentDay");
let task = "New Task";

//creating an array of hours that will be used to generate the timeblocks
const workHrs = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
]

//Adding a moment to the current day section of the HTML
let today = moment();
$(currentDay).text(today.format("[Today is] dddd, MMM Do YYYY HH:MMa"));

//Initializes the application
function init() {
    buildList();
}

//Builds the lists, buttons, and text fields
function buildList() {
    //For each element
    for (let i = 0; i < workHrs.length; i++) {
        //Check if there are stored todos
        let storedTasks = JSON.parse(localStorage.getItem(`todos${[i]}`));
        //If there are, set each todo to its field
        if (storedTasks !== null) {
            task = storedTasks;
        }
        //creates rows, fields to enter text, and buttons to save
        let workHour = $("<div id='workHour' class='row hour'>");
        let taskField = $("<div>").attr("contentEditable", "true").text(task).addClass("taskInput");
        let saveBtn = $("<button type='submit' class='saveBtn'>").text("💾");
        taskField.append("<span class='taskInput'></span>");

        //Appends the time listed in the string to the field
        workHour.text(workHrs[i]);

        //Appends buttons and field to the rows
        workHour.append(saveBtn);
        workHour.append(taskField);

        //For each element a click event is created that will store a todo with a unique key based on its index
        $(saveBtn).on("click", function (event) {
            //prevents todos from replacing those above them
            event.stopPropagation();
            newTask = taskField.text();
            //sets a todo based on what was in the task field when the button was clicked
            localStorage.setItem(`todos${[i]}`, JSON.stringify(newTask));
            console.log(newTask);
            return newTask;
        })

        //Appends the hours to the container
        blockContainer.append(workHour);

        //compares a formatted moment() to the values of the array, then determnes if those times are current, past, or future
        if (workHrs[i] === moment().format("HH")) {
            workHour.addClass("present");
        } else if (workHrs[i] > moment().format("HH")) {
            workHour.addClass("future");
        } else if (workHrs[i] < moment().format("HH")) {
            workHour.addClass("past");
        } else {
            return;
        }
    }

}

//runs function on page load
init();


