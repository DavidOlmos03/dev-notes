 // Transtalation
import { useTranslation } from "react-i18next"
import "../../styles/PdfButtonStyle.css"

function PdfButton({ image, alt , documentName }){
    
    const { t } = useTranslation('Common');

    const handleDownload = () => {
        location.href = "assets/docs/" + documentName;
    };

    return (
        <button 
            className="button-pdf btn btn-primary btn-rounded"
            onClick={handleDownload}
            >
            <span>
                <img src={ image } alt={ alt } />
            </span>
            {t('shortcuts')}
        </button>
    )
}

export default PdfButton;
