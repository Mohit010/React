import React from 'react'
import Items from './Items'
import './item.css'

const Similar_Product = () => {
  return (
    <div className='simple'>
    <h2 className='sp'>Similar Products</h2>
    <br />
    <br />
      <div className='item'>
            <div>
            <div className='white'><Items/></div>
            </div>

        <div>
        <div className='white'><Items/></div>
        </div>
        <div>
        <div className='white'><Items/></div>
        </div>
        <div>
        <div className='white'><Items/></div>
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
    
  )
}

export default Similar_Product