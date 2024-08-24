import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type= "email" placeholder='Your Email Address'/>
          <input type= "Password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
         <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
         </div>
      </div>
      </div>
  )
}

export default LoginSignup