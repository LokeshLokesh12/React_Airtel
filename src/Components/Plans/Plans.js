import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'
// import styled from 'styled-components'
import "./plans.css"
import CircleLoader from "react-spinners/CircleLoader";


function Plans() {
  const [loading, setloading] = useState(false)
  const [plan, setplan] = useState([{

    " base": "",
    "benfits": [],
    "cost": 0,
    "data": "",
    "type": "",
    "validity": 0,
    "_id": ""
  }])

  useEffect(() => {
    setloading(true)
    let url = "http://localhost:8080/plans"
    // let url = "https://airtrl-api.onrender.com/plans"
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setplan(data)
        setloading(false)
      })
  }, [])


  useEffect(() => {
    const detail = document.getElementById("detail")
    let rechargeTo = sessionStorage.getItem("rechargeTo")
    function but(event) {
      if (event.target.tagName === "BUTTON") {
        let sel = event.target.closest('SECTION')
        var selid = sel.id
        console.log(selid);
        sessionStorage.setItem("rechargepack", selid)
        if (rechargeTo) {
          window.location = "/Payment"
        } else {
          window.location = "/Rechargeonline"
        }
      }
    }
    detail.addEventListener("click", but);
    return () => {
      detail.removeEventListener("click", but);

    }
  }, [])


  return (
    <Fragment>
      <Header />
      <div className="main">
        <div className="plan_left">
          <div className="text">
            <h1>
              We're holding the door for you!
            </h1>
            <p>
              Buy our Prepaid plan to get your access
            </p>
          </div>
        </div>
        <div className="plan_right">

          <div className="detail" id="detail">
            
            {loading ?
              <div className="center">
                <CircleLoader
                  color={'#EB4F4F'}
                  // color={'#000'}
                  loading={loading}
                  size={150}
                />
              </div>

              :
               <>
               {plan.map((data)=>{
                return(
                <section id={data._id} key={data._id}>
                  <div className="childBox">
                    <div className="top">
                      <p>₹ {data.cost}</p>
                      <p>{data.data}</p>
                      <p>{data.validity}</p>
                      <button>₹{data.cost}</button>
                    </div>
                    <div className="bot">

                     <p className='pack'>this is {data.type} pack</p>
                      <h3 id="benTil">Additional Benifit(s)</h3>
                      <ul>
                        {
                          !data.benfits[0] && 
                          <li> <p id="botp">sorry, this plan dosen't have any additional plans</p></li>
                          
                        }
                        {
                          data.benfits[0] && 
                          <li> <p id="botp">{[data.benfits[0]]} </p></li>
                          
                        }
                        {
                          data.benfits[1] && 
                          <li> <p id="botp">| {[data.benfits[1]]} </p></li>
                          
                        }
                        {
                          data.benfits[2] && 
                          <li> <p id="botp">| {[data.benfits[2]]} </p></li>
                          
                        }
                        {
                          data.benfits[3] && 
                          <li><p id="botp">| {[data.benfits[3]]} </p></li>
                          
                        }
                        {
                          data.benfits[4] && 
                          <li> <p id="botp">| {[data.benfits[4]]} </p></li>
                          
                        }
                        {
                          data.benfits[5] && 
                          <li> <p id="botp">| {[data.benfits[5]]} </p></li>
                          
                        }
                      </ul>
                    </div>
                  </div>
                </section>
                )
               })}
              
              </> 

            }

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Plans