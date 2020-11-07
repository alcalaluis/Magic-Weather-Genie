    function citySearch(){
        var cityName = $("#city-input").val().trim()
        var apiKey = "e411b7dc1e32be877fc4d36a692e8e12";
        var queryUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName +
        "&appid=" + apiKey + "&units=imperial";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(queryUrl);
            console.log(response);
            $("#button-addon2").on("click", function(){
                event.preventDefault();
                citySearch();
            });
        });
    };
