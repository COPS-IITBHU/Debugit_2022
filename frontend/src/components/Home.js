import React,{useState} from 'react'
import {Carousel,Alert} from 'react-bootstrap'
import NavBar from './NavBar'
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Home.css"
import { Link } from 'react-router-dom'
import { Facebook, Twitter } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

function Home({setUser,user}) {

  const [mail, setMail] = useState(null);
  function handleSubmit(params) {
    params.preventDefault();
    emailjs.sendForm('service_mmbery4', 'template_hzwlvvr', '#myForm','y9mB5vIJsqNPywqq-')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
        setMail(true);
    }, function(error) {
       console.log('FAILED...', error);
       setMail(false);
    });
  }
  return (<>
    <NavBar setUser={setUser} user={user}/>
    
    <div className='carousel'>
    <Carousel>
    <Carousel.Item>
    <img style={{height:"90vh"}}
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg"
      alt="First slide"
    />
    <Carousel.Caption style={{textAlign:"center", color: "rgb(15, 212, 252)"}}>
      <h1>Welcome to Map Aale,the ultimate travel app</h1>
      <br />
      <h3>Share your experiences about your travels to different locations with the world<br />And check others experiences to plan your journey</h3><br />
      <h3>Explore your next travel destination through the navigater/</h3>
      <h3>Check the weather of locations before planning Link journey</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{height:"90vh"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Second slide"
    />
    <Carousel.Caption style={{ color: "rgb(15, 212, 252)"}}>
      <h2>Remeber and share your experiences of any location you have ever visited</h2>
      <p>Create markers to your location in just two click and let others around the world know about the wonderful experiences.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:"90vh"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Third slide"
    />
    <Carousel.Caption style={{ color: "rgb(15, 212, 252)"}}>
      <h2>Navigate to your desination easily with simple directions</h2>
      <p>Add the start and end location and get the gps started</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"90vh"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Fourth slide"
    />
    <Carousel.Caption style={{ color: "rgb(15, 212, 252)"}}>
      <h2>Always Check the weather of your destination before starting off.</h2>
      <p>Get the detailed weather report of locations around the globe in just Link double click.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    <section className="about">
      <div className="about1">
        <div className="cardAbout yellow" style={{transition: "all 0.75s ease 0s, opacity 750ms ease 0s, transform 750ms ease 0s" ,opacity: "1" ,transform:"translateX(0px) translateY(0px)"}}>
          <img src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>Travel</h2>
          <p>The travel service provides and easy method to create,delete and check others pins and use that to plan a travel journey!Just a double click on the map will let you create a new pin!</p>
        </div>
        <div className="cardAbout" style={{transition: "all 0.75s ease 0s, opacity 750ms ease 0s, transform 750ms ease 0s" ,opacity: "1" ,transform:"translateX(0px) translateY(0px)"}}>
        <img src="https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h2>Navigate</h2>
        <p>The navigate service is like a playground that provides a map where one can play around and discover the whole globe!It contains the zoom in and zoom out icons and the can show your real time location in one click!</p>
        </div>
        <div className="cardAbout" style={{transition: "all 0.75s ease 0s, opacity 750ms ease 0s, transform 750ms ease 0s" ,opacity: "1" ,transform:"translateX(0px) translateY(0px)"}}>
        <img src="https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h2>Weather</h2>
        <p>The weather service provides a service which can show the present weather conditions of any place around the globe!So always check the weather before starting off or may had to suffer adverse weather conditions!</p>
        </div>
      </div>
    </section>
    
    <section className="contactUS">
        <h1>Having Any Issues or any query?<br />Send Us an email</h1>
      <div className="meForm">
      {mail && 
    <Alert variant="success" onClose={()=>{setMail(null)}} dismissible>
    <Alert.Heading>We got your query or feedback,will surely work on it!</Alert.Heading>
    </Alert>
    }
    {mail===false &&
      <Alert variant="danger" onClose={()=>{setMail(null)}} dismissible>
      <Alert.Heading>Something went wrong please try again!</Alert.Heading>
      </Alert>
    }
        <h2>Contact US</h2>
        <div className="meForm2">
        <form id='myForm' typeof='hidden' onSubmit={handleSubmit}>
          <label htmlFor="firstname" >First Name</label>  <br />
          <input type="text" name='firstname' placeholder='Enter your first name'/> <br />
          <label htmlFor="lastname" >Last Name</label> <br />
          <input type="text" name='lastname' placeholder='Enter your last name'/> <br />
          <label htmlFor="email" >Email Id</label> <br />
          <input type="email" name='email' placeholder='Enter your email'/> <br />
          <label htmlFor="subject">Subject</label> <br />
          <input type="text" name='subject' placeholder='Enter the subject of the mail'/> <br />
          <label htmlFor="message">Message</label> <br />
          <input type="text" name='message' placeholder='Enter your message'/> <br />
          <button type='submit' className='submitBtn'>Submit</button>
        </form>
        </div>
      </div>
    </section>
    <section className='footer-sec'>
    <div className="footer">
      <div className="footerLogo">
        {/* <img src='' alt="" /> */}
      </div>
      <div className="footerChild">
        <h2>Address</h2>
        <p>Room No:<br />Imaginary <br /> Aryabhatta Hostel <br /> ,IIT BHU <br /> ,Varanasi</p>
      </div>
      <div className="footerChild">
        <h2>Menu</h2>
        <ul className='menu'>
          <li><Link to="/home">Home</Link></li>
        
          <li><Link to="/travelmap">Travel</Link></li>
        
          <li><Link to="/navigate">Navigate</Link></li>
        
          <li><Link to="/weather">Weather</Link></li>
        </ul>
      </div>
      <div className="footerChild">
        <h2>Contact Us</h2>
        <ul>
          <li>M no:13243757</li>
          <li>Email:partik@b.com</li>
          <br />
          <li><h6>Social Media</h6></li>
          <li className='icons'> 
           <a target="_blank" href="https://www.facebook.com/DiljitDosanjh"><Facebook style={{marginRight:"10px",cursor:"pointer"}} /></a>
           <a target="_blank" href="https://www.instagram.com/diljitdosanjh"><InstagramIcon style={{marginRight:"10px",cursor:"pointer"}} /></a>
           <a target="_blank" href="https://twitter.com/diljitdosanjh"><Twitter style={{cursor:"pointer"}} /></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <h2>Map Wale</h2>
      <p>© Partik Singh ,Map Wale</p>
    </div>
    </section>
    </>
  )
}

export default Home