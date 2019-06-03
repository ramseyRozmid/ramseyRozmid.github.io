$.LoadingOverlay("show", {
image       : "images/ajax_loader.gif",
});

setTimeout(function(){
$.LoadingOverlay("hide");
}, 1800);

// $(document).ready(function() {
//     console.log( "ready!" )
//
//     $body = $("body");
//
//
//
//
//     // $(document).on({
//     //     ajaxStart: function() { $body.attr('id','popUp.loader');    },
//     //      ajaxStop: function() { $body.attr('id','popUp.loader'); }
//     // });
//
//
//
//
// let redditURL = ('https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json')
//
// let dataResponse
//
// //$('.tempBtn').click(function(){
//
//   $.ajax({
//     method:'GET',
//     url: `${redditURL}`,
//     dataType: 'json'
//   })
//
//   .done(function(dataResponse){
//
//   //log out the data
//   console.log(dataResponse);
//
//
//   //$('.temp').html(fTemp)
//
//   $('.zipForm').submit(function(p){
//     p.preventDefault()
//   })
// });
// });
