var userForm = document.querySelector("#submit-form");
var cityInput = document.querySelector("#city-input");
var currentWeatherCont = document.querySelector("#current-weather");





var getWeather = function(city) {

    var weatherDetails = "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" + city

    $.get(weatherDetails, function( data ) {
        $( ".result" ).html( data );
        displayWeather(data);
        console.log(data);
        
        
    })
};

var displayWeather = function(weather) {
    if (weather.length === 0) {
        currentWeatherCont.textContent = "Weather not available";
        return;
    }

    currentWeatherCont.textContent = "";
    var cityFacts = weather.city.name;
    cityTitle = document.createElement("span");
    cityTitle.textContent = cityFacts;
    currentWeatherCont.appendChild(cityTitle);
    cityTitle.style.cssText = "font-size: 30px; font-weight: bold;"
    console.log(cityFacts);
   

  
}

var submitHandler = function(event) {
    event.preventDefault();

    var cityEl = cityInput.value.trim();

    if (cityEl) {
        getWeather(cityEl);
        cityInput.value = "";
    } else {
        currentWeatherCont.textContent = "Please enter a valid city";
        return;
    }
};

userForm.addEventListener("submit", submitHandler );