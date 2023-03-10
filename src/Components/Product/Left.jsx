import React from 'react'
import './left.css'
import Sofa1 from "../../assets/Sofa.png";
import Sofa2 from "../../assets/Sofa1.png";
import Sofa3 from "../../assets/Sofa2.png";
import Sofa4 from "../../assets/Sofa3.png";
import Sofa5 from "../../assets/Sofa4.png";
import Sofa6 from "../../assets/Sofa5.png";
// import Sofa7 from "../../assets/card.png";

const Left = () => {
  return (
    <>
            <div className='Hero'>
                <img className='main' src={Sofa1} alt =""></img>
            </div>
            <div className='mimg'>
            <div className='simg '><img src ={Sofa2} alt =""></img></div>
                <div className='simg'><img src={Sofa3} alt =""></img></div>
                <div className='simg'><img src={Sofa4} alt =""></img></div>
                <div className='simg'><img src={Sofa5} alt =""></img></div>
                <div className='simg'><img src={Sofa6} alt =""></img></div>
                {/* <div className='simg'><img src={Sofa7} alt =""></img></div> */}
                
            </div>

        </>
  )
}

export default Left