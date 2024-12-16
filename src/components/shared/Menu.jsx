import { Link } from "react-router-dom";

function Menu() {
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
                <Link to="About" className='nav-link ms-auto'>About</Link>
                {/* <a href="/dev-notes/angular" className="nav-link ms-auto">Angular</a> */}
            </ul>
            <ul className="navbar-nav">
            <Link to="contact" className='nav-link ms-auto'>Contact</Link>
            </ul>
        </div>
      </div>
      </nav>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark mx-5 rounded-bottom'>
        <div className='container'>
          <ul className='navbar-nav'><Link to="angular" className='text-decoration-none'>Angular</Link></ul>
          <ul><Link to="vuejs" className='text-decoration-none'>Vue JS</Link></ul>
          <ul><Link to="php" className='text-decoration-none'>PHP</Link></ul>
          <ul><Link to="python" className='text-decoration-none'>Python</Link></ul>
          <ul><Link to="docker" className='text-decoration-none'>Docker</Link></ul>
          <ul><Link to="venv" className='text-decoration-none'>Entorno Virtual</Link></ul>
        </div>
      </nav>

      </div>

      

  );
};

export default Menu;

