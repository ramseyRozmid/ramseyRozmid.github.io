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
let redditURL = ('https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json')

let dataResponse

  $.ajax({
    method:'GET',
    url: `${redditURL}`,
    dataType: 'json',
    statusCode: {
    404: function() {
      alert( "API Request Failed :(" );
    }
  }
  })

  .done(function(dataResponse){
    alert('Successful API request!')

  //log out the data
  console.log(dataResponse);

  //$('.temp').html(fTemp)

  let workingData1 = dataResponse.data.children[0]
  let workingData2 = dataResponse.data.children[1]
  let workingData3 = dataResponse.data.children[2]
  let workingData4 = dataResponse.data.children[3]

  $('#articleTitle1').html(workingData1.data.title).click(function(){
    $('#articleTitle1').attr('id','#popUp')
    $('.container').html(workingData1.data.title)
  })

  $('#articleTitle2').html(workingData2.data.title)
  $('#articleTitle3').html(workingData3.data.title)
  $('#articleTitle4').html(workingData4.data.title)

//When the user selects an article's title show the #popUp overlay
//The content of the article must be inserted in the .container class inside #popUp
//Make sure you remove the .loader class when toggling the article information in the pop-up.

  // $('.zipForm').submit(function(p){
  //   p.preventDefault()
  })
// });
// });
