import '../../styles/views.css'

function TitleSection({title, image}){
    return (
        <div className="title-section d-flex justify-content-end py-5 px-3">
            <h1 className="text-center flex">{title}</h1>
            <img src={ image } alt="angularIcon" className="img-fluid"/>
        </div>
    )
}

export default TitleSection;