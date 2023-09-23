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
      <BootstrapNavbar.Brand className="ms-auto me-auto my-auto brand-title" id="brand-title-name">
      NIPUN RAMANI</BootstrapNavbar.Brand>
       <Nav className="ms-auto me-auto"
                    style={{maxHeight:'100px'}}>
       <Nav.Link className="mleft-0" id="nav-link"  href="/about">about</Nav.Link>
       <Nav.Link className="mleft-0" id="nav-link" href="/project">projects</Nav.Link>
       <Nav.Link className="mleft-0" id="nav-link" href="/posts">posts</Nav.Link>
       
       </Nav>
        </div>
       );
}
export default Navbar;
