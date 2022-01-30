// console.log("Hello")

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data and render each feature as a marker using pointToLayer()callback function
// L.geoJSON(sanFranAirport,{
//   pointToLayer: function(feature,latlng){
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>"+ feature.properties.name +"</h2> <hr> <h3>" +feature.properties.city+", "+ feature.properties.country+ "</h3>");
//   }
// }).addTo(map);

//OnEachFeature method
L.geoJSON(sanFranAirport,{
  onEachFeature: function(feature,layer){
    console.log(layer);
    layer.bindPopup;

  }
}).addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [30.3, -97.7],
//     [43.6861, -79.6333],
//     [40.6333, -73.7833]
//   ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     weight: 4,
//     opacity: 0.5,
//     dashArray: 8


//   }).addTo(map);

// Get city data from cities.js
// let cityData = cities;

//Loop through the cities array and add a marker for each city
// cityData.forEach ((city)=>{
//       console.log(city)
//       L.marker(city.location)
//       .bindPopup("<h2>" + city.city +", "+ city.state +"</h2> <hr> <h3>Population: " +city.population.toLocaleString()+"</h3>").addTo(map);
//   });

//Loop through the cities array and add circle markers to map 
// cityData.forEach((city)=>{
//     console.log(city)
// L.circleMarker(city.location, {
//     radius: city.population/100000,
//     color:'black',
//     fillcolor:'lightyellow'})
//     .bindPopup("<h2>" + city.city +", "+ city.state +"</h2> <hr> <h3>Population: " +city.population.toLocaleString()+"</h3>")
//  .addTo(map);
// });

//Create a tile layer that will be the map background using Leaflet 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//Using Mapbox Styles API ** edited to use dark layer **
// let darkStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// darkStreets.addTo(map);

//Using Mapbox Styles API ** edited to use satellite layer **
// let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// satStreets.addTo(map);

//Using Mapbox Styles API ** edited to use navigation night **
// let navStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}',{
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// navStreets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Jusharry/Mapping_Earthquakes/main/majorAirports.json";