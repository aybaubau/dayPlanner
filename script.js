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

$('.saveBtn').on('click', function(){
    var hourKey = $(this).siblings(".description").attr("id");
    var textValue = $(this).siblings(".description").val();
    localStorage.setItem(hourKey, textValue);
})

function init(){
    if (localStorage.length > 0) {
        var storageItems = {...localStorage};
        $.each(storageItems, function(key){
            var hourID = parseInt(key);
            $(`#${hourID}`).html(storageItems[hourID]);
        })
}
};

init();