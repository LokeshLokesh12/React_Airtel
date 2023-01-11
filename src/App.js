import React from 'react';
// import {BrowsreRouter as Router, Routes, Route} from 'react-Router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import './css/Main.css'
import './css/fontstyle.css'
import './css/media.css'

import Home from './Home';
import Login from './Components/Account/Login' 
import Signin from './Components/Account/Signin'
import UserData from './Components/Account/UserData' 
import Plans from './Components/Plans/Plans';
import Payment from './Components/Payment/Payment';
import RechargeOnline from './Components/Payment/RechargeOnline';
import Xstream from './Components/AirtelXstream/Xstream';
import XstreamApp from './Components/XstreamApp/XstreamApp';
import AirtelFiber from './Components/AirtelFiber/AirtelFiber';
import AirtelFiberForm from './Components/AirtelFiber/AirtelFiberForm';
import AirtelDTH from './Components/AirtelDTH/Airteldth';
import AirtelDTHform from './Components/AirtelDTH/Airteldthform';
import Postpaid from './Components/Sim/Postpaid';
import Prepaid from './Components/Sim/Prepaid';
import Port from './Components/Sim/Port';
function App() {
  return(
   <Router>
      <Routes>
         <Route Exect path='/' element={<Home/>}></Route>
         <Route path='/Homepage' element={<Home/>}></Route>
         <Route path='/Login' element={<Login/>}></Route>
         <Route path='/Signin' element={<Signin/>}></Route>
         <Route path='/userData' element={<UserData/>}></Route>   
         <Route path='/Plans' element={<Plans/>}></Route>
         <Route path='/payment' element={<Payment/>}></Route>
         <Route path='/Rechargeonline' element={<RechargeOnline/>}></Route>
         <Route path='/Xstream' element={<Xstream/>}></Route>
         <Route path='/Xstream-app' element={<XstreamApp/>}></Route>
         <Route path='/AirtelBroadband' element={<AirtelFiber/>}></Route>
         <Route path='/Airtel-Broadband-form' element={<AirtelFiberForm/>}></Route>
         <Route path='/AirtelDth' element={<AirtelDTH/>}></Route>
         <Route path='/Airtel-Dth-form' element={<AirtelDTHform/>}></Route>
         <Route path='/Airtel-postpaid' element={<Postpaid/>}></Route>
         <Route path='/Airtel-prepaid' element={<Prepaid/>}></Route>
         <Route path='/switch-to-airtel' element={<Port/>}></Route>
         

       
      </Routes>
   </Router>

  )
}

export default App;
