import React from 'react'
import edwin from '../assets/edwin2.png'

function About() {
  return (
    <section>
        <div>
            <h1> Hello, I'm Edwin</h1>
            <p> I'm an entry level full-stack developer using React and Ruby on Rails. React out if you like to learn more! </p>
        </div>
        <a href='mailto:myemail@email.com'> Contact Me</a>
        <img src={ edwin} alt='me'/>
    </section>
    
  )
}

export default About