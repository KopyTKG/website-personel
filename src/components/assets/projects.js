import Header from "../project.header";
import Macroboard from "./../../assets/img/Macroboard.png"

const ProjectList = (props) => {
    return(
        <>
            <div className="projects">

                <a className="card" target="_blank" href="https://signpost.thekrew.app/" rel="noreferrer">
                    <div className="project-img">
                        <iframe src="https://signpost.thekrew.app/" scrolling="no" style={{zIndex: 0}} disabled className="project-background" title="mainSite"/>
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

                <a className="card" target="_blank" href="https://github.com/KopyTKG/Macroboard/" rel="noreferrer">
                    <div className="project-img">
                        <div style={{zIndex: 0}}  className="project-background">
                        <img src={Macroboard} style={{width: "100%", height: "100%", borderRadius: "1rem"}}/>
                    </div>
                        <div className="project-modal iframe-modal" style={{zIndex: 10}}>
                            <div className="project-number">
                                02
                            </div>
                            <div className="project-name">
                                Numeric Keyboard PCB
                            </div>
                        </div>
                    </div>
                </a>
                <Header
                Title="Numeric Keyboard PCB"
                Update="02.09.2022"
                >
                 Custome build PCB for numerical keyboard. All powered with Arduino Leonardo.
                </Header>
            </div>
        </>
    );
}

export default ProjectList;