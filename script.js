var today = moment().format("dddd, MMMM Do YYYY");
console.log(today);

var hour = moment().hour();
console.log(hour);

$("#currentDay").text(today);


$('.description').each(function(){
    if (hour > $(this).attr("id")){
        $(this).attr("class", "description past");
    } else if (hour == $(this).attr("id")){
        $(this).attr("class", "description present");
    } else if (hour < $(this).attr("id")){
        $(this).attr("class", "description future");
    }
});

// add event listener for all save btns
// check in local storage for existing entry
// create/override existing local storage item
// render on page
// add init function to render local storage items on page upon reload