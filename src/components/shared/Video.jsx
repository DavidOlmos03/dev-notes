const Video = ({ videoUrl, title }) => {
    return (
    <div>
        <div className="card border-0 video-card rounded">
            <div className="card-body p-0">
            <h6 className="card-title text-center py-2">{title}</h6>
            <iframe 
                className="video-frame"
                src={videoUrl}  
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
        </div>
    </div>
    );
}

export default Video;