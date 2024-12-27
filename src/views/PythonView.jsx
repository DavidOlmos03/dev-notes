import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import { CustomCodeBlock } from "../components/views/CodeBlocks";
import Video from "../components/shared/Video";

const PythonView = () => {
    return (
        <div>
        <TitleSection
          title="Python"
          image="/assets/imgs/iconPython.png"
        />
        <PdfButton
          image="/assets/imgs/iconPdf.png"
          alt="pdf"
          documentName="angular-cheat-sheet.pdf"
        />
        
        {/* start flask-course-youtube -->*/}
      <div id="flask-course-youtube" className="row pb-5">
        <div className="col-12 col-md-6 pb-5">
          <CustomCodeBlock 
            title="Iniciar proyecto en modo debug"
            code="flask --app nameFile --debug run"
            language="typescript"
          /> 
        </div>
        <div className="col-12 col-md-6 pb-5">
          <Video 
            videoUrl="https://www.youtube.com/embed/W-SfC_V7P6o"
            title="Videos en español"
          />
        </div>
      </div>
      { /* end flask-course-youtube */}

     {/** Observations */}
    <hr />
    <div className="row pt-5 pb-5">
        <h2>OBSERVACIONES</h2>
        <p>Atributos pasados por valor o por referencia:</p>
        <ol>
            <li>Por valor se hace una copia.</li>
            <li>Por referencia se pasa la original - lo que sucede dentro de una función a la cual se le pasa un parametro por referencia, altera el parámetro fuera de la función también.</li>
            <CustomCodeBlock
                title=""
                code={`import copy
copia_variable = copy.copy(valoriable_copiar)`}
                language="typescript"
                showLineNumbers={true}
                />

            <p>Obs. El copy funciona para cualquier tipo de dato.</p>
        </ol>
        </div>
        <hr />
        <div className="row pt-5 pb-5">
        <div className="col-md">
            <h6>Documentación oficial de python</h6>
            <p><a href="https://docs.python.org/3.12/tutorial/index.html">Docs</a></p>
        </div>
        <div className="col-md">
            <h6>Ejemplos gitHub de curso en Udemy</h6>
            <p><a href="https://github.com/DavidOlmos03/cursoPythonHectorC">GitHub</a></p>
        </div>
        <div className="col-md">
            <h6>Hektorprofe</h6>
            <p><a href="https://docs.hektorprofe.net/python/entradas-y-salidas/salida-por-pantalla/ ">HektorProfe</a></p>
        </div>
    </div>
      {/** End Observations */}

    </div>
    )
}

export default PythonView;