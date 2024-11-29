function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
    <div className="container">
        <a href="https://mundostem.netlify.app/" className="navbar-brand">MS</a>
        <a href="'/dev-notes'" className="navbar-brand">DevNotes</a>
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
                <a href="/dev-notes/angular" className="nav-link ms-auto">Angular</a>
            </ul>
            <ul className="navbar-nav">
                <a href="/dev-notes/vuejs" className="nav-link ms-auto">Vuejs</a>
            </ul>
            <ul className="navbar-nav">
                <a href="/dev-notes/php" className="nav-link ms-auto">PHP</a>
            </ul>
            <ul className="navbar-nav">
                <a href="/dev-notes/python" className="nav-link ms-auto">Python</a>
            </ul>
            <ul className="navbar-nav">
                <a href="/dev-notes/docker" className="nav-link ms-auto">Docker</a>
            </ul>
            <ul className="navbar-nav">
                <a href="/dev-notes/venv" className="nav-link ms-auto">Entorno Virtual</a>
            </ul>
        </div>
    </div>
</nav>

  );
};

export default Menu;

