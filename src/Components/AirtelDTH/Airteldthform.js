import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Header'
import city from '../AirtelXstream/City'
import axios from 'axios'
function AirtelDTHform() {

  // const profilestr = localStorage.getItem("userInfo")
  // const profile = JSON.parse(profilestr)

  const [fiberdata, setfiberdata] = useState([{
    "_id": "63bba90edc51e04ebf9bd900",
    "image": "https://assets.airtel.in/static-assets/safo/dth/images/jpg/img_stb_2.jpg",
    "tittle": "HD-High Definition",
    "benfits": [
    ],
    "cost": 1000
    }])



  useEffect(() => {
    let fiber_pack = sessionStorage.getItem('dth_pack')
    console.log(fiber_pack);
    fetch(`https://airtrl-api.onrender.com/dth/${fiber_pack}`, { method: "GET" })
    // fetch(` http://localhost:8080/dth/${fiber_pack}`, { method: "GET"})
    
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setfiberdata(data)

      })
  }, [])

  const [payment_id, setpayment_id] = useState({})
  const [order_id, setorder_id] = useState({})
  const [signature, setsignature] = useState({})

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

  const razorpay = async (event) => {
    event.preventDefault();

    let name = document.getElementById('name')
    let phone = document.getElementById('phone')
    if (name.value === "") {
      return (name.classList.add("invalid_input"),
        setTimeout(() => {
          name.classList.remove("invalid_input")
        }, 300))

    }
    else if (phone.value === "") {
      return (phone.classList.add("invalid_input"),
        setTimeout(() => {
          phone.classList.remove("invalid_input")
        }, 300))

    }
    else {

      let fiber_form = document.forms.fiber_pay
      let fiber_form_data = new FormData(fiber_form);

      // 2. JSON
      const jsondata = JSON.stringify(Object.fromEntries(fiber_form_data));
      var jsonData = JSON.parse(jsondata)
      console.log(jsonData);
      console.log(jsonData.name, jsonData.phone, jsonData.city)


      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }

      console.log(fiberdata[0].cost);
      let reamount = fiberdata[0].cost;

      // const data = await axios.post(`http://localhost:9898/payment/${reamount}`)
      // const data = await axios.post(`https://razorpay-1gg2.onrender.com/payment/${reamount}`)
      const data = await axios.post(`https://airtrl-payment-api.onrender.com/payment/${reamount}`)

      console.log(data)




      var options = {
        "key": "rzp_test_2EqXXeOXSUYTR4", // Enter the Key ID generated from the Dashboard
        "amount": data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.data.currency,
        "name": "Airtel",
        "description": `${jsonData.name} is requesting a broadband connection`,
        "image": "https://www.pngarts.com/files/8/Airtel-Logo-Transparent-Background-PNG.png",
        "order_id": data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
          console.log(response);
          alert(response.razorpay_payment_id);
          setpayment_id(response.razorpay_payment_id);
          console.log(payment_id);

          alert(response.razorpay_order_id);
          setorder_id(response.order_id);
          console.log(order_id);

          alert(response.razorpay_signature);
          setsignature(response.razorpay_signature);
          console.log(signature);

          try {
            // const verifyUrl = "http://localhost:9898/verify";
            // const verifyUrl = "https://razorpay-1gg2.onrender.com/verify";
            const verifyUrl = "https://airtrl-payment-api.onrender.com/verify";
            fetch(
              `${verifyUrl}?razorpay_order_id=${response.razorpay_order_id}&razorpay_payment_id=${response.razorpay_payment_id}&razorpay_signature=${response.razorpay_signature}`
              , {
                method: 'POST'
              })
              .then((res) => res.json())
              .then((data) => {
                var time = new Date().toUTCString();
                console.log(time);

                let json = {
                  "name": jsonData.name,
                  "phone": jsonData.phone,
                  "type": "dth",
                  "city": jsonData.city,
                  "plan": fiberdata[0]._id,
                  "process": "registered",
                  "time": time,
                  "tnx_status": "TXN_SUCCESS",
                  "razorpay_order_id": response.razorpay_order_id,
                  "razorpay_payment_id": response.razorpay_payment_id,
                  "razorpay_signature": response.razorpay_signature,
                }

                const jsonbody = JSON.stringify(json)
                console.log(jsonbody);

                console.log(JSON.parse(jsonbody));
                if (data.message === "Payment verified successfully") {
                  console.log(data);
                  // fetch("http://localhost:9898/registenewconnection", {
                  // fetch("https://razorpay-1gg2.onrender.com/registenewconnection", {
                  fetch("https://airtrl-payment-api.onrender.comregistenewconnection", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonbody
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data)
                      alert(data.message)
                      if (data.message === "Our customer executive contact you as soon as possible") {
                        window.location = "/"
                      }
                    })
                }
              })


          } catch (error) {
            console.log(error);
          }

        },
        "prefill": {
          "name":jsonData.name ,
          "contact": jsonData.phone
        },
        "notes": {
          "Plan id": fiberdata[0]._id,
          "Receipt": data.data.receipt,
          "name": jsonData.name,
          "mobile number": jsonData.phone,
          "city": jsonData.city

        },
        "theme": {
          "color": "#fff"
        }
      };


      const paymentObject = new window.Razorpay(options)
      paymentObject.open()

      paymentObject.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })
      if (signature) {
        console.log("its working");
      }
    }
  }

  return (

    <Fragment>
      <Header />
      <div className="fiber_form_main">
        <div className="fiber_form_body">
          <div className="fiber_form">
            <h3>Enter your installation details</h3>
            <form action="" name='fiber_pay' className='fiber_main_form'>
              <input type="text" name="name" id="name" placeholder='your name*' required />
              <input type="tel" name="phone" id="phone" placeholder='your mobile number*' required />
              <div className="fiber_city">
                {city()}
              </div>
              <button type="submit" onClick={razorpay}>submit</button>
            </form>
          </div>
          {
            fiberdata.map((data) => {
              return (
                <section key={data._id} id={data._id} >
                  <div className="fiber_section_body">
                    <div className="fiber_nothing">
                      <div className="fiber_upper_section">
                        <img src={data.image} alt="" />
                      </div>
                    </div>
                    <div className="fiber_lower_section">
                      <h3>{data.tittle}</h3>
                        <ul className='dthul'>
                            {data.benfits.map((data)=>{
                                return(
                                    <li className='dthli' key={data.conent}>
                                        <div className="dth_img"><img className='dthimg'src={data.icon} alt="" /></div>
                                        <p className='dthp'>{data.conent}</p>
                                    </li>  
                                )
                            })}                            
                        </ul>
                      <div className="fiber_lower_final_section">
                        <div className="amount">
                          <p>Set Top Box Activation Charges</p>
                          <h4>₹ {data.cost}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }


        </div>

        <footer>
          <img src="https://assets.airtel.in/static-assets/safo/bb/safetyMessage/safetyIcon-white.svg" alt="" />
          <h6>Your safety is our first priority! We follow strict norms for a safe & fast installation.</h6>
        </footer>
      </div>
    </Fragment>
  )
}

export default AirtelDTHform