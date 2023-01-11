import React, { Fragment,useState } from 'react'

function Recharge() {
  let selectedli;

  const clickAnimation = (event)=>{
    let target = event.target.closest('LI')
      // console.log(target)
      if(event.target.tagName === "LI"){
        console.log(target);
        if(selectedli !== undefined ){     
            selectedli.classList.remove('selectedli');
        }
        selectedli = target;
        target.classList.add('selectedli'); 
      }
  }
  const [mobileNumber,setmobileNumber] = useState("")

  const change = event => {
    console.log(event.target.value);
    setmobileNumber(event.target.value)
  }
  
  const verify = (event)=>{
    event.preventDefault();
   if(mobileNumber.length === 10){
    alert(mobileNumber)
    sessionStorage.setItem("rechargeTo",mobileNumber)
    window.location = "/plans"
   }
  }
  
  return (
    <Fragment>
         <div className="rechage-box-main">
    <div className="something">
      <div className="sometext">
        <h1>Recharge & Pay bills</h1>
        <h2 style={{color: "#fff"}}>Get exciting cashback and offers</h2>
      </div>
      <div className="someform">
        <div className="form-menu">
          <ul onClick={clickAnimation} >
            <li className="active"><img
                src="https://assets.airtel.in/static-assets/new-home/img/services-sim.svg?v=1661329436549" alt="Prepaid"
                style={{ width:"24px", height:"24px"}}/> Prepaid</li>
            <li><img
                src="https://assets.airtel.in/static-assets/new-home/img/services-sim.svg?v=1661329436549"
                alt="Postpaid" style={{ width:"24px", height:"24px"}}/> Postpaid</li>
            <li><img
                src="https://assets.airtel.in/static-assets/new-home/img/services-dth.svg?v=1661329436549" alt="DTH"
                style={{ width:"24px", height:"24px"}}/> DTH</li>
            <li><img
                src="https://assets.airtel.in/static-assets/new-home/img/services-broadband.svg?v=1661329436549"
                alt="Broadband"  style={{ width:"24px", height:"24px"}}/> Broadband</li>
            <li><img
                src="https://assets.airtel.in/static-assets/new-home/img/service-thanks.svg?v=1661329436549"
                alt="AirtelBlack"  style={{ width:"24px", height:"24px"}}/> Airtel Black</li>
          </ul>


        </div>
        <div className="recharge-box">
          <div className="remenu" >
            <form style={{borderRadius:"5px"}} onSubmit={verify} name="mobileNumber">
              <input type="tel"
                id="mob_num"
                className="form-control"
                placeholder="enter mobile number" 
                name="mobile_num" 
                pattern="[7-9]{1}[0-9]{9}" 
                value = {mobileNumber}
                
                onChange={change}
                />
              <button type="submit" className="button btn btn-danger" style={{backgroundColor: "red"}} >recharge</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </Fragment>
  )
}

export default Recharge