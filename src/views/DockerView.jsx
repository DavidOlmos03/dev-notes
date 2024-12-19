import TitleSection from "../components/views/title";
import PdfButton from "../components/views/pdfButton";
import {ListGroupLeft, ListGroupRight} from "../components/views/listGroup";

import {CustomCodeBlock} from "../components/views/codeBlocks";
import {sectionsCol1, sectionsCol2} from "../utils/dockerData";

const DockerView = () => {
    return (
        <div className="shadow-lg mx-5 mb-5 px-5 pb-5 rounded-3">
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
        <h2 className="mt-5"><a href="https://www.udemy.com/course/docker-guia-practica/">Curso de Docker (Fernando Herrera)</a></h2>
        <h3>Notas curso</h3>
        <ListGroupRight 
            
        />
        <ListGroupLeft />
        <ListGroupRight />
    </div>
    )
}

export default DockerView;