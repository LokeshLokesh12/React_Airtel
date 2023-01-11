import React,{Fragment} from 'react'

function ThanksApp() {
  return (
    <Fragment>
        <div className="airtel-thanks-app-main ">
    <div className="patten">
    <div className="container">
      <div className="app-left">
        <img src="./images/download-app-img.png" alt=""/>
      </div>
      <div className="app-right">
        <p style={{textTransform:"capitalize"}}>Experience the all new Airtel Thanks App</p>
        <img src="./images/airtel-thanks.svg" alt="" width="320px"/>
        <h4>
          Get exclusive offers & <br/>
          account information at one place
        </h4>
        <p>download airtel Thanks app on</p>
        <div className="app-on">
          <a href="https://apps.apple.com/in/app/airtel-thanks-recharge-bank/id543184334" rel='noreferrer' target='_blank'>
            <img src="/images/app-store.png" alt=""/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.myairtelapp" rel='noreferrer' target='_blank'>
            <img src="/images/play-store.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
    </Fragment>
  )
}

export default ThanksApp