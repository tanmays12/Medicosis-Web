import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>About Our Company</h3>
            <h2>Saving Tomorrow, Today</h2>
            <p>#</p>
            <p>#</p>
            <p>#</p>
        </div>
        
    </div>
  )
}

export default About