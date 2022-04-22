import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"
function Signup() {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)
 async function handleSubmit(params) {
    params.preventDefault();
    const newUser ={
      username:name,
      email:email,
      password:pass,
    }
    try {
      await axios.post("http://localhost:7000/api/user/signUp" , newUser);
      console.log("hjd");
      setSuccess(true);
      setFailure(false);
    } catch (error) {
      setSuccess(false);
      setFailure(true);
      console.log(error);
    }

  }
  return (
    <div className='contadiner signup-contadiner'>
    <div className="loginForm">
    <div className="meraForm signup">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
             <label htmlFor="username">Username</label> <br />
            <input type="text" name='username' onChange={(event)=>{setName(event.target.value);console.log(name);}}  placeholder='Enter Your Username' /><br />
             <label htmlFor="email">Email</label> <br />
            <input type="email" name='email' onChange={(event)=>{setEmail(event.target.value)}}  placeholder='Enter Your Email ID' /><br />
             <label htmlFor="password">Password</label><br />
            <input type="password" name='password' onChange={(event) => {setPass(event.target.value)}} placeholder='Enter Your Password' /><br />
            <button type='submit'>Submit</button>
        </form>
        {success && <p style={{color:"green"}}>Account Created You can login now</p> }
        {failure && <p style={{color:"red"}}>Something went wrong try again</p> }
        <p>Have an Account?<Link to="*">Login</Link></p>
    </div>
    </div>
    <div className="loginImage">
    <img src="https://cdn.pixabay.com/photo/2018/06/18/23/03/europe-3483539_1280.jpg" alt="" srcset="" />
        </div> 
    </div>
  )
}

export default Signup;