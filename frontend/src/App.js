import './App.css';
import TravelMap from './components/TravelMap';
import NavBar from './components/NavBar';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import Navigater from './components/Navigater';
import Weather from './components/Weather';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState} from 'react'
function App() {
  const [user, setUser] = useState({});
  return (
    <> 
    <Routes>
          <Route exact path='*' element={<Login setUser={setUser} /> } /> 
          <Route exact path='/signup' element={<Signup /> } /> 
          <Route exact path='/home' element={<Home setUser={setUser} user={user} />} />
          <Route exact path='/travelmap' element ={<TravelMap user={user} />} />
          <Route exact path='/navigate' element ={<Navigater />} />
          <Route exact path='/weather' element ={<Weather />} />
    </Routes>
    
  
    </>
  );
}

export default App;
