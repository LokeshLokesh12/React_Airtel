import React,{Fragment} from 'react'

function Carousel() {
  return (
    <Fragment>
    <div className="containe"  id="home" style={{margin:"5% 0 0 0 "}}>
    {/* <!-- <h2>Carousel Example</h2>   --> */}
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* <!-- Wrapper for slides --> */}
      <div className="carousel-inner">
        <div className="item active">
          <img className="hite" src="./images/banner-1.webp" alt="New york" style={{width:"100%"}}  />
        </div>
          
        <div className="item">
          <img className="hite" src="./images/banner-2.webp" alt="New york" tyle={{width:"100%"}} />
        </div>
     
        <div className="item">
          <img className="hite" src="./images/banner-3.webp" alt="New york" tyle={{width:"100%"}} />
        </div>
          
        <div className="item">
          <img className="hite" src="./images/banner-4.jpg" alt="New york" tyle={{width:"100%"}}/>
        </div>
  
        <div className="item">
          <img className="hite" src="./images/banner-5.webp" alt="New york" tyle={{width:"100%"}}/>
        </div>
  
        <div className="item">
          <img className="hite" src="./images/banner-6.webp" alt="New york" tyle={{width:"100%"}}/>
        </div>
                   
      </div>
  
      {/* <!-- Left and right controls --> */}
      <a 
          style={{background: "transparent", color:"red"}}
          className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
      </a>
      <a 
          style={{background: "transparent", color:"red"}}
          className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
    </Fragment>
  )
}

export default Carousel