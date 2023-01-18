import React,{Fragment,useEffect} from 'react'
import Header from '../Header'
import './Sim.css'
function Prepaid() {
   useEffect(()=>{
        let handleSubmit = (event)=>{
            event.preventDefault();
            // console.log(event.target.tagName);
            const formData = new FormData(prepaid);
            console.log(formData);
            // 2. JSON
             const jsonData = JSON.stringify(Object.fromEntries(formData));
            //  to check 
            const check = JSON.parse(jsonData) 
            
            var time = new Date().toUTCString();
                console.log(time);
            check.time = time;
            check.type = "postpaid"
            let JsonData = JSON.stringify(check) 
            console.log("json :",check)
            // Send to Backend
            console.log("JSON BODY :", JsonData)
            let url = `https://razorpay-1gg2.onrender.com/requestsim`
            fetch(url,{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JsonData
        }).then((res) => res.json())
        .then((data)=>{console.log(data)
            alert(data.message)
            if(data.message === "Our customer executive contact you as soon as possible"){
                window.location = "/"
            }
        })
        }
        let prepaid = document.forms.prepaid;
        prepaid.addEventListener("submit",handleSubmit);
        return ()=>{
          prepaid.removeEventListener("submit",handleSubmit);
        } 
   })
  return (
    <Fragment>
        <Header/>
        <div className="prepaid_main">
            <div className="containe">
                <div className="prepaid_left">
                    <h1 style={{"color":"#FFF"}} >
                    Join us on <span style={{"color":""}}>Airtel postpaid</span> <br />
                    We are improving every day
                    </h1>
                    <img src="images/airtel-unlimited-talk.webp" alt="" />
                    <div className="tryit">
                        <h3>AIRTEL POSTPAID STARTING AT ₹499</h3>
                        <p>Unlimited calling, 75GB data, Amazon prime, Airtel Xstream and many more.</p>
                        <a href="/"> view plans ...</a>
                    </div>
                </div>
                <div className="prepaid_right">
                    <h3>Schedule doorstep KYC</h3>
                    <p>Get your SIM in no time!</p>
                    <form name='prepaid' className='prepaid_form' id='prepaid_form'>
                        <label htmlFor="name">NAME*</label>
                        <input type="text" id='name' name='name' placeholder='ENTER YOUR NAME' required/>

                        <label htmlFor="mobilenumber">MOBILE NUMBER*</label>
                        <input type="tel" id='mobilenumber' name='mobilenumber' placeholder='ENTER MOBILR NUMBER' pattern="[7-9]{1}[0-9]{9}" required/>

                        <label htmlFor="pincode">PINCODE*</label>
                        <input type="number" id='pincode' pattern="[0-9]{6}" maxLength="6" name='pincode' placeholder='Enter pin code' required/>
                        
                        <label htmlFor="location">LOCATION*</label>
                        <input type="text" id='location' name='location' placeholder='Enter area,street name' required />

                        <label htmlFor="house/flat_no">HOUSE/FLAT NO. (OPTIONAL)</label>
                        <input type="text" id='house/flat_no' name='house_no' placeholder='Enter house/flat no ' />
                        <button>submit</button>
                    </form>
                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default Prepaid