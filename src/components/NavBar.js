import React, {useState} from "react";
import bar from "../assets/bars-solid.svg"
import xbar from "../assets/xmark-solid.svg"

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false);
  return <nav className="navbar">
    <a className="port" href="/"> Portfolio</a>
    <div className="menu"> 
    <img className="bar" alt="bar" src={ openMenu ? xbar : bar}  onClick={() => setOpenMenu(!openMenu)}/>
        <ul className = {`${ items } ${ openMenu? "myOpenMenu" : "items" }` }>
            <li><a href="#about"> About </a></li>
            <li><a href="#skills"> Skills </a></li>
            <li><a href="#projects"> Projects </a></li>
            <li><a href="#contact"> Contact </a></li>
        </ul>
    </div>
  </nav>
}

export default NavBar;
