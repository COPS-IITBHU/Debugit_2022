src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"

mapboxgl.accessToken ="pk.eyJ1Ijoic3VsdGFuaWEyMDA5IiwiYSI6ImNrb3NkdmZ4cTAwaWsyeW52dW5lMmVrMWgifQ.eRgXcqznMP0-6y-HA8iKhQ";

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [85.11984142415537, 25.582483018337157],
  zoom: 4

});
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true,
showUserHeading: true
})
);