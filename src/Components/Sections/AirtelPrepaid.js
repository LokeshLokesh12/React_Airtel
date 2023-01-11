import React,{Fragment} from 'react'

function AirtelPrepaid() {
  return (
    <Fragment>
         <div className="airtel-prepaid-box">
    <div className="container">
      <div className="rel">
        <p className="heading">postpaid</p>
        <div className="underline"></div>

          <div className="box-content-head">
            <h4>
              Airtel postpaid<br/>starting at <span style={{color: "#e40000" }}>₹499</span>
            </h4>
            <p>
              Unlimited calling, 75GB data, Amazon prime,
              <br className="hidden-xs"/>
              Airtel Xstream and many more.
            </p>
            <h5>
              Choose from our<span className="best-selling-plan">Best selling Postpaid plans</span>
            </h5>
          </div>
          
          <div className="blocks-main">
            <div className="block">
              <p>Monthly rental of</p>
              <h4>₹ 999</h4>
              <a href="http://">Buy Now</a>
            </div>
            <div className="block">
              <p>Monthly rental of</p>
              <h4>₹ 499</h4>
              <a href="http://">Buy Now</a>
            </div>
            <div className="block block3">
              <img  alt="show more" width="24" height="24" src="https://assets.airtel.in/static-assets/new-home/img/show-more.svg?v=1661329436549"/>
              <span className="view-more" for="view-more">
                <a id="view-more" href="http://">View<br/>More</a>
              </span>
            </div>
          </div>
        <img className="postpaid-girl " src="/images/airtel-postpaid-girl.webp" alt=""/>
      </div>
      
    </div>
  </div>
    </Fragment>
  )
}

export default AirtelPrepaid