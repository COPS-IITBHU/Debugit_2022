import React, { useRef,useState,useEffect } from 'react'
import "./Weather.css"
import Map, {Marker,Popup,GeolocateControl,NavigationControl} from 'react-map-gl'; 
import { Loader } from 'rsuite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import NavBar from './NavBar';
function Weather() {

    const [icon, setIcon] = useState(false);
    const [coord, setcoord] = useState({});
    const [data, setData] = useState({});
    const [display, setDisplay] = useState(false);
    function handleDblClick(params) {
        if(params==={}){
          return;
        }
        console.log(Object.keys(params).length);
        setcoord(params.lngLat);
        console.log(params);
        console.log(coord);
        setIcon(true);
        // setLoading(true);
        getWeather(params.lngLat);
      }
    async function getWeather(coord) {
      try {
        const url =`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}&units=metric&appid=6bc3d75a9fcdd72ed391b89f74507a07`;
        const response = await axios.get(url);
        setData(response.data);
         console.log(data);
         if(data!=={}){
         setDisplay(true);
         }
        // console.log(data.main.temp);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
    <NavBar />
       <Map
      initialViewState={{
        longitude: 74.8765,
        latitude: 31.6200,
        zoom: 6
      }}
      style={{width: "100vw", height: "89vh"}}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken='pk.eyJ1IjoicGFydGlrIiwiYSI6ImNsMjJ2NjE5YjAwdDYzYm8wcXEyaTJqNjAifQ.0mHBO74Npc2hqo2KxAZA6g' onDblClick={handleDblClick} >
        {icon && (display) && <> 
         <Marker longitude={coord.lng} latitude={coord.lat}>
       <LocationOnIcon style={{color:"#86FF70",cursor:"pointer"}}/>
       </Marker>
         <Popup longitude={coord.lng} latitude={coord.lat}
        anchor="left"
        onClose={()=>{setIcon(false)}}
        >
       <div className="card">
       <div className="icon1" style={{height:"3rem"}}>
           <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
         </div>
     <label htmlFor="place">Name of The Place</label>
     <div className='place' style={{fontSize:"1rem",display:"flex"}}>{data.name}
    
     </div>
     <label htmlFor="place">Main</label>
     <div className='place' style={{fontSize:"1rem",display:"flex"}}>{data.weather[0].main}
    
     </div>
            <label htmlFor="description">Description</label>
            <div className='description'>{data.weather[0].description}</div>
            <label htmlFor="temperature">Temperature</label>
             <div className="temperatureDesc">
                 <ul>
                     <li>Temperature:{data.main.temp}&#176;</li>
                     <li>Feels Like:{data.main.feels_like}&#176;</li>
                     <li>Temperature Min:{data.main.temp_min}&#176;</li>
                     <li>Temperature Max:{data.main.temp_max}&#176;</li>
                     <li>Humidity:{data.main.humidity}</li>
                 </ul>
                 <label htmlFor="wind">Wind</label>
                 <div className="wind">Speed :{data.wind.speed}</div>
             </div>
        </div>
      </Popup>
      </>  
}
      <GeolocateControl />
      <NavigationControl />
  </Map>
    </>
  )
}
export default Weather