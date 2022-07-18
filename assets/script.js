var nameInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");
var apiUrl = "https://api.openweathermap.org/";
var currCityData = document.querySelector("#currcity-container");
var fiveDayData = document.querySelector("#five-container");
var cityName = ""
var buttonStorage = document.querySelector("#city-store-buttons");
var cityArray = [];

// user types in input
// click search button
// click event listner hits function
// this function grabs the value of the input element;
// add input value to query url
// hit fetch request
// Open weather API key: 077d9b62f9b77d50803e4072a52edcaa
// wait for response, then dynamically add to screen
// save search value in localstorage
// display saved values on page

//Input City Name

var formSubmitHandler = function (event) {
    event.preventDefault();
    cityName = nameInputEl.value.trim();
    if (cityName) {
        getLatLonData(cityName);
        saveCity(cityName);
        nameInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
};


//Get Lat/Long API

var getLatLonData = function (city) {
    "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=077d9b62f9b77d50803e4072a52edcaa";
    var cityLat = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=077d9b62f9b77d50803e4072a52edcaa";

    fetch(cityLat).then(function (res) {
        return res.json()
    }).then(function (data) {
        getCityData(data[0].lat, data[0].lon)
    }).catch(function (err) {
        console.log(err);
    })

};

//Data API

var getCityData = function (lat, lon) {
    var cityDataURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=077d9b62f9b77d50803e4072a52edcaa";

    fetch(cityDataURL).then(function (res) {
        return res.json()
    }).then(function (data) {
        currDisplay(data);
        fiveDisplay(data);
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    })

};

//Current Day Display

var currDisplay = function (data) {
    var currDisplayList = document.createElement("ul");
    var currDisplayName = document.createElement("li");
    var currDisplayTemp = document.createElement("li");
    var currDisplayWind = document.createElement("li");
    var currDisplayHum = document.createElement("li");
    var currDisplayUV = document.createElement("li");
    currDisplayName.textContent = cityName; //need to add date
    currDisplayTemp.textContent = "Temperature: " + data.current.temp;
    currDisplayWind.textContent = "Wind: " + data.current.wind_speed;
    currDisplayHum.textContent = "Humidity: " + data.current.humidity;
    currDisplayUV.textContent = "UV: " + data.current.uvi;
    currDisplayName.setAttribute("class", "fs-2 fw-bold")
    currDisplayList.setAttribute("class", "list-unstyled");
    currDisplayList.appendChild(currDisplayName);
    currDisplayList.appendChild(currDisplayTemp);
    currDisplayList.appendChild(currDisplayWind);
    currDisplayList.appendChild(currDisplayHum);
    currDisplayList.appendChild(currDisplayUV);
    currCityData.appendChild(currDisplayList);

};

//5-Day Data API

var fiveDisplay = function (data) {
    for (let i = 0; i < 5; i++) {
        var fiveForecast = document.createElement("div");
        fiveForecast.setAttribute("class", "col-4");
        var fiveDisplayList = document.createElement("ul");
        var fiveDisplayName = document.createElement("li");
        var fiveDisplayTemp = document.createElement("li");
        var fiveDisplayWind = document.createElement("li");
        var fiveDisplayHum = document.createElement("li");
        var fiveDisplayUV = document.createElement("li");
        fiveDisplayTemp.textContent = "Temperature: " + data.daily[i].temp.day;
        fiveDisplayWind.textContent = "Wind: " + data.daily[i].wind_speed;
        fiveDisplayHum.textContent = "Humidity: " + data.daily[i].humidity;
        fiveDisplayUV.textContent = "UV: " + data.daily[i].uvi;
        fiveDisplayList.setAttribute("class", "text-bg-secondary p-3 list-unstyled");
        fiveDisplayList.appendChild(fiveDisplayName);
        fiveDisplayList.appendChild(fiveDisplayTemp);
        fiveDisplayList.appendChild(fiveDisplayWind);
        fiveDisplayList.appendChild(fiveDisplayHum);
        fiveDisplayList.appendChild(fiveDisplayUV);
        fiveForecast.appendChild(fiveDisplayList);
        fiveDayData.appendChild(fiveForecast);
    }

};

var buttonCreator = function (saveData) {
    if (saveData > 0) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            var button = document.createElement("button");
            button.textContent = saveData[i].cityName;
            buttonStorage.appendChild(button);
        }
    }

};

//Save Search Values

var saveCity = function (city) {
    cityArray.push(city);
    localStorage.setItem("cityName", JSON.stringify(cityArray));
};

//Load Search Value (needs to be in button form)

var loadCity = function () {
    cityName = JSON.parse(localStorage.getItem("cityName"));
    buttonCreator(cityName);
};

userFormEl.addEventListener("submit", formSubmitHandler);
loadCity()