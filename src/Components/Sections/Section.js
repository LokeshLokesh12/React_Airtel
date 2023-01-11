import React,{Fragment} from 'react'
import AirtelBlack from './AirtelBlack'
import AirtelPrepaid from './AirtelPrepaid'
import InternationalRoaming from './InternationalRoaming'
import Xstream from './Xstream'
import Talktime from './Talktime'
import Wynk from './Wynk'
import ThanksApp from './ThanksApp'

function Section() {
  return (
    <Fragment>
       <AirtelBlack/>
       <AirtelPrepaid/>
       <InternationalRoaming/>
       <Xstream/>
       <Talktime/>
       <Wynk/>
       <ThanksApp/>
    </Fragment>
  )
}

export default Section