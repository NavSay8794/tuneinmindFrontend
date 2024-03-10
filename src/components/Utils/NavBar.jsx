import React from "react";
import { Link } from 'react-router-dom'
import { constants } from "../../constants";

const Navbar = () => {
    return <nav className="navouter">
        <ul className="navbar">
            {constants.map((item, index) => {
                return (
                    <li key={index} className={item.isActive ? "active": ''}>
                        <Link to={item.path}>{item.page}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>

}

export default Navbar