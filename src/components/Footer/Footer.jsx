import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img className='logo' src={assets.logo} alt=""/>
            <p>From local to international brands, we provide the best DASUNI WIN!</p>
            <div className='footer-social-icons'>
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivary</li>
                <li>Privacy Policy</li>
              </ul>
        </div>
        <div className="footer-center-right">
             <h2>GET IN TOUCH</h2>
             <ul>
              <li>+94774922503</li>
              <li>chathuram2808@gmail.com</li>
              <li>No 13/1</li>
              <p>Pilipana South</p>
              <p>Prasannapura</p>
             </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © DasuniWin.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;