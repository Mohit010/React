import React from 'react'
import Card from '../assets/card.png'
import './item.css'

const Items = () => {
  return (
    <div class="wdh" >
      <div >
      <img src={Card} alt="..."/>
      </div>
        <div>
          <h5 class="arm">
            <b>Ainsley Rolled Arm  <br/>Sofa 74.01” by <br/> Steelside</b></h5>

          <span className='prm'>MRP : <strike>₹17,999 &nbsp;</strike>
           <span className='off'>  11% off </span>
           </span> 
           <br/>
            <span className='five'>₹15,999</span>
            <span className='cp'>/ piece</span>
            <br/>
        </div>
          <div><a href="#" class="button" >Add to cart</a></div>
          <br />
          <br />
          <br />
    </div>
  )
}

export default Items