console.log("Hello")

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [30.3, -97.7],
    [43.6861, -79.6333],
    [40.6333, -73.7833]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: 8


  }).addTo(map);

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
    color:'black',
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

//Using Mapbox Styles API ** edited to use dark layer **
// let darkStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// darkStreets.addTo(map);

//Using Mapbox Styles API ** edited to use satellite layer **
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
satStreets.addTo(map);