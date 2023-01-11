import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
function Talktime() {
  return (
    <Fragment>
          <div className="talk-unlimited-main">
    
    <div className="container">
      <div className="left">
        <h3>AIRTEL UNLIMITED PREPAID</h3>
        <div className="underline-3"></div>
        <h1>TALK UNLIMITED</h1>
        <p>Our best plans, our best prices, on the best network</p>
        <Link to="/plans" className=""> <h4>view prepaid packs →</h4>  </Link>
        <p className="icu-charges">*no iuc charges</p>
      </div>
      <div className="right">
        <img src="/images/airtel-unlimited-talk.webp" alt=""/>
      </div>
    </div>

  </div>
    </Fragment>
  )
}

export default Talktime