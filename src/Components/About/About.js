import React from 'react'
import Intro from './Intro'
import Why from './Why'
import Vision from './Vision'
import Contact from './Contact'
import Footer from './Footer'
import './about.css'

const About = () => {

  return (
    <div style={{backgroundColor: 'rgba(244,196,187,0.5)'}}>
      <Intro/>
      <Why/>
      <Vision/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About