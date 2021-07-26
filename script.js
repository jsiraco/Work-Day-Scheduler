const blockContainer = $("#timeblock-container");
const currentDay = $("#currentDay");
let task = "New Task";
let testCount = 1;

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

let today = moment();
$(currentDay).text(today.format("[Today is] dddd, MMM Do YYYY HH:MMa"));


function init() {
    buildList();
}

function getTime() {

}

function buildList() {
    for (let i = 0; i < workHrs.length; i++) {
        let storedTasks = JSON.parse(localStorage.getItem(`todos${[i]}`));

        if (storedTasks !== null) {
            task = storedTasks;
        }

        let workHour = $("<div id='workHour' class='row hour'>");
        let taskField = $("<div>").attr("contentEditable", "true").text(task).addClass("taskInput");
        let saveBtn = $("<button type='submit' class='saveBtn'>").text("💾");
        taskField.append("<span class='taskInput'></span>");

        workHour.text(workHrs[i]);

        workHour.append(saveBtn);
        workHour.append(taskField);


        $(saveBtn).on("click", function (event) {
            event.stopPropagation();
            newTask = taskField.text();
            localStorage.setItem(`todos${[i]}`, JSON.stringify(newTask));
            console.log(newTask);
            return newTask;
        })


        blockContainer.append(workHour);

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


init();


