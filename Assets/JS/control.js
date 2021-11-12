// dynamically create day display at top of page

$.get("#currentDay");
$("#currentDay").append("Hi! This is your schedule for " + moment().format('dddd, MMM Do'));

// create arary for each time block
var hoursIndex = 0

var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]


// create code to append time block
$.get(".container");
$(".container").append(hours[0]);