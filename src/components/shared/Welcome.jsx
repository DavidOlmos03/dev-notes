function Welcome() {
  return (
    <section className="bg-dark text-light p-5 pt-lg-0 text-center text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-center">
                <div className="mx-auto">
                    <h1>Bienvenido a <span className="text-danger">Dev Notes</span></h1>
                    {/* Wellcome to Dev Notes */}
                    <p className="lead my-4">
                      Este sitio web es para compartir mis notas sobre diferentes tecnologías que he aprendido en mi viaje en el desarrollo de software. Es sólo una pequeña sección de mi portafolio.
                    {/*This website is for sharing my notes about different technologies that I have learned on my journey in software development. It is only a small section of my portfolio.*/}
                    </p>
                      <a className="btn btn-primary btn-lg" href="/">
                        Dale un vistazo!!
                      </a>
                </div>
                <img
                    className="img-fluid w-25 d-none d-sm-block"
                    src="/src/assets/imgs/code-notes-logo.png"
                    alt="codeNotesLogo"
                    />

            </div>
        </div>
    </section>
  );
};

export default Welcome;