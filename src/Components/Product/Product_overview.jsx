import React from 'react'
import './product.css'
import ruler from '../../assets/ruler.png'
import truck from '../../assets/truck.png'
import { TbChartBubble } from "react-icons/tb";
import { BsDroplet } from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import { GiSofa } from "react-icons/gi";
import { FiInfo } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";






const Product_overview = () => {
  return (
    <div>
    <h5 className='prdct'><b>Product Overview</b></h5>

    <div className='big_div' >
      <div className="same1">
      <div className='Same1'>
       <TbChartBubble/> &nbsp; Extreme Comfort
      </div>
      <div id='s1' className='Same1'>
        <BsDroplet /> &nbsp; Water Resistant
      </div>
      </div>
      
        <div className="same2">
        <div className='Same2'>
       <BsShieldShaded/> &nbsp; 1 year Warranty
      </div>
      <div className='Same2'>
        <div id='s1'><GiSofa/> &nbsp; Removable Cushions</div>
      </div>
        </div>
    </div>

    <br />

    <div className='desc' >
      <div className='des'><FiInfo/> &nbsp;Description &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <AiOutlineDown/></div>
      
    </div>

    <br />

    <div className='content'>
      This premium leather sofa is classy and minimal and enhances the aesthetic appearance of modern living rooms. It is a three-seater spacious sofa that provides a great blend of comfort and luxury. The sofa has a contemporary feel to it, and is an ideal match for most interior decor themes. This sofa is fully upholsteres with superior quality leatherette that feels soft to the touch.
    </div>

    <br />

    <hr className='hr'/>



   
     <div className="dimen">
        <div className='ruler'><img src={ruler} alt="" /></div>
        <div className='ruler'>Dimensions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AiOutlineDown/> </div>
     </div>
   
    
    <hr className='hrr'/>
    <div className="dimen">
        <div  className='ruler'><img id='rl' src={truck} alt="" /></div>
        <div className='ruler'>Shipping Details  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AiOutlineDown/></div>
     </div>

  </div>

  
  )
}

export default Product_overview