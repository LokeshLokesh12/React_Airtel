import React,{Fragment,useEffect} from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'

function Signin() {
  useEffect(()=>{
    let signinform = document.forms.signinform;
    let signin = document.querySelector('#signinform')
    let password = document.querySelector('#password')
    let confirmpassword = document.querySelector('#confirm_password')
    
    let handleSignin = (event)=>{
      event.preventDefault();
      console.log(password.value , confirmpassword.value  );

      


      
      if(password.value === confirmpassword.value){

        const formData = new FormData(signinform);
        // 2. JSON
          console.log(formData);
        const jsonData = JSON.stringify(Object.fromEntries(formData));
          // Send to Backend
          console.log("JSON BODY :", jsonData)

          // fetch("http://localhost:8000/api/auth/register",{
            fetch("https://airtrl-user-api.onrender.com/api/auth/register",{
              method:"POST",
              headers: { 'Content-Type':'application/json' },
              body: jsonData
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              console.log(data.message === 'Email already used');
              console.log(data.message === 'Registion Successful');
              if(data.message === 'Registion Successful'){
                  window.location = '/login'
                }
                else{
                  alert(data.message)
              }
            })
  
        console.log("fine");
      }
      else{
        alert('password does not match')
      }
    }
    // console.log(signin);
    signin.addEventListener('submit',handleSignin)
    return()=>{signin.removeEventListener('submit',handleSignin)}
  })
  return (
   <Fragment>
    <Header/>
     <div class="main">
      <div className="login-left">
        <div className="text">
          <h1>
            We're holding the door for you!
          </h1>
          <p>
            signin now amd manage all your airtel service and payment with ease
          </p>
        </div>
      </div>
      <div className="login-right">
      <div className="log">
          <h4>signin</h4>

          <form name='signinform' id='signinform' >
              <label for="fullname"> fullname </label><br/>
              <input type="text" name='name' id="fullname"/><br/>
              <label for="email"> email </label><br/>
              <input type="email" name='email' id="email"/><br/>
              <label for="mobile-number"> mobile number </label><br/>
              <input type="tel" name='phone' id="mobile-number"/><br/>
              <div className="password-div ">
                  <div className="pass ">
                      <label for="password"> password </label><br/>
                      <input type="password" name='password' id="password"/><br/>
                  </div>
                  <div className="con-pass">
                      <label for="confirm_password">confirm password</label><br/>
                      <input type="password" id="confirm_password"/><br/>
                  </div>
              </div>
              <div className="checkbox">
              <p>sim type</p>
                <input type="radio" value="prepaid" id='prepaid' name='simtype'/>
                <label for="prepaid">prepaid</label>
                <input type="radio" value="postpaid" id='postpaid' name='simtype' disabled/>
                <label for="postpaid">postpaid</label>
              </div>
              <button>confirm</button>
            <Link to="/login">I already have an account, LOGIN </Link>

          </form>
      </div>
  </div>
  </div>
   </Fragment>
  )
}

export default Signin