import React from 'react'
import './profile.css'

const Profile = () => {
  return (
    <div className='pf'>
    ProfileCard
    <br />
    <br />
    <input className='mt-4' type="checkbox" name="propducts" /> <label>Compare products</label>
    <br />
    <br />
    <div className='cd'>
        <div className='sh'>Share : </div>
        <div id='whatsapp' className='cm'> Whatsappp</div>
        <div id='Instagram' className='cm' > Instagram</div>
        <div className='cm' style={{textDecoration:"underline"}}> Share</div>
    </div>
</div>
  )
}

export default Profile