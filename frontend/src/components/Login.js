import React,{useState} from 'react'
import { Link,Routes,Route, Navigate} from 'react-router-dom'
import Home from './Home';
import Navigater from './Navigater';
import Weather from './Weather';
import TravelMap from './TravelMap';
import NavBar from './NavBar';
import Signup from './Signup';
import axios from 'axios';
import "./Login.css"
function Login({setUser}) {
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const [alert, setAlert] = useState(null);
  const [login, setLogin] = useState(false);
 async function handleSubmit(params) {
    params.preventDefault();
    try {
      const user={
        username:name,
        password:pass,
      }
     const res = await axios.post("http://localhost:7000/api/user/login",user);
     console.log(res.data.id);
     console.log(res.data);
     setLogin(true);
     setAlert(res.data);
     setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='contadiner'>
    <div className="loginImage">
    <img src="https://cdn.pixabay.com/photo/2018/06/18/23/03/europe-3483539_1280.jpg" alt="" srcset="" />
        </div> 
    <div className="loginForm">
    <div className="meraForm login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
             <label htmlFor="username">Username</label> <br />
            <input type="text" name='username' onChange={(event) => {setName(event.target.value)}} placeholder='Enter Your Username' /><br />
             <label htmlFor="password">Password</label><br />
            <input type="password" name='password' onChange={(event) =>{setPass(event.target.value)}} placeholder='Enter Your Password' /><br />
            <button type='submit'>Submit</button>
        </form>
        <p>Doesn't have an Account?<Link to="/signup">SignUp</Link></p>
    </div>
    </div>
    {login &&
    <>
    <Routes>
      <Route exact path='/home' element={<Home />} />
    </Routes>
    <Navigate to='/home' />
    </>
    }
    {alert && window.alert("Login Successful")}
    </div>
  )
}

export default Login