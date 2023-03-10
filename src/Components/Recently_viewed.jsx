import React from 'react'
import Items from './Items'

const Recently_viewed = () => {
  return (
    <div className='simple'>
    <h2 className='sp'>Recently Viewed</h2>
    <br />
    <br />  
      <div className='item'>
            <div className='cover'>
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
    </div>
  )
}

export default Recently_viewed