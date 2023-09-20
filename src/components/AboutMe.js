import React from 'react'
import cursor from '../assets/icons8-cursor-50.png'
import server from '../assets/icons8-server-50.png'

function AboutMe() {
  return (
    <section className='myContainer'>
        <h2> About</h2>
        <div className='myContent'>
            <img src='' alt='me'/>
            <ul>
                <li>
                    <img src={cursor} alt='else me'/>
                    <div className='aboutItemText'>
                        <h3> Frontend Developer</h3>
                        <p>Frontend developer with experience in building and optimized sites</p>
                    </div>
                </li>

                <li>
                    <img src={server} alt='else me'/>
                    <div className='aboutItemText' >
                        <h3> Backend Developer</h3>
                        <p>I am an upcoming backend developer using Ruby and Ruby on Rails</p>
                    </div>
                </li>

                <li>
                    <img src={cursor} alt='else me'/>
                    <div className='aboutItemText' >
                        <h3> UI/UX Designer</h3>
                        <p>I have designed multiple landing pages and I have created design systems as well</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
  )
}

export default AboutMe