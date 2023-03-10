import React from 'react'
import Items from './Items'
import './item.css'

const Similar_Product = () => {
  return (
    <div className='simple'>
    <h2 className='m-4'>Similar Products</h2>
      <div className='item'>
       <div className='white'>
       <div className=''><Items/></div>
       </div>
       <br/>
       <div>
       <div className='white'><Items style={{marginRight:"50px"}}/></div>
       </div>
       <div>
       <div className='white'><Items/></div>
       </div>
       <div>
       <div className='white'><Items/></div>
       </div>
      </div>
    </div>
  )
}

export default Similar_Product