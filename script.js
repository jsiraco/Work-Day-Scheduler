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

function getTasks() {

}

function setTasks() {

}

function buildList() {
    for (let i = 0; i < workHrs.length; i++) {
        let workHour = $("<div>");
        let taskField = $("<div>");
        let addTask = $("<form>");
        addTask.append('<input type="text" id="taskId">')
        addTask.append('<input type="submit" value="💾" class="saveBtn">')

        workHour.addClass("row");
        workHour.addClass("hour");
        workHour.addClass("p");
        workHour.text(workHrs[i]);

        taskField.append(addTask);
        workHour.append(taskField);
        blockContainer.append(workHour);

        if (workHrs[i] === moment().format("ha")) {
            workHour.addClass("present");
        } else if (workHrs[i] > moment().format("ha")){
            workHour.addClass("future");
        } else if (workHrs[i] < moment().format("ha")) {
            workHour.addClass("past");
        } else {
            return;
        }
    }

    console.log(moment().format("ha"));
}

function addTask() {

}

function removeTask() {

}

init();
