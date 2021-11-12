// dynamically create day display at top of page

$("#currentDay").append("Hi! This is your schedule for " + moment().format('dddd, MMM Do'));

// create variables to count time

var currentHour = moment().format("x");

// create arrays for each time block

var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var calendarEntry = ["", "", "", "", "", "", "", "", "", ""]

// loop through array to display dynamically

for (let i = 0; i < hours.length; i++) {
    var hoursDisplay = hours[i];
    var clickedTime = i + 8

    // create parent div
    var parentDiv = $("<div>").addClass("row").attr("id", hoursDisplay);

    // create hours and append
    var newHour = $("<div>").addClass("time-block col-1 hour").text(hoursDisplay);
    $(parentDiv).append(newHour);

    // create and append text area
    var newText = $("<textarea>").addClass("time-block description col-10")
    $(parentDiv).append(newText);

    // create and append button
    var newButton = $("<button>").addClass("time-block saveBtn col-1").attr("width", "20");
    $(parentDiv).append(newButton);

    // put icon on the button
    var newIcon = $("<span>").addClass("fas fa-save");
    $(newButton).append(newIcon);

    $(".container").append(parentDiv);
};
// end main loop

// save button click logs to local storage

$(".saveBtn").click(function() {
    var entry = $(this).siblings("textarea").val();
    var time = $(this).parent(".row").text();

    localStorage.setItem ("entry", entry);
    localStorage.setItem("time", time);

    console.log(time);
    console.log(entry);
});

// load schedule on refresh or page load

var loadSchedule = function() {
    entry = localStorage.getItem("entry");
    time = localStorage.getItem("time");
};

// check events for formatting

function whatTime(timeCheck) {

    if (timeCheck < currentHour) {
        return "past";
    } else if (timeCheck === currentHour) {
        return "present";
    } else {
        return "future";
    }
}
