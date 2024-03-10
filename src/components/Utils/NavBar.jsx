import React , { useState } from "react";
import { Link } from 'react-router-dom'
import { constants } from "../../constants";

const Navbar = () => {
    const [navtabs, setNavTabs] = useState(constants)
    const tabChangeHandler = (selectedIndex) =>{
        let updatedNavTabs = navtabs.map((item, index)=>{
            if(index === selectedIndex){
                item.active = true
            }else{
                item.active = false
            }
            return item
        })
        setNavTabs(updatedNavTabs)
    }
    return <nav className="navouter">
        <ul className="navbar">
            {navtabs.map((item, index) => {
                return (
                    <li key={index} onClick={()=>{tabChangeHandler(index)}}>
                        <Link to={item.path} className={item.active ? "active": ''}>{item.page}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>

}

export default Navbar