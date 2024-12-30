import { useEffect, useState } from "react";

import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import { ListGroup } from "../components/views/ListGroup";

import {CustomCodeBlock} from "../components/views/CodeBlocks";
// import {sectionsCol2} from "../utils/angularData";
  
import { fetchSectionColData } from "../services/firebase/fireBaseServices";
import { PersonalBarLoader } from "../components/views/Spinners"; 
import  Card  from "../components/shared/Card";

import { useTranslation } from "react-i18next";

const AngularView = () => {   
   // Estado para almacenar la data obtenida de Firebase
   const [sectionsCol1, setSectionsCol1] = useState([]);
   const [sectionsCol2, setSectionsCol2] = useState([]);

   const { t } = useTranslation('AngularView');

   useEffect(( ) => {    
      async function fetchData() {    
      try{    
        const data1 = await fetchSectionColData("angularData", "sectionCol1");
        const data2 = await fetchSectionColData("angularData", "sectionCol2");
        setSectionsCol1(data1);
        setSectionsCol2(data2)
      } catch (error){         
        console.error("Error fetching data: ", error);
      }    
      }    
      fetchData();    
    }, []);    
    
    return (    
        <div>    
            <TitleSection     
                title="Angular"    
                image="/assets/imgs/angular.svg"
            />    
            <PdfButton     
                image="/assets/imgs/iconPdf.png"
                alt="pdf"    
                documentName="angular-cheat-sheet.pdf"
            />    
            <div className="codes-block mt-5">
                <div className="row">    
                    <div className="col">    
                        {sectionsCol1.length > 0 ? (
                          sectionsCol1.map((section, index) => (
                            <CustomCodeBlock key={index} {...section} />
                        ))  
                        ):(    
                          <PersonalBarLoader />
                        )}              
                    </div>   
                    <div className="col">                          
                        {sectionsCol2.length > 0 ? (
                          sectionsCol2.map((section, index) => (
                            <CustomCodeBlock key={index} {...section} />
                        ))  
                        ):(    
                          <PersonalBarLoader />
                        )}              
                    </div>  
                </div>  
            </div>  
            <h1 className="mt-5"><a href="https://angular.dev/tutorials/learn-angular/1-components-in-angular">{t('angular')}</a></h1>  
        <h2>Topics</h2>
        <div className="row">
          <ListGroup 
            list={t('lists.list1', { returnObjects: true })}
          />  
            <ListGroup 
              list={t('lists.list2', { returnObjects: true })}
            />
            <ListGroup 
              list={t('lists.list3', { returnObjects: true })}
            />
            <ListGroup
              list={t('lists.list4', { returnObjects: true })}
            />
        </div>
    <div id="errores-section" className="row pb-5">
      <h1>Errores</h1>
      <h6>Error de firma</h6>
      <p>ng : No se puede cargar el archivo C:\Users\juand\AppData\Roaming\npm\ng.ps1.
        El archivo C:\Users\juand\AppData\Roaming\npm\ng.ps1 no está firmado
        digitalmente. No se puede ejecutar este script en el sistema actual. Para
        obtener más información acerca de la ejecución de scripts y la configuración
        de la directiva de ejecución, consulta about_Execution_Policies en
        https:/go.microsoft.com/fwlink/?LinkID=135170.
        En línea: 1 Carácter: 1</p>
      <CustomCodeBlock
          title="Solución"
          code="Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass"
          language="typescript"
      />
    </div>
    <div className="row">
      <h1>Deployment</h1>
      <h4>Gratis</h4>
      <div className="col-md-6 pb-5">
        <CustomCodeBlock 
            title="GitHub Pages"
            code="ng build --output-path docs --base-href=https://example.github.io/project_name/"
            language="typescript"
        />
      </div>
      <div className="col-md-6 pb-5">
        <CustomCodeBlock 
          title="Netlify"
          code="npm run build"
          language="typescript"
        />
        <p>Sirve para todo proyecto con <span><b>node</b></span></p>
        <Card 
            image="/assets/imgs/distFile.png"
            title="dist file"
            text="Se crea el archivo dist, este archivo se sube a Netlify"
        />
      </div>
    </div>
      </div>  
    )  
}  
  
export default AngularView;  
  
