import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
    <div className="container">
        <a href="https://mundostem.netlify.app/" className="navbar-brand">MS</a>
        
        <Link to="/" className="navbar-brand">DevNotes</Link>
       
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
        aria-controls="navmenu"
        ><span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
                <Link to="About" className='nav-link ms-auto'>About</Link>
                {/* <a href="/dev-notes/angular" className="nav-link ms-auto">Angular</a> */}
            </ul>
            <ul className="navbar-nav">
               <Link to="contact" className='nav-link ms-auto'>Contact</Link>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Menu;

