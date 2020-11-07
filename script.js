$("#find-weather").on("click", function (event) {

    event.preventDefault();

    var cityName = $("#city-input").val();
    var apiKey = "e411b7dc1e32be877fc4d36a692e8e12";
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e411b7dc1e32be877fc4d36a692e8e12&q=" + cityName + "&units=imperial";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        $("#current-city").text(JSON.stringify(response));
        console.log(queryUrl);
        console.log(response);
    });

});

var cities = [""];

function renderCities() {
    for (var i = 0; i < cities.length; i++) {
        var city = $("<button>");
        city.addClass("city")
        city.attr("data-name", cities[i]);
        city.text(cities[i]);
        $("#city-list").append(city);
    }
}

