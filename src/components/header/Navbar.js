import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase-config.js";
import Container from 'react-bootstrap/Container';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import {NavLink} from "react-router-dom";
function Navbar() {
    const [isAuth, setIsAuth] = useState(false);
    const signUserOut = ()=>{
      signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      })
    };
    return (
      
      <div className='d-flex site-header py-2'>
      {/* <img src="party_hat1.webp" href="" className='mb-2 me-auto' id="party" alt="" width="35" height="35"/> */}
      <BootstrapNavbar.Brand className="ms-auto me-auto my-2 brand-title">
      NIPUN RAMANI</BootstrapNavbar.Brand>
       <Nav className="ms-auto me-auto"
                    style={{maxHeight:'100px'}}>
       <Nav.Link className="mleft-1" id="nav-link"  href="/about">About Me</Nav.Link>
       <Nav.Link className="mleft-1" id="nav-link" href="/project">Project</Nav.Link>
       <Nav.Link className="mleft-1" id="nav-link" href="/posts">Posts</Nav.Link>
       <Nav.Link className="mleft-1" id="nav-link" href="/socials">Socials</Nav.Link>
       
       </Nav>
        </div>
       );
}
export default Navbar;