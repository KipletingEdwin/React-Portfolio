import React from "react";

function NavBar() {
  return <nav>
    <a href="/"> Portfolio</a>
    <div> 
        <ul>
            <li><a href="#about"> About </a></li>
            <li><a href="#skills"> Skills </a></li>
            <li><a href="#projects"> Projects </a></li>
            <li><a href="#contact"> Contact </a></li>
        </ul>
    </div>
  </nav>
}

export default NavBar;
