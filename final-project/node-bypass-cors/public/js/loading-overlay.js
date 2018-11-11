//Source: https://gasparesganga.com/labs/jquery-loading-overlay/#animations

$.LoadingOverlay("show", {
    image : "img/snowflake.png",
    text : "Snow report in progress!"
});

// Hide it after 3 seconds
setTimeout(function(){
    $.LoadingOverlay("hide");
}, 3000);
