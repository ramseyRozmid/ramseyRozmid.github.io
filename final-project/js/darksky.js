
$.ajax({
        url: "https://api.darksky.net/forecast/9840062fcd7aa695142761c413cf9a88/37.8267,-122.4233",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);
              document.querySelector("#day-snow").innerHTML = parsedResponse.currently.temperature

              // Above tag is not mapped correctly to frontend HTML value

            // document.querySelector("#weather").innerHTML = parsedResponse[0].WeatherText
        },
        error: function (error) {

            console.log(error);
        }
    });
