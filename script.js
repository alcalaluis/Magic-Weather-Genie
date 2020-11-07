$(document).ready(function(){


var cities = [""];


$("#find-weather").on("click", function (event) {

    event.preventDefault();

    function displayWeather() {
        var cityName = $("#city-input").val();
        var apiKey = "e411b7dc1e32be877fc4d36a692e8e12";
        var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e411b7dc1e32be877fc4d36a692e8e12&q=" + cityName + "&units=imperial";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(queryUrl);
            console.log(response);


            var card = $("#current-city").text(cityName);

            var temp = response.list.main.temp;
            var tempItem = $("#temp").text("Temp:" + temp);
            card.append(tempItem);

            var humid = response.list.main.humidity;
            var humItem = $("#humidity").text("Humidity:" + humid);
            card.append(humItem);

            var windFast = response.list.wind.speed;
            var windItem = $("#wind-speed").text("Wind Speed:" + windFast);
            card.append(windItem);



        });
    }
});


function renderCities() {

    for (var i = 0; i < cities.length; i++) {
        var cityEl = $("<button>");
        cityEl.addClass("city-logs")
        cityEl.attr("data-name", cities[i]);
        cityEl.text(cities[i]);
        $("#city-list").append(cityEl);
    }
};




$("#find-weather").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val().trim().
        cities.push(city);
    renderCities();
});



$(document).on("click", ".city-list");

renderCities();
});