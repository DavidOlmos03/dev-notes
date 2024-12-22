import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import {ListGroupLeft, ListGroupRight} from "../components/views/ListGroup";

import {CustomCodeBlock} from "../components/views/CodeBlocks";
import {sectionsCol1, sectionsCol2} from "../utils/dockerData";

const DockerView = () => {
    return (
        <div>
        <TitleSection 
            title="Docker"
            image="/src/assets/imgs/iconDocker.png"
        />
        <PdfButton 
            image="/src/assets/imgs/iconPdf.png"
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
        <h2 className="mt-5"><a href="https://www.udemy.com/course/docker-guia-practica/">Curso de Docker (Fernando Herrer  a)</a></h2>
        <h3>Notas curso</h3>
        <ListGroupRight 
            
        />
        <ListGroupLeft />
        <ListGroupRight />
    </div>
    )
}

export default DockerView;
