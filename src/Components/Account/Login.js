import React,{Fragment,useEffect,useState} from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import './Account.css'


function Login() {
  const [userInfo,setuserInfo]=useState();
  useEffect(() => { 
    const formEl = document.forms.login;
    let mobNum = document.querySelector("#mobile-number")    
    const handleSubmit = (event) => {
      event.preventDefault();

      
      let mobile_number_err = document.querySelector("#mobile-number-err") 
      let password_err = document.querySelector("#password-err") 
      mobile_number_err.innerText=""
      password_err.innerText=""
      

      
      if (mobNum.value.length === 10 || mobNum.value.length === 13) {
        const formData = new FormData(formEl);
        console.log(formData);
        // 2. JSON
        const jsonData = JSON.stringify(Object.fromEntries(formData));
        // Send to Backend
        console.log("JSON BODY :", jsonData)
        // first fetch while login
        fetch("http://localhost:8000/api/auth/login",{
        // fetch("https://airtrl-user-api.onrender.com/api/auth/login",{
          method:"POST",
          headers: { 'Content-Type':'application/json' },
          body: jsonData
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.token)
          if(data.token === "No User Found,check your nummber" ){
              let checknum = document.querySelector("#mobile-number") 
              let mobile_number_err = document.querySelector("#mobile-number-err") 
            return(
                checknum.classList.add("invalid_input"),
                mobile_number_err.innerText="No User Found,check your number",
                setTimeout(()=>{
                  checknum.classList.remove("invalid_input")
                },300)
              ) 
          }
          if(data.token === 'Invalid Password'){
            let password_err = document.querySelector("#password-err") 
            let checkpass = document.querySelector("#password") 
            return (
              password_err.innerText="incorrect password",
              checkpass.classList.add("invalid_input"),
              setTimeout(()=>{
                checkpass.classList.remove("invalid_input")
              },300)
              )
          }
        const token = data.token
          // second fetch with token
          if (data.auth !== false) { 
            console.log(token);
            fetch("http://localhost:8000/api/auth/userinfo",
            // fetch("https://airtrl-user-api.onrender.com/api/auth/userinfo",
            {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                "x-access-token": token
              },
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setuserInfo(data)
              // console.log(JSON.stringify(data));
              setuserInfo(data)
              localStorage.setItem('userInfo',JSON.stringify(data))
            })
            .then(
              ()=>{
              window.location= '/homepage'
              }
             
              )
            }
            else{
              console.log("somethin went wrong");
              alert("somethin went wrong, please try again later");
            }
        })
    }
    else {
      alert("check the number")
    }
  };
  formEl.addEventListener("submit",handleSubmit);
  return ()=>{
    formEl.removeEventListener("submit",handleSubmit);
  } 
  
  },[userInfo])
  return (
    <Fragment>
    <Header/> 
    <div className="main">
      <div className="login-left">
        <div className="text">
          <h1>
            We're holding the door for you!
          </h1>
          <p>
            login now and manage all your airtel service and payment with ease
          </p>
        </div>
      </div>
      <div className="login-right">
        <div className="log">
          <h4>Login</h4>
          <form name="login" id="login_form">
            <label for="mobile-number"> mobile number </label><br/>
            <input type="tel" name="phone" id="mobile-number"/><br/>
            <p id='mobile-number-err'></p>
            <label for="password"> password </label><br/>
            <input type="password" name="password" id="password"/><br/>
            <p id='password-err'></p>
            <button  id="loginbtn">confirm</button>
          </form>
          <Link to="/Signin">creat a new account</Link>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Login