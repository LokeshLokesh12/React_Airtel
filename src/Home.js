import React from 'react';
import { Fragment,useEffect } from 'react';
import './App.css';
import './css/Main.css'
import './css/fontstyle.css'
import './css/media.css'
import Header from './Components/Header';
import Carousel from './Components/Sections/Carousel';
import Recharge from './Components/Sections/Recharge';
import Exprence from './Components/Sections/Exprence';
import Section from './Components/Sections/Section';
import Footer from './Components/Footer';

function Home() {
  useEffect(()=>{
    sessionStorage.removeItem("rechargeTo")
  })
  return(
    <Fragment>
      <Header/>
      <Carousel/>
      <Recharge/>
      <Exprence/>
      <Section/>
      <Footer/>
    </Fragment>
   
  )
}
export default Home;
