import TitleSection from "../components/views/title";
import PdfButton from "../components/views/pdfButton";
import {CustomCodeBlock, CustomCopyBlock} from "../components/views/codeBlocks";

const sectionsCol1 = [
    {
        code: `ng new path/to/new_project`,
        language: "typescript",
        title: "Crear un nuevo proyecto",
    },
    {
        code: `ng g s path/to/new_service --skip-tests`,
        language: "typescript",
        title: "Crear un servicio",
    },
    {
        code: `ng generate module path/to/new_module`,
        language: "typescript",
        title: "Crear un módulo",
    },
];


const sectionsCol2 = [
    {
        code: `ng g m path/to/new_module --routing`,
        language: "typescript",
        title: "Crear un módulo con rutas",
    },
    {
        code: `ng generate component path/to/new_component`,
        language: "typescript",
        title: "Crear un componente",
    },
    {
        code: `ng g c path/to/new_component --skip-tests`,
        language: "typescript",
        title: "Crear un componente sin espect",
    },
];

const sectionsCol3 = [
    {
        code:  `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`,
        language: "typescript",
        title: "Cambiar la política de ejecución",
    },
    {
        code:  `ng build --output-path docs --base-href=https://example.github.io/project_name/`,
        language: "typescript",
        title: "Github Pages",
    },
    {
        code:  `npm run build`,
        language: "typescript",
        title: "Netlify",
    }

];

function AngularView() {
    return (
        <div className="shadow-lg mx-5 mb-5 px-5 pb-5 rounded-3">
            <TitleSection 
                title="Angular"
                image="/src/assets/imgs/angular.svg"
                documentName="angular-cheat-sheet.pdf"
            />
            <PdfButton 
                image="/src/assets/imgs/iconPdf.png"
            />
            <div className="codes-block">
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
        </div>
    )
}

export default AngularView;


 // Angular


//  deployNetlifyAngular = `npm run build`

