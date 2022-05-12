import React from 'react'
import './about.css'
import ME from '../../assets/imageme3.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='image'/>
        </div>
      </div>

      <div className='about__content'>
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>6+ months </small>
        </article>
        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>not yet </small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>4+ completed </small>
        </article>
      </div>

      <p>
        I'm here for you .if you need help and waiting ti do some websites.
      </p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>  
    </section>
  )
}
