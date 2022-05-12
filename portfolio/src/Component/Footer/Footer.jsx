import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Kaustubh</a>

      <ul className='permalinks'>
        <li><a className='footer__data' href='#'>Home</a></li>
        <li><a className='footer__data' href='#about'>About</a></li>
        <li><a className='footer__data' href='#experience'>Experience</a></li>
        <li><a className='footer__data' href='#services'>Services</a></li>
        <li><a className='footer__data' href='#portfolio'>Protfolio</a></li>
        <li><a className='footer__data' href='#testimonials'>Testimonials</a></li>
        <li><a className='footer__data' href='#contact'>Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://linkdin.com'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kaustubh. All rights reserved.</small>
      </div>

    </footer>

  )
}

export default Footer