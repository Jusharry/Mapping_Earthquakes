console.log("Hello")

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Get city data from cities.js
let cityData = cities;

//Loop through the cities array and add a marker for each city
// cityData.forEach ((city)=>{
//       console.log(city)
//       L.marker(city.location)
//       .bindPopup("<h2>" + city.city +", "+ city.state +"</h2> <hr> <h3>Population: " +city.population.toLocaleString()+"</h3>").addTo(map);
//   });
//Loop through the cities array and add circle markers to map 
cityData.forEach((city)=>{
    console.log(city)
L.circleMarker(city.location, {
    radius: city.population/100000,
    color:'yellow',
    fillcolor:'lightyellow'})
    .bindPopup("<h2>" + city.city +", "+ city.state +"</h2> <hr> <h3>Population: " +city.population.toLocaleString()+"</h3>")
 .addTo(map);
});

//Create a tile layer that will be the map background using Leaflet 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//Using Mapbox Styles API ** edited to use dark layer 
let darkStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
darkStreets.addTo(map);