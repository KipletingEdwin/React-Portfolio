import React from "react";
import bar from "../assets/bars-solid.svg"

function NavBar() {
  return <nav className="nav">
    <a className="port" href="/"> Portfolio</a>
    <div className="menu"> 
    <img alt="bar" src={bar}/>
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
