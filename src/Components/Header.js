import React from 'react'
import {Link} from 'react-router-dom'
// import Login from './Account/Login'

function Header() {

    function loginLink(){
        const profilestr = localStorage.getItem("userInfo")
        const profile = JSON.parse(profilestr)
        if(!localStorage.getItem("userInfo")){
            return(
                
                <div className="login">
                <Link to='/Login' >
                    <img src="https://assets.airtel.in/static-assets/new-home/img/login-user.svg" alt="" />
                    <p>login</p>
                
                </Link>
                </div>
            )
        }else{
            return(
             

                <div className="login">
                <Link to='/userData' >
                    <img src="	https://assets.airtel.in/static-assets/new-home/img/login-user.svg" alt="" />
                    <p>{profile.name}</p>
                </Link>
                </div>
            )
        }
    }
    
  return (
    <div>
        <div className="header" id="header">
            <div className="airtel_part">
            <ul>
                <a href="http://">
                <li>Xstream</li>
                </a>
                <a href="http://">
                <li>airtel payment bank</li>
                </a>
                <a href="http://">
                <li>Wynk</li>
                </a>
                <span>|</span>
                <a href="http://">
                <li>Personal</li>
                </a>
                <a href="http://">
                <li>career</li>
                </a>
                <a href="http://">
                <li>business</li>
                </a>
                <a href="http://">
                <li>investors</li>
                </a>
            </ul>
            </div>

            <div className="main-content container">
            <div className="logo" id="logo">
               <Link to="/homepage"><img src="/images/airtel_icon.png" alt="" /></Link> 
            </div>

            <div className="content-list">
                <ul>
                <li>
                    {/* <!-- prepaid --> */}
                    <div className="prepaid">
                    <h3>prepaid</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-1">
                        <ul className="sub-list-1">
                            <a href="/plans">
                            <li>recharge</li>
                            </a>
                            <a href="/Airtel-prepaid">
                            <li>new prepaid SIM</li>
                            </a>
                            <a href="/plans">
                            <li>view plans</li>
                            </a>
                            <a href="www.google.com">
                            <li>international roaming</li>
                            </a>
                            <a href="www.google.com">
                            <li>switch prepaid to postpaid</li>
                            </a>
                            <a href="switch-to-airtel">
                            <li>port to airtel prepaid</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>

                {/* <!-- postpaid --> */}
                <li>
                    <div className="prepaid">
                    <h3>postpaid</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-2">
                        <ul className="sub-list-2">
                            <a href="www.google.com">
                            <li>pay bill</li>
                            </a>
                            <a href="www.google.com">
                            <li>Buy New Connection</li>
                            </a>
                            <a href="www.google.com">
                            <li>View Plans</li>
                            </a>
                            <a href="www.google.com">
                            <li>International Roaming</li>
                            </a>
                            <a href="www.google.com">
                            <li>Switch Prepaid to Postpaid</li>
                            </a>
                            <a href="www.google.com">
                            <li>Port to Airtel</li>
                            </a>
                            <a href="www.google.com">
                            <li>Free Sim Delivery</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                {/* <!-- broadband --> */}
                <li>
                    <div className="prepaid">
                    <h3>broadband</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-3">
                        <ul className="sub-list-3">
                            <a href="www.google.com">
                            <li>Pay Bill / Recharge</li>
                            </a>
                            <a href="/AirtelBroadband">
                            <li>Buy New Connection</li>
                            </a>
                            <a href="www.google.com">
                            <li>View Plans</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                {/* <!-- DTH --> */}
                <li>
                    <div className="prepaid">
                    <h3>dth</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-4">
                        <ul className="sub-list-4">
                            <a href="www.google.com">
                            <li>recharge</li>
                            </a>
                            <a href="/AirtelDth">
                            <li>Buy New DTH Connection</li>
                            </a>
                            <a href="www.google.com">
                            <li>View Plans</li>
                            </a>
                            <a href="www.google.com">
                            <li>upgrade Box</li>
                            </a>
                            <a href="/xstream-app">
                            <li>Xstream App</li>
                            </a>
                            <a href="www.google.com">
                            <li>Buy Second DTH connection</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                {/* <!-- Bank --> */}
                <li>
                    <div className="prepaid">
                    <h3>bank</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-5">
                        <ul className="sub-list-5">
                            <a href="www.google.com">
                            <li>View Account</li>
                            </a>
                            
                            <a href="www.google.com">
                            <li>Get New Account</li>
                            </a>
                            
                            <a href="www.google.com">
                            <li>Add Money</li>
                            </a>
                            
                            <a href="www.google.com">
                            <li>Know More</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                {/* <!-- airtel-black --> */}
                <li>
                    <div className="prepaid">
                    <h3>airtel black</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-6">
                        <ul className="sub-list-6">
                            <a href="www.google.com">
                            <li>pay bill</li>
                            </a>
                            <a href="www.google.com">
                            <li>view plans</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                {/* <!-- Help --> */}
                <li>
                    <div className="prepaid">
                    <h3>help</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-down down-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div className="submenu">
                        <div className="sub-menu-7">
                        <ul className="sub-list-7">
                            <a href="www.google.com">
                            <li>contact us</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>

            <div className="option">
                <div className="get_app play-air-thanks">
                {/* <a href="https://play.google.com/store/apps/details?id=com.myairtelapp&_branch_match_id=1088443951698204352&utm_source=SMS&utm_campaign=apbbnkpvme_growth&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz9RLzCwqSc3Ry8zTTyxISsrLLijLTY1PL8ovL8kAAAakX0glAAAA" */}
                <a href="/xstream-app"
                    >
                    <img id="get-img" src="https://assets.airtel.in/static-assets/new-home/img/get-app.svg" alt="" />
                    <p>get app</p>
                </a>
                </div>

                <div className="store">
                <a href="/">
                    <img src="https://assets.airtel.in/static-assets/new-home/img/airtel-store.svg" alt="" />
                    <p>store</p>
                </a>             
                </div>
                
               {loginLink()}  
               {/* if user log in go user data page else go to login page */}
                
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Header