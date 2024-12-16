function PdfButton({image, alt , documentName }){
    const handleDownload = () => {
        location.href = "assets/docs/" + documentName;
    };

    return (
        <button 
            className="btn btn-primary btn-rounded"
            onClick={handleDownload}
            >
            <spn>
                <img src={ image } alt={ alt } />
            </spn>
            Guía Atajos
        </button>
    )
}

export default PdfButton;