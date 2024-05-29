import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { constants } from "../../constants";
import Logo from "./LogoComponent";
import Login from './LoginComponent';

function TimNavbar() {
    const [navtabs, setNavTabs] = React.useState(constants)
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
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navbarBG'>
      <Container fluid>
        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            {navtabs.map((item, index) => {
                return (
                    <li key={index} onClick={()=>{tabChangeHandler(index)}}>
                        <Link to={item.path} className={`nav-link ${item.active ? "active": ''}`}>{item.page}</Link>
                    </li>
                )
            })}
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TimNavbar;