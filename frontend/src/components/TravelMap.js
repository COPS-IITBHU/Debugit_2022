import React from 'react'
import Map, {Marker,Popup,GeolocateControl,NavigationControl} from 'react-map-gl'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState,useEffect,useRef } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import 'mapbox-gl/dist/mapbox-gl.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./TravelMap.css"
import axios from 'axios';
import NavBar from './NavBar';
function TravelMap({user}) {
    const [Favorite, setFavorite] = useState([]);
    const [currentId, setCurrentId] = useState(null)
    const [newLocation, setNewLocation] = useState(null)
    const titleRef = useRef();
    const reviewRef = useRef();
    const ratingRef = useRef();

    useEffect(() => {
      async function getFavorites(){
          try {
            console.log("i");
            const favoriteUrl = "http://localhost:7000/api/favorite/favorite" ;
            const response= await axios.get(favoriteUrl);
            setFavorite(response.data);
          } catch (err) {
              console.log(err);
          }
     }
     getFavorites();
    }, [])
    function handleIconClick(id) {
      setCurrentId(id);
    }
    function handleDblClick(params) {
      console.log(params);
      setNewLocation(params.lngLat)
    }
 async function handleSubmit(params) {
    params.preventDefault();
    const newFavorite ={
      username:user.username,
      title:titleRef.current,
      description:reviewRef.current,
      rating:ratingRef.current,
      locateLatitude:newLocation.lat,
      locateLongitude:newLocation.lng,
    }
    try {
      const res = await axios.post("http://localhost:7000/api/favorite/favorite",newFavorite); 
      setFavorite([...Favorite,res.data]);
      setNewLocation(null);
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
      mapboxAccessToken='pk.eyJ1IjoicGFydGlrIiwiYSI6ImNsMjJ2NjE5YjAwdDYzYm8wcXEyaTJqNjAifQ.0mHBO74Npc2hqo2KxAZA6g' onDblClick={handleDblClick}>
       {Favorite.map(sher=>(
          <div>
           <Marker longitude={sher.locateLongitude} latitude={sher.locateLatitude}>
       <LocationOnIcon style={{color:sher.username===user.username ? "5EE6EB" : "#86FF70",cursor:"pointer"}}  onClick={()=>handleIconClick(sher._id)}/>
    </Marker>
      {currentId===sher._id && <Popup longitude={sher.locateLongitude} latitude={sher.locateLatitude}
     anchor="left" closeOnClick={false} onClose={()=>{setCurrentId(null)}}>
     <div className="card">
     <label htmlFor="place">Place</label>
     <div className='place' style={{fontSize:"1rem"}}>{sher.title}</div>
            <label htmlFor="">Review</label>
            <div className='review'>{sher.description}</div>
            <label htmlFor="rating">Rating</label>
            <div className="rating">
              {Array(sher.rating).fill(<PublicIcon  style={{fontSize:"25px",color:"gold"}}/>)}  
            </div>
            <label htmlFor="">Info of User</label>
           <div className="user">Created with <FavoriteIcon style={{fontSize:"medium",color:"red"}} /> By <span className='username'>{sher.username}</span></div>
        </div>
      </Popup>}
    </div>
      ))} ;
   {newLocation && <Popup longitude={newLocation.lng} latitude={newLocation.lat}
        anchor="left" onClose={()=>{setNewLocation(null)}}>
        <div className='card'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">
             Place
            </label>
            <input type="text" placeholder='Enter the Place name' onChange={(evet)=>{titleRef.current = evet.target.value}} />
            <label htmlFor="review">Review</label>
            <input type="text" placeholder='Enter the review of the place' onChange={(evet)=>{reviewRef.current = evet.target.value}} />
            <label htmlFor="rating">Rating</label><br />
            <select name="rating" id="selectRating"  onChange={(evet)=>{ratingRef.current = evet.target.value}}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
            </select>
            <br />
            <button>Create New Favorite</button>
          </form>
        </div>
      </Popup>
      }
       <GeolocateControl /> <NavigationControl />
    </ Map>
    </>
  )
}

export default TravelMap;