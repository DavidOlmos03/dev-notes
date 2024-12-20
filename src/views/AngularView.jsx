import React, { useEffect, useState } from "react";

import TitleSection from "../components/views/title";
import PdfButton from "../components/views/pdfButton";
import {ListGroupLeft, ListGroupRight} from "../components/views/listGroup";

import {CustomCodeBlock} from "../components/views/codeBlocks";
import {sectionsCol2} from "../utils/angularData";

import { fetchSectionCol1Data } from "../utils/angularDataFireBase";


function AngularView() { 
   // Estado para almacenar la data obtenida de Firebase
   const [sectionsCol1, setSectionsCol1] = useState([]);

   useEffect(( ) => {
      async function fetchData() {
      try{
       const data = await fetchSectionCol1Data();
        setSectionsCol1(data);
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
                        <p>Cargando datos...</p>
                        )}            
                    </div>
                    <div className="col">
                        {sectionsCol2.map((section, index) => (
                            <CustomCodeBlock key={index} {...section} />
                        ))}
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

