import React,{Fragment} from 'react'
import Header from '../Header'
// import {Link} from 'react-router-dom'

import './Account.css'
function UserData() {
  const profilestr = localStorage.getItem("userInfo")
  const profile = JSON.parse(profilestr)

  function logout(){
    alert("really want to logout")
    localStorage.removeItem("userInfo")
    window.location = '/login'
  }
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
             Thanks for login now you can manage all your airtel service and payment 
            </p>
          </div>
        </div>

        <div className="login-right">
        <div className="log">
          <h4>profile</h4>
          <br />
          <h3>Name: {profile.name}</h3>
          <h3>phone: {profile.phone}</h3>
          <h3>email: {profile.email}</h3>
          <h3>sim-type: {profile.simtype}</h3>
          <br />

          <div className="btns">
            {/* <Link to="/update user">Update User Profile</Link> */}
            <button onClick={logout} >log out</button>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default UserData

