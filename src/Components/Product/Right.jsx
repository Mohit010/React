import React from 'react'
import './right.css'
import Profile from './Profile'
import Delievery from './Delievery'
import Overview from './Product_overview'
import Redhrt from '../../assets/rhrt.png'
import { FaTruckMoving } from "react-icons/fa";


const Right = () => {
  return (
    <>
    <div className='heading'>
    <h1 >
        <b>Dorna Premium Leatherette &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <img src={Redhrt} alt="" />
            <br /> Rolled arm Sofa, 74.01” 3 <br /> Seater, Light Brown</b>
        </h1>
    </div>
   
        <div>
            <span className='mrp'>MRP : <strike>₹17,999</strike>
             <span className='eleven'> 11% off </span></span> <br/>

             <div className='mr'>
            <span className='rmrp'>₹15,999</span> 
            <span style={{fontSize:"28px",color:"#C6AC8F"}}>.00 </span>
             <span className='piece'>/ piece</span><br/>

             </div>

            <br />
            <span className='on_sale'>ON SALE</span>
            <br/><br/>

            <span className='brand'>Brand Name : </span>
            <span className='none'>None</span>
            <br/>
            <span className='brand'>Size : </span>
            <span className='none'>8 feet x 1.6 feet</span><br/>
            <span className='brand'>Set Available : </span>
            <span className="none">150</span>
            <br/>
            <span className='gq'>Get Quote</span>
            <br/>
            
             <span className='eligible'><FaTruckMoving style={{color:"black"}} /> &nbsp;Eligible for free 1 day delivery</span>
            <br/>
            
            <Profile />
            <Delievery />
            <Overview/>
        </div> 
        </>  
  )
}

export default Right