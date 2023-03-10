import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="box">

        <div className="nav1">
            <div className="c1">
            Enter Pincode &nbsp; &nbsp; &nbsp;
                <span className="pc">Change Pincode</span>
            </div>

            <div></div>

            <div className='order'>Order Tracking</div>
         </div>

         <div className='nav2'>
                <div className='lg'><span className='frikly'>frikly</span></div>
                <div className='n1'>Home</div>
                <div className='n1'>About</div>
                <div className='osrch'>
                    <input class="srch" type="search" placeholder="🔍 Search for products" aria-label="Search" />
                </div>
            
                <div className='col-2 mt-4'  >
                    
                </div>
            </div>




            <div className='nav3'>
                <div className='n2'></div>
                <div className='n2'>New Arrivals</div>
                <div className='n2'>Chairs</div>
                <div className='n2'>Sofas</div>
                <div className='n2'>Tables</div>
                <div className='n2'>Beds</div>
                <div className='n2'>Storage</div>
                <div className='n2'>Decor</div>
                <div className='n2'>Kitchen</div>
                <div className='n2'>Garden</div>
                <div className='n2'></div>
            </div>






    </div>
  )
}

export default Header