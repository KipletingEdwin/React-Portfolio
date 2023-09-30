import React, {useState} from "react";
import bar from "../assets/menuIcon.png"
import xbar from "../assets/closeIcon.png"

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false);
  return <nav className="navbar">
    <a className="port" href="/"> Portfolio</a>
    <div className="menu"> 
    <img className="bar" alt="bar" src={ openMenu ? xbar : bar}  onClick={() => setOpenMenu(!openMenu)} />
        <ul className = {`${"submenu"} ${ openMenu && "openMenu"}`} onClick={() =>setOpenMenu(false)}  >
            <li><a href="#about"> About </a></li>
            <li><a href="#experience"> Skills </a></li>
            <li><a href="#projects"> Projects </a></li>
            <li><a href="#contact"> Contact </a></li>
        </ul>
    </div>
  </nav>
}

export default NavBar;
