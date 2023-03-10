import React from 'react'
import './product.css'
import ruler from '../../assets/ruler.png'
import truck from '../../assets/truck.png'

const Product_overview = () => {
  return (
    <div>
    <h5 className='prdct'><b>Product Overview</b></h5>

    <div className='big_div' >
      <div className="same1">
      <div className='Same1'>
        Extreme Comfort
      </div>
      <div id='s1' className='Same1'>
        Water Resistant
      </div>
      </div>
      {/* <div className='w-100'></div> */}
        <div className="same2">
        <div className='Same2'>
        1 year Warranty
      </div>
      <div className='Same2'>
        <div id='s1'>Removable Cushions</div>
      </div>
        </div>
    </div>

    <br />

    <div className='desc' >
      <div className='des'>Description</div>
      <div className='col-2'></div>
    </div>

    <br />

    <div className='content'>
      This premium leather sofa is classy and minimal and enhances the aesthetic appearance of modern living rooms. It is a three-seater spacious sofa that provides a great blend of comfort and luxury. The sofa has a contemporary feel to it, and is an ideal match for most interior decor themes. This sofa is fully upholsteres with superior quality leatherette that feels soft to the touch.
    </div>

    <br />

    <hr/>



   
     <div className="dimen">
        <div className='ruler'><img src={ruler} alt="" /></div>
        <div className='ruler'>Dimensions</div>
     </div>
   
    
    <hr/>
    <div className="dimen">
        <div  className='ruler'><img id='rl' src={truck} alt="" /></div>
        <div className='ruler'>Shipping Details</div>
     </div>
        
  </div>

  
  )
}

export default Product_overview