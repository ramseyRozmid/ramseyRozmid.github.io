
$.ajax({
        url: "http://dataservice.accuweather.com/currentconditions/v1/93546?apikey=9FgsVWLT1jp8brXy3Li4GjyFgGeI7919",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);

        },
        error: function (error) {

            console.log(error);
        }
    });
