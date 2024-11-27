import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const AppMenu = () => {
    return (
        <Router>
            <div>

       <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
            <a href="/" class="navbar-brand">MS</a>
            <a href="/" class="navbar-brand">DevNotes</a>
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            ><span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <a href="/Angular" class="nav-link ms-auto">Angular</a>
                </ul>
                <ul class="navbar-nav">
                    <a href="/vuejs" class="nav-link ms-auto">Vuejs</a>
                </ul>
                <ul class="navbar-nav">
                    <a href="/php" class="nav-link ms-auto">PHP</a>
                </ul>
                <ul class="navbar-nav">
                    <a href="/python" class="nav-link ms-auto">Python</a>
                </ul>
                <ul class="navbar-nav">
                    <a href="/docker" class="nav-link ms-auto">Docker</a>
                </ul>
                <ul class="navbar-nav">
                    <a href="/venv" class="nav-link ms-auto">Entorno Virtual</a>
                </ul>
                </div>
        </div>
    </nav>      
            </div>
        </Router>
    );
};

export default AppMenu;

