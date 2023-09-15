import React from 'react'
import edwin from '../assets/edwin2.png'

function About() {
  return (
    <section className='container'>
        <div className='content'>
            <h1> Hello, I'm Edwin</h1>
            <p> I'm an entry level full-stack developer using React and Ruby on Rails. React out if you like to learn more! </p>
        </div>
        <a href='mailto:myemail@email.com' className='contactbtn'> Contact Me</a>
        <img src={ edwin} alt='me'/>
        <div className='topblur'></div>
        <div className='bottomblur'></div>
    </section>
    
  )
}

export default About