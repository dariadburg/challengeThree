// Set API token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyaWFkYnVyZyIsImEiOiJja3F2aDNmMm8wZWI0Mm9vNml1Z3Q1MHllIn0.vjzbn7HED8t350Vc_en9HA';

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map',

    // Changed the style of the map
    style: 'mapbox://styles/dariadburg/ckqvl7jlv1zwz18m4qjdsifii',

    //Positioning the map on a specific longitude and latitude (Kennedy Space Center, Cape Canaveral, Florida) and zooming in
    center: [28.5729, 80.6490],
    zoom: 2,
})

map.addControl(new mapboxgl.NavigationControl())

// Creating a pop-up for the map
var myPopup = new mapboxgl.Popup().setHTML('<h3>Kennedy Space Center</h3><p>Prepare for landing</p>');

// Adding a market for the pop-up based on longitude and latitude coordinates
var marker = new mapboxgl.Marker().setLngLat([28.5729, 80.6490]).setPopup(myPopup).addTo(map);