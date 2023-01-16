import React,{Fragment,useEffect,useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './AirtelFiber.css'
import CircleLoader from "react-spinners/CircleLoader";


// import axios from 'axios'
function AirtelFiber() {
    const[loading,setloading]=useState(false)
    const[fiberdata,setfiberdata]=useState([{ 
        "amount": "",
        "calls" : "",
        "image": "",
        "internet": "",
        "internet_speed": "",
        "tittle" : "",
        "_id" : ""}])
    useEffect(()=>{
        setloading(true)
        const fetchData = async ()=>{
        // let url = "http://localhost:8080/fiber"
        let url = "https://airtrl-api.onrender.com/fiber"
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            setfiberdata(data)
        }).then(()=>{
            setloading(false)
        })
        .catch(()=>{
            alert("sorry")
            setloading(true)
          })
        }
        fetchData()
    },[])
    // console.log(fiberdata);
    useEffect(()=>{
        let fiber_plan = document.getElementById('plan_section')
        const fiber_click = (event)=>{
            if(event.target.tagName === "BUTTON"){
                let sel = event.target.closest('SECTION')
                var selid = sel.id
                console.log(selid);
                sessionStorage.setItem("fiber_pack",selid)
                window.location="/Airtel-Broadband-form"
             }
        }

        fiber_plan.addEventListener("click", fiber_click)      
        return()=>{
            fiber_plan.removeEventListener("click", fiber_click)
        } 
        
    },[])
  return (
    <Fragment>
        <Header/>
            <div className="fiber_airtel_black" id='home'>
                <div className="fiber_airtel_black_content">
                    <img src="./images/airtel-black.png" alt="" />
                    <div className="fiber_airtel_black_tagline">
                        <b>Introducing Airtel Black </b><span> Mobile. DTH. Fiber. All in one plan. </span>
                    </div>
                    <a href="/">join now</a>
                </div>
            </div>
            <div className="fiber_main_body">
                <h6>Buy New Broadband Connection for Home - Airtel Fiber</h6>
                <div className="fiber_plan_section" id='plan_section'>
                  


                {loading?
                    <div className="center">
                    <CircleLoader
                    color={'#EB4F4F'}
                    loading={loading}
                    size={150}        
                    />
                    </div>: 
                    fiberdata.map((data)=>{
                        return(                                
                            <section key={data._id} id={data._id} >
                                <div className="fiber_section_body">
                                    <div className="fiber_upper_section">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className="fiber_lower_section">
                                        <h3>{data.tittle}</h3>
                                        <ul>
                                            <li>{data.internet}</li>
                                            <li>{data.internet_speed}</li>
                                            <li>{data.calls}</li>
                                        </ul>
                                        <div className="fiber_lower_final_section">
                                            <div className="amount">
                                                <p>mothly rental</p>
                                                <h4>₹ {data.amount}</h4>
                                            </div>
                                            <button id='button'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </section>                           
                        )
                    })
                }
                </div>

                <div className="t_c">
                    <p><a href="/">T&C apply.</a> *All prices are exclusive of taxes.</p>
                </div>

                <div className="fiber_image">
                    <img src="https://assets.airtel.in/static-assets/safo/bb/img/fiberBannerDesktop.png" alt="" />
                </div>
                <div className="fiber_body_info">
                    <h1>Airtel Broadband</h1>
                    <p>
                        Step into the future of unlimited broadband plans with Airtel fibernet technology.
                        Experience the high-speed internet on our existing Fiber broadband connection in Delhi across multiple 
                        devices.   
                    </p>
                    <p>
                        Airtel Xstream Fiber offers you with Fiber optic internet connection transforming your daily broadband connection experience with high-speed internet. 
                        Airtel allows you to enjoy the fastest broadband connection in Delhi with the speed of up to 1 Gbps, 
                        which means once you connect broadband, you will get faster downloads and less buffering.
                    </p>
                    <p>
                        This FTTH (Fiber to home) technology provides you with fully-dedicated Fiber optic cable different internet packages,
                        which connect up to 60 devices via a professional-grade Wi-Fi router modem.
                        These internet packages in Delhi offer faster HD video streaming, heavy file downloads, and uploads.
                    </p>
                    <p>
                        Unlimited internet plans such as Ultra include upto 1 Gbps speed, unlimited local/STD calls and more importantly,
                        Amazon Prime and Airtel Xstream subscription.
                        Now to get free Wi-Fi router home, connect broadband and enjoy high-speed internet, entertainment, information treasure and more, without compromises
                    </p>
                </div>
            </div>
        <Footer/>
    </Fragment>
    )
}

export default AirtelFiber