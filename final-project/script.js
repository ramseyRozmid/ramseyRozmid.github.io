
$.ajax({
        url: "https://api.weatherunlocked.com/api/snowreport/333003?app_id=8d9c4ae6&app_key=13b0abb5260167cd377dc2a48b0a8a45",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);

        },
        error: function (error) {

            console.log(error);
        }
    });
