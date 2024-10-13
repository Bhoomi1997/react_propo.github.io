import React from 'react'
import './Hero.css'
import profile_img from '../../assets/BhoomiImg.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Bhoomika S N,</span> frontend developer based in Bengaluru.</h1>
      <p>I am a frontend developer from Bengaluru, with 2 years of experience in Thomson Reuters Company.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#contact'>My resume</AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero
