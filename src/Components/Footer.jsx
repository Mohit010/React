import React from 'react'
import Facebook from '../assets/fb.png'
import Instagramm from '../assets/ins.png'
import Twitter from '../assets/tw.png'
import Pintrest from '../assets/pn.png'
import Vv from '../assets/vv.png'
import mail from '../assets/mail.png'
import contact from '../assets/contact.png'
import './footer.css'




const Footer = () => {
  return (
    <div  style={{ height: "440px", backgroundColor: "#22333B" }}>

    <div className='comman'>
      <div className=''>
        <div className='vv'>
          <div id='v' ><img src={Vv} style={{ height: "30px", width: "40px" }} /></div>
          <div className='frl' ><span >frikly</span></div>
        </div>
        <div className='arr' >
          Frikly brings you closer to all of your top picks with a single tap. Now,<br /> enjoy the exceptional by making it easier to enhance the  <br /> aesthetics of your indoor or outdoor settings by adding a modern, <br /> trendy, and one-of-a-kind collection.
        </div>
        <div className='ic'>
          <div > <img src={Facebook} alt =""></img> </div>
          <div ><img src={Instagramm} alt =""></img>  </div>
          <div ><img src={Twitter} alt =""></img> </div>
          <div ><img src={Pintrest} alt =""></img> </div>
        </div>
      </div>
      <div className='leff'>
        <span className='gitc'>Get in touch with us!</span>
        <br />
        <br />
        <div >
          <span id='info'> <img src={mail} alt =""></img> info@frikly.com</span><br />
          <span id='cnc'> <img src={contact} alt =""></img> +91-8390288647 </span>
        </div>
      </div>
    </div>
    <div className='cpyrght'>
    © Copywright 2022 by Malu Technologies Pvt Ltd, 207, Jailaxmi Appts, Near Telephone Exchange Square, Nagpur, 440008
    </div>

  </div>
  )
}

export default Footer