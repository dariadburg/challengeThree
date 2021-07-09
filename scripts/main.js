// Setting API token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyaWFkYnVyZyIsImEiOiJja3F2aDNmMm8wZWI0Mm9vNml1Z3Q1MHllIn0.vjzbn7HED8t350Vc_en9HA';

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map',

    // Changed the style of the map
    style: 'mapbox://styles/dariadburg/ckqvl7jlv1zwz18m4qjdsifii',

    //Positioning the map on a specific longitude and latitude (Kennedy Space Center, Cape Canaveral, Florida) and zooming in
    center: [-80.60, 28.590],
    zoom: 8,
})

map.addControl(new mapboxgl.NavigationControl())

// "LANDING" POP-UP
// Creating a pop-up for the map
var landingPopup = new mapboxgl.Popup().setHTML('<h3>Kennedy Space Center</h3><p>Prepare for landing</p>');

// Creating a custom marker for the landing pop-up
var landingMarker = document.createElement('div');
landingMarker.style.backgroundImage = 'url("https://img.icons8.com/material-rounded/24/000000/rocket.png")';
landingMarker.style.backgroundSize = '100%';
landingMarker.style.width = '20px';
landingMarker.style.height = '20px';

// Adding a market for the pop-up based on longitude and latitude coordinates
var markerLanding = new mapboxgl.Marker(landingMarker).setLngLat([-80.60, 28.590]).setPopup(landingPopup).addTo(map);


// "BEER PUB" POP-UP
// Creating a pop-up for the map
var beerPopup = new mapboxgl.Popup().setHTML('<h3>Beer Pub</h3><p>Opening Times:</p><p>4 pm - 4 am</p>');

// Creating a custom marker for the landing pop-up
var beerMarker = document.createElement('div');
beerMarker.style.backgroundImage = 'url("https://img.icons8.com/ios-glyphs/30/000000/beer.png")';
beerMarker.style.backgroundSize = '100%';
beerMarker.style.width = '20px';
beerMarker.style.height = '20px';

// Adding a market for the pop-up based on longitude and latitude coordinates
var markerBeer = new mapboxgl.Marker(beerMarker).setLngLat([-80.80, 28.590]).setPopup(beerPopup).addTo(map);


// "PARK" POP-UP
// Creating a pop-up for the map
var parkPopup = new mapboxgl.Popup().setHTML('<h3>Park</h3><p>Great nature views</p>');

// Creating a custom marker for the landing pop-up
var parkMarker = document.createElement('div');
parkMarker.style.backgroundImage = 'url("https://img.icons8.com/pastel-glyph/64/000000/tree.png")';
parkMarker.style.backgroundSize = '100%';
parkMarker.style.width = '20px';
parkMarker.style.height = '20px';

// Adding a market for the pop-up based on longitude and latitude coordinates
var markerPark = new mapboxgl.Marker(parkMarker).setLngLat([-80.70, 28.540]).setPopup(parkPopup).addTo(map);