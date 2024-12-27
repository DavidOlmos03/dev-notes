import { useEffect, useState } from "react";

import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import {ListGroupLeft, ListGroupRight} from "../components/views/ListGroup";

import {CustomCodeBlock} from "../components/views/CodeBlocks";
import {sectionsCol2} from "../utils/angularData";
  
import { fetchSectionColData } from "../services/firebase/fireBaseServices";
import { PersonalBarLoader } from "../components/views/Spinners"; 
  
const VueJs = () => {   
   // Estado para almacenar la data obtenida de Firebase
   const [sectionsCol1, setSectionsCol1] = useState([]);
   const [sectionsCol2, setSectionsCol2] = useState([]);

   // Se almacenan en las variables data1 y data2 los datos obtenidos de firebase
   useEffect(( ) => {    
      async function fetchData() {    
      try{    
        const data1 = await fetchSectionColData("vueData", "sectionCol1");
        const data2 = await fetchSectionColData("vueData", "sectionCol2");
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
                title="VueJs"    
                image="/src/assets/imgs/iconVuejs.png"
            />    
            <PdfButton     
                image="/src/assets/imgs/iconPdf.png"
                alt="pdf"    
                documentName="angular-cheat-sheet.pdf"
            />    
            <div className="codes-block mt-5">
               {/* <div className="row">    
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
                </div>*/}
               <div className="container">
          <div className="title-section d-flex justify-content-end pb-5">
          </div>
          <div className="row">
            <div className="col-md-4 pb-5">
              <CustomCodeBlock 
                  title="Nuevo proyecto"
                  code="npm create vite@latest name_project"
              />
            </div>
            <div className="col-md-4 pb-5">
              <CustomCodeBlock 
                  title="FormKit"
                  code="npm i @formkit/vue"
              />
            </div>
            <div className="col-md-4 pb-5">
              <CustomCodeBlock 
                title="Tailwindcss para forms"
                code="npm i -D @tailwindcss/forms"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 pb-5">
              <CustomCodeBlock 
                title="Firebase"
                code="npm install firebase vuefire"
              /> 
            </div>
            <div className="col-md-4 pb-5">
              <CustomCodeBlock 
                title="Nombre único"
                code="npm i uid"
              />
            </div>
          </div>
        </div>
            </div>  
            <h2 className="mt-5"><a href="https://angular.dev/tutorials/learn-angular/1-components-in-angular">Curso de Angular</a></h2>
      {/*<h3>Notas curso</h3>*/}  
        {/*<ListGroupRight />*/}  
        {/*<ListGroupLeft />*/}  
        {/*<ListGroupRight />*/}  
        </div>  
    )  
}  
  
export default VueJs;  
  
