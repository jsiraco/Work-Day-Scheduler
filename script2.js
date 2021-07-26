const blockContainer = $("#timeblock-container");
const currentDay = $("#currentDay");

const workHrs = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]

let today = moment();
$(currentDay).text(today.format("[Today is] dddd, MMM Do YYYY"));


function init() {
    //getTime();
    buildList();
    // getTasks();
}

function getTime() {

}

// function getTasks() {

// }

// function setTasks() {
//  localStorage.setItem("task", )
// }

function buildList() {
    for (let i = 0; i < workHrs.length; i++) {
        let workHour = $("<div id='workHour'>");
        let taskField = $("<div>");
        let addTodo = $("<form id='todoFormId'>");
        let todoResult = $("<span id='task'>");
        addTodo.append('<input type="text" class="taskInput" id="taskId">');
        addTodo.append('<input type="submit" value="💾" class="saveBtn">');

        workHour.addClass("row");
        workHour.addClass("hour");
        workHour.text(workHrs[i]);

        taskField.append(addTodo);
        taskField.append(todoResult);

        workHour.append(taskField);
        blockContainer.append(workHour);
        
        if (workHrs[i] === moment().format("ha")) {
            workHour.addClass("present");
        } else if (workHrs[i] > moment().format("ha")) {
            workHour.addClass("future");
        } else if (workHrs[i] < moment().format("ha")) {
            workHour.addClass("past");
        } else {
            return;
        }
    }
    
}


function removeTask() {
    
}

init();


$(workHour).on("click", function () {
    console.log("clicked");
})