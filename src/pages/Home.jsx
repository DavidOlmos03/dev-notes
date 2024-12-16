// src/Home.jsx
import '../styles/Home.css'

const Home = () => {
  return (
    <section className="text-light p-5 text-center text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-center">
                <div className="p-5 shadow rounded mx-auto">
                    <h1 className="text-dark">Bienvenido a <span id="title">Dev Notes</span></h1>
                    {/* Wellcome to Dev Notes */}
                    <p className="lead my-4 text-dark">
                      Este sitio web es para compartir mis notas sobre diferentes tecnologías que he aprendido en mi viaje en el desarrollo de software. Es sólo una pequeña sección de mi portafolio.
                    {/*This website is for sharing my notes about different technologies that I have learned on my journey in software development. It is only a small section of my portfolio.*/}
                    </p>
                      <a className="btn btn-primary btn-lg" href="/">
                        Dale un vistazo!!
                      </a>
                </div>
                <div className="image-container">
                <img
                    className="zoom-image img-fluid d-none d-md-block"
                    src="/src/assets/imgs/code-notes-logo.png"
                    alt="codeNotesLogo"
                    />  
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;

