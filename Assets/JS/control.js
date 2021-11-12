// dynamically create day display at top of page

$("#currentDay").append("Hi! This is your schedule for " + moment().format('dddd, MMM Do'));

// create array for each time block
// var hoursIndex = 0

var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// loop through array to display dynamically

for (let i = 0; i < hours.length; i++) {
    var hoursDisplay = hours[i];

    // create parent div
    var parentDiv = $("<div>").addClass("row");

    // create hours and append
    var newHour = $("<div>").addClass("time-block row-1 hour").text(hours[i]);
    $(parentDiv).append(newHour);

    // create and append text area
    var newText = $("<textarea>").addClass("time-block description col-10")
    $(parentDiv).append(newText);

    // create and append button
    var newButton = $("<button>").addClass("time-block saveBtn col-1").attr("width", "20");
    $(parentDiv).append(newButton);

    $(".container").append(parentDiv);
};


$(".saveBtn").click(function() {
    var entry = $(this).siblings("textarea").val();
    var time = $(this).parent(".row").text();

    localStorage.setItem ("entry", entry);
    localStorage.setItem("time", time);

    console.log(time);
    console.log(entry);
});

var loadSchedule = function() {
    entry = localStorage.getItem("entry");
    time = localStorage.getItem("time");
}



// // got the following code from class resource. Not sure how it works or what it's doing. But they suggested I use it.. update: and it broke all of my code. 
// hours.forEach( function(hourString, index, array){
//     console.log("hourString ", hourString)
//     //console.log("index ", index) //comment this line back in whenever.
//     // console.log("array ", array)  //comment this line back in if you like.
  
//     var newElem = $("p") //make a p-tag
//     newElem.text(hourString) //give it some text (from hours array)
//     $(".container").append(newElem) //throw that somewhere on the page.
//     //all of this should be edited to make nice rows, textareas, and buttons of course.
//   });