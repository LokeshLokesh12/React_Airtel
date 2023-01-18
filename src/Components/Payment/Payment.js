import React,{Fragment,useEffect,useState} from 'react'
import Header from '../Header'
import axios from 'axios'
import CircleLoader from "react-spinners/CircleLoader";
// import { Await } from 'react-router-dom';
function Payment() {
  // const profilestr = localStorage.getItem("userInfo")
  // const profile = JSON.parse(profilestr)

 

  let rechargenum = sessionStorage.getItem("rechargeTo")

   const [rechargedata,setrechargedata] = useState([{cost : "0", data : '', validity : '', type : '',_id:''}])

  //  const [payment_id,setpayment_id] = useState("")
  //  const [order_id,setorder_id] = useState("")
  //  const [signature,setsignature] = useState("")

   const [loading,setloading]=useState(false)

   useEffect(()=>{
    
    setloading(true)
     let rechargepack=sessionStorage.getItem("rechargepack")
    //  let url =`http://localhost:8080/plans/${rechargepack}`
     let url =`https://airtrl-api.onrender.com/plans/${rechargepack}`
     fetch(url,{method:'GET'})
     .then((res) => res.json())
     .then((data) => {
       console.log(data)
       setrechargedata(data)
      }) 
      .then(()=>{
        setloading(false)
      })  
  },[])


  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  
  const razorpay = async (event)=>{ 

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

    console.log(rechargedata[0].cost);
    let reamount = rechargedata[0].cost;
   
    // const data = await axios.post(`https://razorpay-1gg2.onrender.com/payment/${reamount}`)
    const data = await axios.post(`https://airtrl-payment-api.onrender.com/payment/${reamount}`)
    // const data = await axios.post(`http://localhost:9898/payment/${reamount}`)
 
      console.log(data)

      
   
    
    var options =  {
      "key": "rzp_test_2EqXXeOXSUYTR4", // Enter the Key ID generated from the Dashboard
      "amount": data.data.amount , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": data.data.currency,
      "name": "Airtel",
      "description": `recharge for ${rechargedata[0].type} plan at ${rechargedata[0].cost} `,
      "image": "https://www.pngarts.com/files/8/Airtel-Logo-Transparent-Background-PNG.png",
      "order_id": data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "handler": function async (response){
      handler:  async (response) => {
          console.log(response);
          // console.log(response);
          console.log(response.razorpay_payment_id);
          // setpayment_id(response.razorpay_payment_id);
          
          console.log(response.razorpay_order_id);
          // setorder_id(response.order_id);

          console.log(response.razorpay_signature);
          // setsignature(response.razorpay_signature);
          try {
            const verifyUrl = "https://airtrl-payment-api.onrender.com/verify";
            // const verifyUrl = "https://razorpay-1gg2.onrender.com/verify";
            // const verifyUrl = "http://localhost:9898/verify";
           fetch(
            `${verifyUrl}?razorpay_order_id=${response.razorpay_order_id}&razorpay_payment_id=${response.razorpay_payment_id}&razorpay_signature=${response.razorpay_signature}`
            ,{method:'POST' 
            })
            .then((res) => res.json())
            .then((data) => {
              var time = new Date().toUTCString() ;
              console.log(time);

              let json = {
                "razorpay_order_id":response.razorpay_order_id,
                "razorpay_payment_id": response.razorpay_payment_id,
                "razorpay_signature": response.razorpay_signature,
                "name": "",
                "rechargeTo" : sessionStorage.getItem('rechargeTo') ,
                "plan": sessionStorage.getItem('rechargepack'),
                "time": time         
            }

            const jsonbody = JSON.stringify(json)
            console.log(jsonbody);

            console.log(JSON.parse(jsonbody));
              if(data.message === "Payment verified successfully"){
                  console.log(data);
                  // fetch("http://localhost:9898/paymentdb",{                   
                  // fetch("https://razorpay-1gg2.onrender.com/paymentdb",{                   
                  fetch("https://airtrl-payment-api.onrender.com/paymentdb",{                   
                    method:'POST',
                    headers: { 'Content-Type':'application/json' },
                    body: jsonbody                  
                })
                .then((res)=>res.json())
                .then((data)=>{
                  console.log(data)
                  if(data.message === "Recharge Successfully"){
                    alert(data.message)
                    window.location =  "/"
                  }
                })
                }
            })
            
              
          } catch (error) {
            console.log(error);
          }
        

      },
      "prefill":{
        "name": "" ,
        mail:"",
        "contact":""
      } ,
      "notes": {
          "Address": "Razorpay Corporate Office",
          "Plan id": rechargedata[0]._id,
          "Receipt": data.data.receipt
      },
      "theme": {
          "color": "#EB4F4F"
      }
  };


  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
  
  paymentObject.on('payment.failed', function (response){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  })

  }
 
  return (
    <Fragment>
        <Header/>
        {loading?
        <div className="center">
          <CircleLoader
          color={'#EB4F4F'}
          // color={'#000'}
          loading={loading}
          size={150}        
          />
        </div>
        :
        <div className="pay">
          <div className="summary">
              <div className="payment_heading">
                <h1>Payment summary</h1>
              </div>
              <div className="summary_data">
                <div className="summary_top">
                  <div className="num_recharge">
                    <h6> {rechargedata[0].base} | {rechargenum}</h6>
                    <h6>₹{rechargedata[0].cost} </h6>
                  </div>
                  <div className="num_rec_info">
                    <p>{rechargedata[0].type}</p>
                    <p>{rechargedata[0].data}  <i class="fa-solid fa-circle dotee"></i> {rechargedata[0].validity} day </p>
                  </div>
                </div>
                <div className="summary_mid">
                  <h6>{rechargedata[0].type}</h6>
                  <h6>₹{rechargedata[0].cost}</h6>
                </div>
                <div className="summary_bottom">
                  <h5>Amount Payable</h5>
                  <h6>₹{rechargedata[0].cost}</h6>
                </div>
              </div>
              <button type="submit" onClick={razorpay}>pay ₹ {rechargedata[0].cost}</button>
          </div>
        </div>
        }
    </Fragment>
  )
}



export default Payment