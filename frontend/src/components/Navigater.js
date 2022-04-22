import React from 'react'
import Map, {NavigationControl,GeolocateControl} from 'react-map-gl';
import NavBar from './NavBar';
function Navigater() {
  function handleDblclick(params) {
    console.log(params.lngLat);
  }
  return (
    <>
    <NavBar />
      <Map
      initialViewState={{
        longitude: 74.8765,
        latitude: 31.6200,
        zoom: 10,
      }}
      style={{width: "100vw", height: "89vh"}}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken='pk.eyJ1IjoicGFydGlrIiwiYSI6ImNsMjJ2NjE5YjAwdDYzYm8wcXEyaTJqNjAifQ.0mHBO74Npc2hqo2KxAZA6g' onDblClick={handleDblclick}>
  <NavigationControl /> <GeolocateControl />
  </Map>
  </>
  )
}

export default Navigater