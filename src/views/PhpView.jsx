import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import {CustomCodeBlock} from "../components/views/CodeBlocks";
import Video from "../components/shared/Video";

const PhpView = () => {
    return (
      <div>
        <TitleSection
          title="Laravel"
          image="/assets/imgs/iconLaravel.png"
        />
        <PdfButton
          image="/assets/imgs/iconPdf.png"
          alt="pdf"
          documentName="angular-cheat-sheet.pdf"
        />

        <div className="row">
          <div className="col-md-6">
            <CustomCodeBlock
              title="Nuevo proyecto"
              code="composer create-project laravel/laravel project_name 10 php artisan serve"
              language="typescript"
            />
            <h6>Obs.</h6>
            <ul>
              <li>la versión es opcional</li>
              <li>Los proyectos se almacenan en: C:\xampp\php\www</li>
              <li>
                php artisan (me retorna todos los comandos que puedo utilizar)
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
        <h1>Conceptos</h1>
        <ul className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="firstCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">Migraciones</label>
          </li>
        </ul>
        <ul  className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="secondCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">Sesiones flash</label>
          </li>
        </ul>
        <ul  className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="thirdCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="thirdCheckboxStretched">Laravel freeze</label>
          </li>
        </ul>
        <ul  className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="fourthCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="fourthCheckboxStretched">Blade</label>
          </li>
        </ul>
        </div>
        <div className="row">
        <ul  className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="fifthCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="fifthCheckboxStretched">Artisan</label>
          </li>
        </ul>
        <ul  className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="sixthCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="sixthCheckboxStretched">Namespace</label>
          </li>
        </ul>
        <ul  className="list-group col-md">
          <li className="list-group-item bg-dark text-light">
            <input type="checkbox" className="form-check-input me-1" value="" id="seventhCheckboxStretched"></input>
            <label className="form-check-label stretched-link" htmlFor="seventhCheckboxStretched">Composer</label>
          </li>
        </ul>
      </div>

      {/**  Basic Course */}
      <div className="row pt-5">
          <div className="d-flex justify-content-start align-items-center mb-4">
            <h2 className="me-3">Curso básico</h2>
            <img src="/assets/imgs/iconYoutube.png" className="img-fluid" alt="iconYoutube" style={{ width: '50px' }} ></img>
          </div>
          <div className="col-12 col-md-6 pb-5">
             <Video 
             videoUrl="https://www.youtube.com/embed/AE5U8zjkU2s" 
             title="Videos en español (23 videos)" />
          </div>
        </div>
    
       {/** End Basic Course */}
      <div id="laravel-concepts" className="pt-5">
      <div className="col-12 col-md-6">
          <h6>OBSERVACIONES</h6>
          <ul>
            <li>Las imágenes solo se pueden trabajar mediante solicitudes POST, con solicitudes como PATCH o PUT no va a funcionar.</li>
          </ul>
        </div>
      </div>
      </div>
    );
}

export default PhpView;