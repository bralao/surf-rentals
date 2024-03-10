import React, { useState } from 'react'
import sunset_surf from '../components/assets/sunset_surf.MP4'
import './styles/LoginSignupPage.css'

const LoginSignupPage = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div className="loginsignup">
      <video autoPlay muted loop>
        <source src={sunset_surf} type="video/mp4" />
      </video>

      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state ==="signup"?
          <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>} {/*if state is "Sign Up" then show the input field*/}
          <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder="Email Adress" />
          <input name='password' value={formData.password} onChange={changeHandler} type="text" placeholder="Password" />
        </div>
        <button>Continue</button>
        {state==="Sign Up"
        ? <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        : <p className="loginsignup-login">Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignupPage
