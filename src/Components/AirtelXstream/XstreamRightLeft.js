import React,{Fragment} from 'react'
import './Artical.css'
function XstreamRightLeft(props) {
  return (
    <Fragment>
      <article>
        <div className="XstreamRightLeft_left">
          <h1 className='first_heading'>{props.first_heading}</h1>
          {props.second_heading && 
          <h1 className='second_heading'>{props.second_heading}</h1>
          }
          <p className='para'>{props.para}</p>
          <a href="/">BUY NOW</a>
        </div>
        <div className="XstreamRightLeft_right">
        <img alt="" height="438" src={props.image} width="640"/>
        </div>
      </article>
    </Fragment>
  )
}

export default XstreamRightLeft