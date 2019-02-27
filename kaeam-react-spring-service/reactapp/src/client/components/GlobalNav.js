import React from 'react';
/** import { Link } from 'react-router-dom'; */
import "../../App.css";
import logo from '../img/Archemy_TM.png';
import Navbar from 'react-bootstrap/Navbar';

export default () => (
//   <nav className="navbar" role="navigation" aria-label="main navigation">
//     <div className="navbar-brand">
//       <div className="navbar-item">
//         <img src={logo} alt="Archemy Logo" />
//         <h3 className="nav-title">Active Business Solutions Network Workbench</h3>
//       </div>
//     </div>
//   </nav>
    <div className="LogoTitleStyle">
    <Navbar bg="#1f5f71">
        <Navbar.Brand bg="#1f5f71" href="#home">
        <img
            src={logo}
            width="70"
            height="50"
            className="d-inline-block align-top"
            alt="Archemy Logo"
        />
        <h3 className="nav-title">Active Business Solutions Network Workbench</h3>
        </Navbar.Brand>
    </Navbar>
    </div>
);
