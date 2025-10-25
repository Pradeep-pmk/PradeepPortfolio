import React from 'react'
import './Hero.css'
import profile_img from '../../assets/myphoto.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img}  alt="" />
        <h1> <span>Hi, I'm Pradeep,</span> Full Stack Web Developer</h1>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connet With Me</AnchorLink></div>
            <a href="/Pradeep.pdf" download> <div className="hero-resume">My Resume</div> </a>        

        </div> 
    </div>
  )
}

export default Hero