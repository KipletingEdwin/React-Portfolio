import React from 'react'

function Contact() {
  return ( <footer>
    <div> 
        <h2> Contact </h2>
        <p> Feel free to react out!</p>
    </div>
    <ul>
        <li>
            <img src={email} alt='Email icon'/>
            <a href='mailto:myemail@email.com'>myemail@email.com</a>
        </li>

        <li>
            <img src={linkedin} alt='Linked icon'/>
            <a href='https://www.linkedin.com/myname'>linkedIn.com/myname</a>
        </li>

        <li>
            <img src={github} alt='Github icon'/>
            <a href='https://www.github.com/myname'>github.com/myname</a>
        </li>
    </ul>
  </footer>
    
  )
}

export default Contact