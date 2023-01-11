import React,{Fragment,useEffect} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import XstreamLeftRight from './XstreamLeftRight'
import XstreamRightLeft from './XstreamRightLeft'
import './xstream.css'
import City from './City'
function Xstream() {

  useEffect(()=>{
    const profilestr = localStorage.getItem("userInfo")
    const profile = JSON.parse(profilestr)

    const xstream_form = document.forms.xstream_form;

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("nothing");
      const formInfo= new FormData(xstream_form);
      console.log(formInfo);
      const jsondata = JSON.stringify(Object.fromEntries(formInfo));
      // const jsonData
      const jsonData = JSON.parse(jsondata);
      jsonData.name = profile?profile.name:"unknow";
      jsonData.type="Xstream";

      const finalJson = JSON.stringify(jsonData)
      // Send to Backend
      console.log("RAW JSON BODY :", jsondata)
      console.log("JSON BODY :", jsonData)
      console.log("JSON BODY :", finalJson)
      
      fetch("http://localhost:8090/registenewconnection",{
        method:"POST",
        headers: { 'Content-Type':'application/json' },
        body: finalJson
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    }
    xstream_form.addEventListener("submit",handleSubmit);
  return ()=>{
    xstream_form.removeEventListener("submit",handleSubmit);
  } 
  })

  return (
    <Fragment>
        <Header/>
            <div className="banner" id='home'>
                <div className="xstream-text-box">
                  <h1>It's our biggest price drop ever! <br /> Get Xstream Box at <del>₹2,650</del> ₹1,500</h1>
               
                  <h3>Get access to Amazon Prime,<br /> Sony LIV & 10+ more top OTT apps</h3>
                 <p className='form_heading'>Enter your mobile number to buy now</p>
                  <form action="" name='xstream_form' className='xstream_input_field' >
                      <input id='xstream-number' type="tel" placeholder='+91 xxxxxxxxxx' mobile-number-only="true" required name='phone' />
                      <City/>
                    <button>submit</button>               
                  </form>
                </div>
                <img src="https://assets.airtel.in/teams/simplycms/web/images/airtel-xstream-box-banner-new-12082022.png" alt="" />
               
            </div>
            <div className="Android_TV_Set_Top_Box">
              <div className="xstreamHeading">
                <h1>Android TV Set Top Box - Airtel Xstream</h1>
              </div>
              <div className="features">
                <ul>
                  <li>
                  <img alt="" height="60" src="https://assets.airtel.in/static-assets/cms/5000-Apps-24122019.png" width="60"/>
                    <p>5000+ Apps</p>
                  </li>
                  <li>
                  <img alt="" height="60" src="https://assets.airtel.in/static-assets/cms/500-TV-channels-24122019.png" width="60"/>
                    <p>500+ TV Channels</p>
                  </li>
                  <li>
                  <img alt="" height="60" src="https://assets.airtel.in/static-assets/cms/Built-in-Chromecast-24122019.png" width="60"/>
                    <p>Built-in Chromecast</p>
                  </li>
                  <li>
                  <img alt="" height="60" src="https://assets.airtel.in/static-assets/cms/Search-with-Google-Assisant-24122019.png" width="60"/>
                    <p>Search with Google <br /> Assistant</p>
                  </li>
                  <li>
                  <img alt="" height="60" src="https://assets.airtel.in/static-assets/cms/Runs-on-latest-Android-24122019.png" width="60"/>
                    <p>Runs on latest Android <br /> 9.0</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xstream_detial">
              <XstreamRightLeft
                first_heading="Binge big" 
                second_heading ="on the Big screen" 
                para ="Loads of blockbuster movies and web shows across 13 languages built-in with Airtel Xstream App." 
                image = "https://assets.airtel.in/teams/simplycms/web/images/big-screen-xstream-box.jpg"      
              />
              <XstreamLeftRight
                first_heading="Command with your voice" 
                // second_heading ="on the Big screen" 
                para ="Search your favourite content with the all new voice-enabled remote, powered by Google Assistant." 
                image = "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/prd-2_80042CE010E7868FB4878F1A254674EA.jpg"      
              />
              <XstreamRightLeft
                first_heading="Your Apps now on your TV" 
                // second_heading ="on the Big screen" 
                para ="Access over 5000 Apps with the Google Play Store – games, music, content and much more!" 
                image = "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/prd-3_034EEF2BEC587842D971B505B6FB0E70.jpg"      
              />
              <XstreamLeftRight
                 first_heading="Experience" 
                second_heading ="4K picture quality" 
                para ="Loads of blockbuster movies and web shows across 13 languages built-in with Airtel Xstream App." 
                image = "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/prd-6_A1E630997A2D710094627DCA99CD277D.jpg"      
              />
              <XstreamRightLeft
                first_heading="Chromecast built-in" 
                // second_heading ="on the Big screen" 
                para ="Cast your favourite content from smartphone to your TV with the Google Chromecast built-in.  " 
                image = "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/prd-5_682D96EDBADDA18295C9098F725F5452.jpg"      
              />
              <XstreamLeftRight
                 first_heading="Fueled with the power of" 
                second_heading ="Google" 
                para ="Powered by the latest Android Pie, your entertainment will always be ahead of the curve." 
                image = "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/prd-7_A2F7F6BEA983C1D4FAE78D589F121830.jpg"      
              />
            </div>
        <Footer/>
    </Fragment>
  )
}

export default Xstream