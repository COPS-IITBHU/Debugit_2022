import React from 'react'
import { Link, Navigate, Route, Routes} from 'react-router-dom'
import "./NavBar.css"

function NavBar({setUser,user}) {

  return (
  <>
  {/* <nav className='main-nav'>
     <MenuIcon className='icon'style={{fontSize:"3rem"}}/>
     <label className='logo'>Map Wale</label>
     <ul>
       <li><Link className='activer' to="/home">Home</Link></li>
       <li><Link className='activer' to="/travelmap">Travel</Link></li>
       <li><Link className='activer' to="/navigate">Navigate</Link></li>
       <li><Link className='activer' to="/weather">Weather</Link></li>
       <li><button className='logOut'><Link to="/" className='logOutLink' onClick={()=>{setUser(null)}}>Log Out</Link></button></li>
       
     </ul>
   
    
    
  </nav> */}
  <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:"linear-gradient(to bottom,rgb(31, 141, 31),rgb(23, 117, 31)"
}}>
  <div className="container-fluid" style={{color:"white"}} >
    <Link className="navbar-brand mx-5" to="/home" style={{marginRight:"3rem",fontSize:"1.5rem",fontWeight:"bolder",}}>Map Wale</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/travelmap">Travel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/navigate">Navigate</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/weather">Weather</Link>
        </li>
      </ul>
      <button className='logOut'><Link to="/" className='logOutLink' onClick={()=>{setUser(null)}}>Log Out</Link></button>
      {user===null && <>
      <Routes>
        <Route exact path='/' />
      </Routes>
      <Navigate to="/" />
      </>
      }
    </div>
  </div>
</nav>
  </>
  )
}
export default NavBar