// Set API token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyaWFkYnVyZyIsImEiOiJja3F2aDNmMm8wZWI0Mm9vNml1Z3Q1MHllIn0.vjzbn7HED8t350Vc_en9HA';

var map = new mapboxgl.Map({
    container: 'map',
    // Changed the style of the map
    style: 'mapbox://styles/dariadburg/ckqvl7jlv1zwz18m4qjdsifii',
    center: [28.5729, 80.6490],
    zoom: 2,
    pitch: 45,
})