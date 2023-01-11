import React,{Fragment,useEffect,useState} from 'react'
import Header from '../Header'

function Payment() {
  const profilestr = localStorage.getItem("userInfo")
  const profile = JSON.parse(profilestr)

 

  let rechargenum = sessionStorage.getItem("rechargeTo")

   const [rechargedata,setrechargedata] = useState([{cost : "0", data : '', validity : '', type : ''}])

  //  const [order_id,setorder_id] = useState({order_id:""})

   const [order_id,setorder_id] = useState( [{order_id:"",payment_id:"",signature:""}])
   useEffect(()=>{
     let rechargepack=sessionStorage.getItem("rechargepack")
     let url =`http://localhost:8080/plans/${rechargepack}`
     fetch(url,{method:'GET'})
     .then((res) => res.json())
     .then((data) => {
       console.log(data)
       setrechargedata(data)
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

   
     const data = await fetch('http://localhost:9898/payment',{
      method: 'POST' ,
      body: JSON.stringify({
        amount:rechargedata[0].cost,
        currency:"INR"})})
      .then((res) => res.json()
      ).catch((err)=>{ console.log(err); })
      console.log(data)

      setorder_id(data)
      console.log(order_id[0].order_id);
      
    console.log(rechargedata[0].cost*100)
    
    var options =  {
      "key": "rzp_test_2EqXXeOXSUYTR4", // Enter the Key ID generated from the Dashboard
      "amount": Number(rechargedata[0].cost)*100 , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Airtel",
      "description": `recharge for ${rechargedata[0].type} plan at ${rechargedata[0].cost} `,
      "image": "https://i.ibb.co/yn92Hd4/airtel-icon.png/",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          console.log(response);
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill":{
        "name": profile.name?profile.name:"" ,
        "email": profile.mail?profile.mail:"",
        "contact": profile.phone?profile.phone:""
      } ,
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#EB4F4F"
      }
  };

  console.log(rechargedata[0].cost*100)

  
    

    // const data = await fetch('http://localhost:9898/payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type':'application/json' },
    //   body:{
    //    "amount":options.amount,
    //    "currency":options.currency
    //  } 
    //  }).then((t) =>
    //    t.json()

    //  )
    //  .then(()=>{
    //     console.log(data)
    //     setorder_id(data)
    //     // setorder_id(data.order_id)
    //     console.log(order_id[0].order_id);
    //  })
 
    //  console.log(data)
 

  const paymentObject = await new window.Razorpay(options)
	await paymentObject.open()
  }
 
  return (
    <Fragment>
        <Header/>
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
              <button type="submit" onClick={razorpay}>pay ₹{rechargedata[0].cost}</button>
          </div>
        </div>
    </Fragment>
  )
}



export default Payment