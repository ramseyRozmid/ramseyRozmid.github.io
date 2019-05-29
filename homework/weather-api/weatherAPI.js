$( document ).ready(function() {
    console.log( "ready!" )

let baseURL = ('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=')
let token = ('&appid=3d86ff3747fab8d7d200519e32b435fe')

let dataResponse

$('.tempBtn').click(function(){

  let userZip = $('.zipInput').val()
  console.log(`UserZip variable is equal to ${userZip}`)

  $.ajax({
    method:'GET',
    url: `${baseURL}${userZip}${token}`,
    dataType: 'json'
  })

  .done(function(dataResponse){

  //log out the data
  console.log(dataResponse);

  let kelvinTemp = dataResponse.main.temp

  let fTemp = Math.round(kelvinTemp * 9/5 - 459.67)
  console.log(fTemp)

  $('.temp').html(fTemp)

  $('.cityForm').submit(function(p){
    p.preventDefault()

  })
  })
});
});
