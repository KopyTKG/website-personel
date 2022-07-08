import Signpost from "./../../assets/img/signpost.png"

const ProjectList = (props) => {
    return(
        <>
            <div className="projects">
                <a className="card" target="_blank" href="https://signpost.definitelynotawebsite.website/">
                    <div className="project-img">
                        <iframe src="https://signpost.definitelynotawebsite.website/" scrolling="no" style={{zIndex: 0}} disabled className="project-background" title="mainSite"/>
                        <div className="project-modal iframe-modal" style={{zIndex: 10}}>
                            <div className="project-number">
                                01
                            </div>
                            <div className="project-name">
                                Signpost
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ProjectList;