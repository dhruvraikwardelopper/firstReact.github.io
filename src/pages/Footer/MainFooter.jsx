import React from 'react'
import Feedback from './Feedback'
import Footerlinks from './Footerlinks'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



const MainFooter = () => {
  return (
    <>
    <div className=' px-15 my-5 font-serif  text-white'>
        <Feedback/>
        <Footerlinks/>
    </div>
    </>
  )
}

export default MainFooter
