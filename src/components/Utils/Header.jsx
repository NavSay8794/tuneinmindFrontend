import React from "react";
import Navbar from "./NavBar";
import Logo from "./LogoComponent";
import Login from './LoginComponent';
import './header.css'

const Header = () =>{
    return(
        <header className="header">
            <Logo />
            <Navbar />
            <Login />
        </header>
    )
}

export default Header