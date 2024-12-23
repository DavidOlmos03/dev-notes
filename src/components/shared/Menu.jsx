import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Transtalation
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect"

// Styles personalized
import '../../styles/Menu.css'

function Menu() {    
  const { t, i18n } = useTranslation();
  const [showSecondNav, setShowSecondNav] = useState(true);
  
  useEffect(()=>{
     const handleScroll = () => {
       if (window.scrollY > 20){
         setShowSecondNav(false)
       }else{
         setShowSecondNav(true)
       }
     };

    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
      <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
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
              <li className="nav-item px-2">
                <Link to="about" className='nav-link ms-auto'>About</Link
                ></li>
              <li className="nav-item px-2">
                <Link to="contact" className='nav-link ms-auto'>Contact</Link>
              </li>
            </ul>       
            <LanguageSelect
             i18n = { i18n } 
            />
        </div>
      </div>
      </nav>

      {/* Show the second navbar */}
    {!showSecondNav && (
        <div
          className="second-nav bg-dark text-center text-white py-2"
          onMouseEnter={() => setShowSecondNav(true)}
          style={{ cursor: 'pointer' }}
        >
          ▼
        </div>
    )}
    {showSecondNav && (
      <nav className="second-nav navbar navbar-expand-lg bg-dark navbar-dark mx-5 rounded-bottom">
        <div className="container">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-2">
              <Link to="angular" className="nav-link text-decoration-none">Angular</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="vuejs" className="nav-link text-decoration-none">Vue JS</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="php" className="nav-link text-decoration-none">PHP</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="python" className="nav-link text-decoration-none">Python</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="docker" className="nav-link text-decoration-none">Docker</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="venv" className="nav-link text-decoration-none">Entorno Virtual</Link>
            </li>
            <li>
        <div
          className="bg-dark text-center text-white py-2 d-md-none"
            onMouseEnter={() => setShowSecondNav(false)}
          style={{ cursor: 'pointer' }}
        >
          ↑
        </div>
            </li>
          </ul>
        </div>
      </nav>
    )}
  </div>
  );
};

export default Menu;

