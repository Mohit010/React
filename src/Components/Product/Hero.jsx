import React from 'react'
import './hero.css'
import Left from'./Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className="thick">
        <div className='tag_line'>Home &nbsp;&gt; Living Room &nbsp;&gt; Sofas &nbsp;&gt; Premium Leatherette Sofa 3 Seater</div>

        <div className='lr'>
                <div className='lf'>
                    <Left/>
                </div>
                <div className='rf'>
                    <Right/>
                </div>
        </div>
    </div>


  )
}

export default Hero