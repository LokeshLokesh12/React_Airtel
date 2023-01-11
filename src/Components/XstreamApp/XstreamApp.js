import React,{Fragment} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './XstreamApp.css'
import XstreamRightLeft from '../AirtelXstream/XstreamRightLeft'
import XstreamLeftRight from '../AirtelXstream/XstreamLeftRight'
function XstreamApp() {
  return (
  <Fragment>
    <Header/>
       <div className="Xstream_bannar">
            <div className="Xstream_bannar_content">
                <img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/xstreamlogo_27DDDF0661933D7A247E0C990246F35C_1566280041486.png" alt="" />
                <h1 className='Xstream_bannar_content_heading' >LIVE TV on your mobile!</h1>
                <p className='Xstream_bannar_content_para'>350+ Live TV Channels, 10000+ Movies, 100+ TV Shows, <br /> Originals and much more</p>
                <a className='Xstream_bannar_content_a' href="/">download Airtel xstream app</a>
            </div>
       </div>
       <section>
            <div className="Xstream_info_para">
                <h1>UNLIMITED ENTERTAINMENT <br /> ANYTIME, ANYWHERE</h1>
                <p>Enjoy the best of everything - Live TV, News, Movies, TV Shows and Originals.</p>
            </div>
       </section>
       <section>
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
                first_heading="Watch Online" 
                // second_heading ="" 
                para ="Loads of blockbuster movies and web shows across 13 languages built-in with Airtel Xstream App." 
                image = "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/watch-online-desktop-new_F1BCFAD71EE3499D7B4551D7706767EC.png"      
              />
       </section>
       <section>
            <div className="best_of_connection">
                <h1>BEST OF CONTENT ACROSS NETWORKS</h1>
                <ul className='d_flex'>                  
                    <li><img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/Hungama-Play-Logo_6B2B9C443768EFB3A33C0CF78EBC2EDE.png" alt=''/></li>
                    <li><img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/Zee5-Logo_EE197BB168EFAF541281BBAFC0B5EF56.png" alt=''/></li>
                    <li><img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/Hoichoi-Logo_CB824B8EE72DD128F383DF14858B47DA.png" alt=''/></li>
                    <li><img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/Hooq-Logo_621710DD58AE021E0C7E134D5D41D3C6.png" alt='' /></li>          
                </ul>
                <a href="/">download Airtel xstream app</a>
            </div>
       </section>
       <section>
            <div className="xstream_main_section">
                <div className="Xstream_feature">
                    <h1>   Features that ensure <br/> best-in-class viewing experience</h1>
                    <ul>
                        <li>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/first-icon_A7E09A2DCC257347225C16549CBDFD75_1514290738380.png" alt="" />
                            <h3>Time Shift</h3>
                            <p>Enjoy live TV Shows from the <br /> beginning even if you login late.</p>
                        </li>
                        <li>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/third-icon_AB2BAFD163195DAF16042646D5A8BBF8_1514290739069.png" alt="" />
                            <h3>catch up tv</h3>
                            <p>catch up on your missed <br /> shows</p>
                        </li>
                        <li>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/second-icon_821511B39D9406426F5FCF3D2F57B842_1514290738880.png" alt="" />
                            <h3>multi-device access</h3>
                            <p>Access Airtel Xstream App on up to 5. <br />eMac Coe</p>
                        </li>
                    </ul>
                </div>
                <div className="never_miss">
                <img alt="" src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/footer_251D164643533A527361DBE1A7B9235D_1514290878014.jpg"/>
                    <div className="never_miss_moment">
                        <a href="/">Never miss a moment</a>
                    </div>
                </div>
                <div className="app_links">
                    <section>
                        <h1>Download The Airtel <br /> Xstream App</h1>
                        <div className="xstream_app_links">
                            <a href="/">
                                <img src="/images/play-store.png" alt="" />
                            </a>
                            <a href="/">
                                <img src="/images/app-store.png" alt="" />  

                            </a>
                        </div>
                    </section>
                </div>
            </div>
       </section>
    <Footer/>
  </Fragment>
    )
}

export default XstreamApp