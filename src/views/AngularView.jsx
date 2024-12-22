import { useEffect, useState } from "react";

import TitleSection from "../components/views/Title";
import PdfButton from "../components/views/PdfButton";
import {ListGroupLeft, ListGroupRight} from "../components/views/ListGroup";

import {CustomCodeBlock} from "../components/views/CodeBlocks";
import {sectionsCol2} from "../utils/angularData";
  
import { fetchSectionColData } from "../services/firebase/fireBaseServices";
import { PersonalBarLoader } from "../components/views/Spinners"; 
  
const AngularView = () => {   
   // Estado para almacenar la data obtenida de Firebase
   const [sectionsCol1, setSectionsCol1] = useState([]);
   const [sectionsCol2, setSectionsCol2] = useState([]);

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
                image="/src/assets/imgs/angular.svg"
            />    
            <PdfButton     
                image="/src/assets/imgs/iconPdf.png"
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
            <h2 className="mt-5"><a href="https://angular.dev/tutorials/learn-angular/1-components-in-angular">Curso de Angular</a></h2>
            <h3>Notas curso</h3>  
            <ListGroupRight   
                  
            />  
            <ListGroupLeft />  
            <ListGroupRight />  
        </div>  
    )  
}  
  
export default AngularView;  
  
