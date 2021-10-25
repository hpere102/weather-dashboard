var userForm = document.querySelector("#submit-form");
var cityInput = document.querySelector("#city-input");
var currentWeatherCont = document.querySelector("#current-weather");
var contList = document.querySelector("#cont-list");
var forecastPanel1 = document.querySelector("#card-1");
var forecastPanel2 = document.querySelector("#card-2");
var forecastPanel3 = document.querySelector("#card-3");
var forecastPanel4 = document.querySelector("#card-4");
var forecastPanel5 = document.querySelector("#card-5");
var forecastList1 = document.querySelector("#card-list-1");
var forecastList2 = document.querySelector("#card-list-2");
var forecastList3 = document.querySelector("#card-list-3");
var forecastList4 = document.querySelector("#card-list-4");
var forecastList5 = document.querySelector("#card-list-5");






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
    // display city,time,weather description
    currentWeatherCont.textContent = "";
    var cityFacts = weather.city.name;
    var cityDay = weather.list[0].dt_txt;
    var cityIcon = weather.list[0].weather[0].description;
    console.log(cityIcon);
    console.log(cityDay);
    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info-border");
    cityTitle = document.createElement("li");
    cityTitle.textContent = cityFacts + "  (" + cityDay +")   " + cityIcon;
    contList.appendChild(cityTitle);
    infoDiv.appendChild(contList);
    currentWeatherCont.appendChild(infoDiv);
    cityTitle.style.cssText = "font-size: 30px; font-weight: bold; margin-bottom: 20px;"
    console.log(cityFacts);

    // display temp
    var cityTemp = weather.list[0].main.temp;
    console.log(cityTemp);
    tempTitle = document.createElement("li");
    tempTitle.textContent = "Temp:  " + cityTemp;
    tempTitle.style.cssText = "margin-bottom: 20px;"
    contList.appendChild(tempTitle);
    infoDiv.appendChild(contList)
    currentWeatherCont.appendChild(infoDiv);

    // display wind
    var cityWind = weather.list[0].wind.speed;
    console.log(cityWind);
    windTitle = document.createElement("li");
    windTitle.textContent = " Wind:  " + cityWind + " MPH";
    windTitle.style.cssText = "margin-bottom: 20px;"
    contList.appendChild(windTitle);
    infoDiv.appendChild(contList)
    currentWeatherCont.appendChild(infoDiv);
    
    

    // display humidity
    var cityHum = weather.list[0].main.humidity;
    console.log(cityHum);
    humTitle = document.createElement("li");
    humTitle.textContent = " Humidity:  " + cityHum + " %";
    humTitle.style.cssText = "margin-bottom: 20px;"
    contList.appendChild(humTitle);
    infoDiv.appendChild(contList)
    currentWeatherCont.appendChild(infoDiv);
    

    // display uv
    
   

  
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

