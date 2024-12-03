// src/Home.jsx

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 mx-5 rounded-bottom'>
        <div className='container'>
          <ul className='navbar-nav'><Link to="angular" className='text-decoration-none'>Angular</Link></ul>
          <ul><Link to="vuejs" className='text-decoration-none'>Vue JS</Link></ul>
          <ul><Link to="php" className='text-decoration-none'>PHP</Link></ul>
          <ul><Link to="python" className='text-decoration-none'>Python</Link></ul>
          <ul><Link to="docker" className='text-decoration-none'>Docker</Link></ul>
          <ul><Link to="venv" className='text-decoration-none'>Entorno Virtual</Link></ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;

