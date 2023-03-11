import React from 'react'
import './profile.css'
import { BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className='pf'>
    Perks
    <br />
    <br />
    <input  type="checkbox" name="propducts" /> <label>Compare products</label>
    <br />
    <br />
    <div className='cd'>
        <div className='sh'>Share : </div>
        <div id='whatsapp' className='cm'> <BsWhatsapp/> Whatsappp</div>
        <div id='Instagram' className='cm' > <AiFillInstagram/> Instagram</div>
        <div className='cm' style={{textDecoration:"underline"}}> <BsShareFill/> Share</div>
    </div>
</div>
  )
}

export default Profile