import React from 'react';
import { Fragment } from 'react';
import './App.css';
import './css/Main.css'
import './css/fontstyle.css'
import './css/media.css'
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Recharge from './Components/Recharge';
import Exprence from './Components/Exprence';
import Section from './Components/Sections/Section';
import Footer from './Components/Footer';
function App() {
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

export default App;
