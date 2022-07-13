var inputEl;
var value = 'london'
var url = "https://www.google.com/api?search=" + value;

// user types in input
// click search button
// click event listner hits function
// this function grabs the value of the input element;
// add input value to query url
// hit fetch request
// wait for response, then dynamically add to screen
// save search value in localstorage

//Input City --converts to--> Lat/Lon --converts to--> Weather (APIs: coordinates and weather)

fetch(url).then(function(res) {
    return res.json()
}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})