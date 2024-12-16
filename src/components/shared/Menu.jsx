import { Link } from "react-router-dom";
import '../../styles/Menu.css'

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
              <li className="nav-item px-2">
                <Link to="about" className='nav-link ms-auto'>About</Link
                ></li>
              <li className="nav-item px-2">
                <Link to="contact" className='nav-link ms-auto'>Contact</Link>
              </li>
            </ul>
            {/* <ul className="navbar-nav ms-auto">
                <Link to="About" className='nav-link ms-auto'>About</Link> */}
                {/* <a href="/dev-notes/angular" className="nav-link ms-auto">Angular</a> */}
            {/* </ul> */}
            {/* <ul className="navbar-nav">
            <Link to="contact" className='nav-link ms-auto'>Contact</Link>
            </ul> */}
        </div>
      </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark mx-5 rounded-bottom">
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
        </ul>
      </div>
</nav>


      </div>

      

  );
};

export default Menu;

