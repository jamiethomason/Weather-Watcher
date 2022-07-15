var nameInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");
var apiUrl = "http://api.openweathermap.org/";
var currCityData = document.querySelector("#currcity-container");
var fiveDayData = document.querySelector("#five-container");

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

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = nameInputEl.value.trim();
    if (cityName) {
        getLatLonData(cityName);
        nameInputEl.value = "";
    } else {
      alert("Please enter a city name");
    }
};
  

//Get Lat/Long API

var getLatLonData = function(city) {
    "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=077d9b62f9b77d50803e4072a52edcaa";
    var cityLat = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=077d9b62f9b77d50803e4072a52edcaa";

fetch(cityLat).then(function(res) {
    return res.json()
}).then(function(data) {
    getCityData(data[0].lat, data[0].lon)
}).catch(function(err) {
    console.log(err);
})

};

//Current Data API

var getCityData = function(lat, lon) {
    var cityDataURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=077d9b62f9b77d50803e4072a52edcaa";

fetch(cityDataURL).then(function(res) {
    return res.json()
}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})

};

//5-Day Data API

var fiveDayData= function(user) {
    "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={077d9b62f9b77d50803e4072a52edcaa}";

fetch(apiUrl).then(function(res) {
    return res.json()
}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})

};

//Save Search Values

var saveCity = function() {
    localStorage.setItem("cityName", JSON.stringify(cityName));
};

//Load Search Value (needs to be in button form)

var loadCity = function() {
    cityName = JSON.parse(localStorage.getItem("cityName"));
};

userFormEl.addEventListener("submit", formSubmitHandler);