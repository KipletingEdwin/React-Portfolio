import React from 'react'
import cursor from '../assets/arrow-pointer-solid.svg'

function AboutMe() {
  return (
    <section>
        <h2> About</h2>
        <div>
            <img src='' alt='me'/>
            <ul>
                <li>
                    <img src={cursor} alt='else me'/>
                    <div>
                        <h3> Frontend Developer</h3>
                        <p>Frontend developer with experience in building and optimized sites</p>
                    </div>
                </li>

                <li>
                    <img src='' alt='else me'/>
                    <div>
                        <h3> Backend Developer</h3>
                        <p>I am an upcoming backend developer using Ruby and Ruby on Rails</p>
                    </div>
                </li>

                <li>
                    <img src='' alt='else me'/>
                    <div>
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