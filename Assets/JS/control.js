// dynamically create day display at top of page

$("#currentDay").append("Hi! This is your schedule for " + moment().format('dddd, MMM Do'));

// create variables to count time

var currentHour = moment().hours();

// create arrays for each time block

var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var milHours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

// loop through array to display dynamically

for (let i = 0; i < hours.length; i++) {
    var hoursDisplay = hours[i];
    var clickedTime = i + 8

    // create parent div
    var parentDiv = $("<div>").addClass("row");

    // create hours and append
    var newHour = $("<div>").addClass("time-block col-1 hour").text(hoursDisplay);
    $(parentDiv).append(newHour);

    // create and append text area
    var newText = $("<textarea>").addClass("time-block description col-10").attr("id", milHours[i]);
    $(parentDiv).append(newText);

    // create and append button
    var newButton = $("<button>").addClass("time-block saveBtn col-1").attr("width", "20");
    $(parentDiv).append(newButton);

    // put icon on the button
    var newIcon = $("<span>").addClass("fas fa-save");
    $(newButton).append(newIcon);

    $(".container").append(parentDiv);

    // pull values from local storage and display for each hour

    var loadSchedule = function() {
        var entry = localStorage.getItem(milHours[i]);
        $("#" + milHours[i]).val(entry);
    };

    loadSchedule();
    
};
// end main loop

// save button click logs to local storage

$(".saveBtn").click(function() {
    var entry = $(this).siblings("textarea").val();
    var time = $(this).siblings("textarea").attr("id");

    localStorage.setItem (time, entry);

    console.log(time);
    console.log(entry);
});

// check events for formatting

function whatTime(timeCheck) {

    if (timeCheck < currentHour) {
        return "past";
    } else if (timeCheck === currentHour) {
        return "present";
    } else {
        return "future";
    }
};
