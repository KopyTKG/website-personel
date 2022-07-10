import Header from "../project.header";
import Signpost from "./../../assets/img/signpost.png"

const ProjectList = (props) => {
    return(
        <>
            <div className="projects">

                <a className="card" target="_blank" href="https://signpost.definitelynotawebsite.website/" rel="noreferrer">
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
                <Header
                Title="Signpost"
                Update="18.04.2022"
                >
                    Signpost is open-source project. It is my atempt to recreate linktree like web application. <b>React</b> was used to create this web application.
                </Header>
            </div>
        </>
    );
}

export default ProjectList;