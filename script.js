const currentDay = $("#currentDay");
const currentTime = $(moment().format("ha"));
const editTask = $(".editTask").attr("contentEditable", "true");
const saveBtn = $(".saveBtn");

const nineAm = $("#9am");
const tenAm = $("#10am");
const elevenAm = $("#11am");
const twelvePm = $("#12pm");
const onePm = $("#1pm");
const twoPm = $("#2pm");
const threePm = $("#3pm");
const fourPm = $("#4pm");
const fivePm = $("#5pm");

const workHour = $(".work-hour");


let today = moment();
$(currentDay).text(today.format("[Today is] dddd, MMM Do YYYY"));

function checkHour(time) {
    if (time.text() === currentTime) {
        time.addClass("present");
    } else if (time.text() > currentTime) {
        time.addClass("future");
    } else {
        time.addClass("past");
    }
}

function init() {
    let storedTasks = JSON.parse(localStorage.getItem("todos"));

    if (storedTasks !== null) {
        task = storedTasks;
    }


    checkHour(workHour);
    checkHour(nineAm);
    checkHour(tenAm);
    checkHour(elevenAm);
    checkHour(twelvePm);
    checkHour(onePm);
    checkHour(twoPm);
    checkHour(threePm);
    checkHour(fourPm);
    checkHour(fivePm);
}

function saveTaskNine() {
    task = editTask.text();
    localStorage.setItem("todo", JSON.stringify(task));
    console.log(task);
}
saveBtn.on("click", function () {
    console.log("Hello");
    saveBtn.on("click", saveTaskNine());
})

function saveTaskTen() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskEleven() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskTwelve() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskOne() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskTwo() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskThree() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskFour() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }

function saveTaskFive() {
        taskText = task.text();
        localStorage.setItem("todo", task);
    }


init();

for (let i = 0; i < 8; i++) {
    console.log(i);
}
