const Projects = () => {

    const projCard = "uk-card uk-card-default uk-card-hover uk-card-body uk-margin-auto uk-margin-top uk-width-1-3@m"

    return (
        <div className="uk-text-center uk-section">
            <h1 className="uk-heading-line"><span>Personal Projects</span></h1>
            <div className="uk-section"
                uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay:500"
            >
                <div className="uk-container">
                    <div className="uk-grid uk-margin-left" >
                        <div className={projCard}>
                            <h3 className="uk-card-title uk-link-heading">
                                <a href="https://github.com/renbrent/ISS-Tracker" target="_blank" rel="noopener noreferrer">
                                    ISS Tracker
                                </a>
                            </h3>
                            <p>Utilizes Open Notify Api and GeoPy to help locate the International Space Station.</p>
                        </div>
                        <div className={projCard}>
                            <h3 className="uk-card-title uk-link-heading">
                                <a href="https://github.com/renbrent/PyPRad" target="_blank" rel="noopener noreferrer">
                                    PyPRad
                                </a>
                            </h3>
                            <p>Plays internet radio on a Qt GUI.</p>
                        </div>
                        <div className={projCard}>
                            <h3 className="uk-card-title uk-link-heading">
                                <a href="https://github.com/renbrent/Coursera_Capstone" target="_blank" rel="noopener noreferrer">
                                    Car Accident Severity Prediction
                                </a>
                            </h3>
                            <p>Using machine learning to predict car accident severity in Seattle based on past accidents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
