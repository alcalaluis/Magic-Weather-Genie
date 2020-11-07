
        var apiKey = "e411b7dc1e32be877fc4d36a692e8e12";
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?appid=e411b7dc1e32be877fc4d36a692e8e12&q=dallas";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(queryUrl);
            console.log(response);         
            });
    
    
