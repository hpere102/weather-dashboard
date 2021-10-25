var userForm = document.querySelector("#submit-form");
var cityInput = document.querySelector("#city-input");
var currentWeatherCont = document.querySelector("#current-weather");
var contList = document.querySelector("#cont-list");
var forecastDays = document.querySelector("#days-weather");







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
    cityTitle.textContent = cityFacts + "  (" + cityDay + ")   " + cityIcon;
    contList.appendChild(cityTitle);
    infoDiv.appendChild(contList);
    currentWeatherCont.appendChild(infoDiv);
    cityTitle.style.cssText = "font-size: 30px; font-weight: bold; margin-bottom: 20px;"
    console.log(cityFacts);

    // display temp
    var cityTemp = weather.list[0].main.temp;
    console.log(cityTemp);
    tempTitle = document.createElement("li");
    tempTitle.textContent = "Temp:  " + cityTemp + " °F";
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

    // display card 1 

    // display date
    var date1 = weather.list[2].dt_txt;
    date1Title = document.createElement("li");
    date1Title.classList.add("bold-class")
    card1Ul = document.createElement("ul");
    card1Ul.classList.add("card-ul");
    card1Div = document.createElement("div");
    card1Div.classList.add("card-div");
    date1Title.textContent = date1  + " PM";
    card1Ul.appendChild(date1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display temp
    var temp1 = weather.list[2].main.temp;
    temp1Title = document.createElement("li");
    temp1Title.classList.add("li-class")
    temp1Title.textContent = "Temp:  " + temp1 + " °F";
    card1Ul.appendChild(temp1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display wind
    var wind1 = weather.list[2].wind.speed;
    wind1Title = document.createElement("li");
    wind1Title.classList.add("li-class")
    wind1Title.textContent = "Wind:  " + wind1 + " MPH";
    card1Ul.appendChild(wind1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display humidity
    var hum1 = weather.list[2].main.humidity;
    hum1Title = document.createElement("li");
    hum1Title.classList.add("li-class")
    hum1Title.textContent = "Humidity:  " + hum1 + "%";
    card1Ul.appendChild(hum1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display card 2

    // display date
    var date1 = weather.list[10].dt_txt;
    date1Title = document.createElement("li");
    date1Title.classList.add("bold-class")
    card1Ul = document.createElement("ul");
    card1Ul.classList.add("card-ul");
    card1Div = document.createElement("div");
    card1Div.classList.add("card-div");
    date1Title.textContent = date1 + " PM";
    card1Ul.appendChild(date1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display temp
    var temp1 = weather.list[10].main.temp;
    temp1Title = document.createElement("li");
    temp1Title.classList.add("li-class")
    temp1Title.textContent = "Temp:  " + temp1 + " °F";
    card1Ul.appendChild(temp1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display wind
    var wind1 = weather.list[10].wind.speed;
    wind1Title = document.createElement("li");
    wind1Title.classList.add("li-class")
    wind1Title.textContent = "Wind:  " + wind1 + " MPH";
    card1Ul.appendChild(wind1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // dsiplay humidity
    var hum1 = weather.list[10].main.humidity;
    hum1Title = document.createElement("li");
    hum1Title.classList.add("li-class")
    hum1Title.textContent = "Humidity:  " + hum1 + "%";
    card1Ul.appendChild(hum1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display card 3 

    // display date
    var date1 = weather.list[18].dt_txt;
    date1Title = document.createElement("li");
    date1Title.classList.add("bold-class")
    card1Ul = document.createElement("ul");
    card1Ul.classList.add("card-ul");
    card1Div = document.createElement("div");
    card1Div.classList.add("card-div");
    date1Title.textContent = date1  + " PM";
    card1Ul.appendChild(date1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);
    

    // display temp
    var temp1 = weather.list[18].main.temp;
    temp1Title = document.createElement("li");
    temp1Title.classList.add("li-class")
    temp1Title.textContent = "Temp:  " + temp1 + " °F";
    card1Ul.appendChild(temp1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display wind
    var wind1 = weather.list[18].wind.speed;
    wind1Title = document.createElement("li");
    wind1Title.classList.add("li-class")
    wind1Title.textContent = "Wind:  " + wind1 + " MPH";
    card1Ul.appendChild(wind1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // dsiplay humidity
    var hum1 = weather.list[18].main.humidity;
    hum1Title = document.createElement("li");
    hum1Title.classList.add("li-class")
    hum1Title.textContent = "Humidity:  " + hum1 + "%";
    card1Ul.appendChild(hum1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display card 4 

    // display date
    var date1 = weather.list[26].dt_txt;
    date1Title = document.createElement("li");
    date1Title.classList.add("bold-class")
    card1Ul = document.createElement("ul");
    card1Ul.classList.add("card-ul");
    card1Div = document.createElement("div");
    card1Div.classList.add("card-div");
    date1Title.textContent = date1  + " PM";
    card1Ul.appendChild(date1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display temp
    var temp1 = weather.list[26].main.temp;
    temp1Title = document.createElement("li");
    temp1Title.classList.add("li-class")
    temp1Title.textContent = "Temp:  " + temp1 + " °F";
    card1Ul.appendChild(temp1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display wind
    var wind1 = weather.list[26].wind.speed;
    wind1Title = document.createElement("li");
    wind1Title.classList.add("li-class")
    wind1Title.textContent = "Wind:  " + wind1 + " MPH";
    card1Ul.appendChild(wind1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // dsiplay humidity
    var hum1 = weather.list[26].main.humidity;
    hum1Title = document.createElement("li");
    hum1Title.classList.add("li-class")
    hum1Title.textContent = "Humidity:  " + hum1 + "%";
    card1Ul.appendChild(hum1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display card 5

    // display date
    var date1 = weather.list[26].dt_txt;
    date1Title = document.createElement("li");
    date1Title.classList.add("bold-class")
    card1Ul = document.createElement("ul");
    card1Ul.classList.add("card-ul");
    card1Div = document.createElement("div");
    card1Div.classList.add("card-div");
    date1Title.textContent = date1  + " PM";
    card1Ul.appendChild(date1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display temp
    var temp1 = weather.list[26].main.temp;
    temp1Title = document.createElement("li");
    temp1Title.classList.add("li-class")
    temp1Title.textContent = "Temp:  " + temp1 + " °F";
    card1Ul.appendChild(temp1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // display wind
    var wind1 = weather.list[26].wind.speed;
    wind1Title = document.createElement("li");
    wind1Title.classList.add("li-class")
    wind1Title.textContent = "Wind:  " + wind1 + " MPH";
    card1Ul.appendChild(wind1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);

    // dsiplay humidity
    var hum1 = weather.list[26].main.humidity;
    hum1Title = document.createElement("li");
    hum1Title.classList.add("li-class")
    hum1Title.textContent = "Humidity:  " + hum1 + "%";
    card1Ul.appendChild(hum1Title);
    card1Div.appendChild(card1Ul);
    forecastDays.appendChild(card1Div);




    
    
   

  
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

