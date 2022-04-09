import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
            <nav className="mainMenu">
                <NavLink to='/' className="menu_style1"  >Home</NavLink>
                <NavLink to='/about' className="menu_style2" >About</NavLink>
                <NavLink to='/contact' className="menu_style3" >Contact</NavLink>
            </nav>
        </>
    );
}

export default Navbar;