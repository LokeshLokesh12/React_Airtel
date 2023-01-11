import React,{Fragment,useState} from 'react'
import Header from '../Header'
import './Payment.css'
function RechargeOnline() {
  const [mobileNumber,setmobileNumber] = useState("")

  const change = event => {
    console.log(event.target.value);
    setmobileNumber(event.target.value)
  }
  
  const verify = (event)=>{
    event.preventDefault();
   if(mobileNumber.length === 10){
    // alert(mobileNumber)
    sessionStorage.setItem("rechargeTo",mobileNumber)
    window.location = "/payment"
   }
  }

  
  

  return (
    <Fragment>
        <Header/>
        <div className="main">
          <div className="Payment_left">
            <div className="text">
              <h1>
                Recharge Online
              </h1>
              <p>
                Faster recharges - anywhere, any time
              </p>
            </div>
          </div>
          <div className="Payment_right">
              <Fragment>
                <h1>Prepaid mobile recharge</h1>
                <p>Recharge your number for validity, talktime or data</p>
                <div className="number_input">
                  <label for="mob_num">Mobile Number</label>
                  <div className="input_field" >
                    <form style={{borderRadius:"5px"}} onSubmit={verify} name="mobileNumber">
                      <input type="tel"
                        id="mob_num"
                        className=""
                        placeholder="enter your 10-digit mobile number" 
                        name="mobile_num" 
                        pattern="[7-9]{1}[0-9]{9}" 
                        value = {mobileNumber}
                        
                        onChange={change}
                        />
                      <button type="submit" className="button btn btn-danger" style={{backgroundColor: "red"}} >recharge</button>
                    </form>
                  </div>
                </div>
              </Fragment>
          </div>
        </div>

    </Fragment>
  )
}

export default RechargeOnline