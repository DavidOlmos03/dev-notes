import TitleSection from "../components/views/Title";
import {CustomCodeBlock} from "../components/views/CodeBlocks";
import {sectionsCol1, sectionsCol2, sectionsCol3} from "../utils/venvData";

import "../styles/VenvView.css"

const VenvView = () => {
    return (
        <div>
            <TitleSection 
            title="Virtual Environments"
            image="/assets/imgs/iconSimulation.png"
        />
            <div className="d-flex content-justify-start">
                <h2>Python</h2>
                <img src="assets/imgs/iconPython.png" alt="" className="img-fluid" style={{width: '60px'}} />
            </div>

            <p>Se utilizara el nombre venv para el entorno virtual y se creara en la hubicación donde me encuentro en la consola</p>

            <div className="codes-block mt-5">
                <div className="row">
                    <div className="col">
                        <h3>
                            Linux
                        </h3>
                        {sectionsCol1.map((section, index) => (
                            <CustomCodeBlock key={index} {...section} />
                        ))}            
                    </div>
                    <div className="col">
                        <h3>
                            Windows
                        </h3>
                        {sectionsCol2.map((section, index) => (
                            <CustomCodeBlock key={index} {...section} />
                        ))}
                    </div>
                </div>
            </div>

           
            <div className="codes-block mt-5">
                <div className="row">
                    <div className="col">
                        <h3>Others command</h3>
                        {sectionsCol3.map((section, index) => (
                            <CustomCodeBlock key={index} {...section} />
                        ))}            
                    </div>
                    <div className="col d-md-flex justify-content-center align-items-center m-auto d-none d-sm-block">
                        <img 
                            src="/public/assets/imgs/linuxWindows.avif" 
                            alt="linux-windows" 
                            className="img-fluid" 
                            id="linux-windows"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VenvView;