// dynamically create day display at top of page

$.get("#currentDay");
$("#currentDay").append("Hi! This is your schedule for " + moment().format('dddd, MMM Do'));

// create arary for each time block
var hoursIndex = 0

var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// got the following code from class resource. Not sure how it works or what it's doing. But they suggested I use it.. update: and it broke all of my code. 
hours.forEach( function(hourString, index, array){
    console.log("hourString ", hourString)
    //console.log("index ", index) //comment this line back in whenever.
    // console.log("array ", array)  //comment this line back in if you like.
  
    var newElem = $("p") //make a p-tag
    newElem.text(hourString) //give it some text (from hours array)
    $(".container").append(newElem) //throw that somewhere on the page.
    //all of this should be edited to make nice rows, textareas, and buttons of course.
  });