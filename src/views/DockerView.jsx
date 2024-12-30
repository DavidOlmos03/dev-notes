import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import {ListGroup} from "../components/views/ListGroup";

import {CustomCodeBlock} from "../components/views/CodeBlocks";
import {sectionsCol1, sectionsCol2} from "../utils/dockerData";

const DockerView = () => {
    return (
        <div>
        <TitleSection 
            title="Docker"
            image="/assets/imgs/iconDocker.png"
        />
        <PdfButton 
            image="/assets/imgs/iconPdf.png"
            alt="pdf"
            documentName="docker-cheat-sheet.pdf"
        />
        <div className="codes-block mt-5">
            <div className="row">
                <div className="col">
                    {sectionsCol1.map((section, index) => (
                        <CustomCodeBlock key={index} {...section} />
                    ))}            
                </div>
                <div className="col">
                    {sectionsCol2.map((section, index) => (
                        <CustomCodeBlock key={index} {...section} />
                    ))}
                </div>
            </div>
        </div>
        <h2 className="mt-5"><a href="https://www.udemy.com/course/docker-guia-practica/">Curso de Docker (Fernando Herrera)</a></h2>
        
        <div className="row">
            <div className="col-md-6 pb-5">
            <h6>Correr contenedor con variables de entorno específicas y en puertos específicos (ejemplo)</h6>
            <p>Obs. Para hacer el salto de linea se utiliza ` en Windows y \ en MacOS o Linux</p>
            <CustomCodeBlock 
                title="Ejemplo"
                code={`docker container run
-dp 3306:3306
--name world-db
--env MARIADB_USER=example-user
--env MARIADB_PASSWORD=user-password
--env MARIADB_ROOT_PASSWORD=root-secret-password
--env MARIADB_DATABASE=world-db
--volume world-db:/var/lib/mysql
mariadb:jammy`} 
                language="typescript"
                showLineNumbers={true}
            />
            </div>
        </div>

    </div>
    )
}

export default DockerView;
