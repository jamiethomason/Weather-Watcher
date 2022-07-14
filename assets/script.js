var nameInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");
var apiUrl = "http://api.openweathermap.org/" + value;
var currCityData = document.querySelector("#currcity-container");
var fiveDayData = document.querySelector("#five-container");

// user types in input
// click search button
// click event listner hits function
// this function grabs the value of the input element;
// add input value to query url
// hit fetch request
//Open weather API key: 077d9b62f9b77d50803e4072a52edcaa
// wait for response, then dynamically add to screen
// save search value in localstorage

//Input City Name

var formSubmitHandler = function(event) {
    var cityName = nameInputEl.value.trim();
    if (cityName) {
      getCityData(cityName);
      nameInputEl.value = "";
    } else {
      alert("Please enter a city name");
    }
};

//Submit Button
  

//Get Lat/Long API

var getLatLonData = function(user) {
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={077d9b62f9b77d50803e4072a52edcaa}";

fetch(apiUrl).then(function(res) {
    return res.json()
}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})

};

//Current Data API

var currCityData= function(user) {
    "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={A077d9b62f9b77d50803e4072a52edcaa}";

fetch(apiUrl).then(function(res) {
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


//Load and Save Search Value

var loadCity = function() {
    cityName = JSON.parse(localStorage.getItem("cityName"));
};

var saveCity = function() {
    localStorage.setItem("cityName", JSON.stringify(cityName));
};


userFormEl.addEventListener("submit", formSubmitHandler);
