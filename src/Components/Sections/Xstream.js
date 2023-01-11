import React,{Fragment} from 'react'

function Xstream() {
  return (
    <Fragment>
        <div className="airtel-xstream-main">
    <div className="container airtel-xstream-inner ">
      <div className="xstream-cover">
        <div className="logo">
          <img src="/images/xstream-logo.webp" alt=""/>
        </div>
        <h3 className="heading">UNLOCK THE WORLD OF ENTERTAINMENT</h3>
        <div className="xstream-banner">
          <img className="" src="/images/airtel-xstream-banner.webp" alt=""/>
        </div>
      </div>
      <div className="xstream-product">
        <div className="xstream-blocks xstream-blocks-1">
          <p>xstream box</p>
          <img src="/images/xstream-box.webp" alt=""/>
          <br/>
          <a className="btn" href="/xstream">buy now</a>
        </div>
        <div className="xstream-blocks xstream-blocks-2">
          <p>xstream fiber</p>
          <img src="/images/xstream-fiber.webp" alt=""/>
          <br/>
          <a className="btn" href="/AirtelBroadband">buy now</a>
        </div>
        <div className="xstream-blocks xstream-blocks-3">
          <p>xstream app</p>
          <img src="/images/xstream-app.webp" alt=""/><br/>
          <a className="btn" href="/xstream-app">view more</a>
        </div> 
      </div>
    </div>
  </div>
  
    </Fragment>
  )
}

export default Xstream