import React from 'react'
import Money from '../../assets/Money.png'
import Truck from '../../assets/truck.png'
import Replace from '../../assets/replacement.png'
import './delievery.css'
import { GrLocation } from "react-icons/gr";

const Delievery = () => {
  return (
    <>
    <div className='big' >
       <div className='dlvry'>
       <div className='same'>
          <div className='class1'>
            <img className='money' src={Money} alt="" /></div>
          <div>Pay On Delievery <br /> &nbsp; &nbsp; &nbsp; &nbsp;Available</div>
        </div>
        <div className='same'>
          <div className='icon_truck'>
            <img className='truck' src={Truck}  alt = ""/></div>
          <div>Safe Delivery by <br />  &nbsp; &nbsp; &nbsp; &nbsp; Frikly</div>
        </div>
        <div className='same'>
          <div className='icon_replace' >
            <img className='replc' src={Replace} alt ="" /></div>
          <div> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;10 days <br />  &nbsp; &nbsp; &nbsp;Replacement</div>
        </div>
       </div>

      
          <div className='pincode' >
            <div className='pc_1' > <GrLocation/> &nbsp;Enter pincode</div>
            <div className='check' >Check</div>
          </div>
        

        <div className='get'>
          <span>Get it delivered between </span><span style={{ color: "black", fontWeight: "bold" }}>Sat, Jun 18 - Mon, Jun 20</span>
        </div>
        <p className='free'><strong>Free shipping on all orders</strong></p>
        <br />
        <br />
        <hr className='hr'/>
        <br />
        

      </div>
    </>
  )
}

export default Delievery