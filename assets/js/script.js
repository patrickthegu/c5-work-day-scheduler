// Set the date in the jumbotron
$("#currentDay").text(moment().format('dddd, MMM Do'));

//colour time blocks based on time
var currentHour = moment().hour();

var hour9am = $("#9am");
var hour10am = $("#10am");
var hour11am = $("#11am");
var hour12pm = $("#12pm");
var hour1pm = $("#1pm");
var hour2pm = $("#2pm");
var hour3pm = $("#3pm");
var hour4pm = $("#4pm");
var hour5pm = $("#5pm");

var timeBlock = [
    hour9am,
    hour10am,
    hour11am,
    hour12pm,
    hour1pm,
    hour2pm,
    hour3pm,
    hour4pm,
    hour5pm
];

for (var i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].data("time") < currentHour){
        timeBlock[i].removeClass("future past present");
        timeBlock[i].addClass("past");
    } else if (timeBlock[i].data("time") === currentHour){
        timeBlock[i].removeClass("future past present");
        timeBlock[i].addClass("present");
    } else {
        timeBlock[i].removeClass("future past present");
        timeBlock[i].addClass("future");
    };
};

// save schedule items
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
        var text = $(this).siblings("textarea").val();
        var hour = $(this).siblings("textarea").data("time");

        localStorage.setItem(hour, text);
    }
);

// load saved schedule items
$("#9am").val(localStorage.getItem(9));
$("#10am").val(localStorage.getItem(10));
$("#11am").val(localStorage.getItem(11));
$("#12pm").val(localStorage.getItem(12));
$("#1pm").val(localStorage.getItem(13));
$("#2pm").val(localStorage.getItem(14));
$("#3pm").val(localStorage.getItem(15));
$("#4pm").val(localStorage.getItem(16));
$("#5pm").val(localStorage.getItem(17));