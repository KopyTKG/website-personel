import Header from "../project.header";
const ProjectList = ({projects}) => {


    return(
        <>
            <div className="projects">
            {
                projects.map((data, Index) => {
                    return(<>
                        <a className="card" target="_blank" href={data.url} rel="noreferrer">
                            <div className="project-img">
                                {data.type == "iframe"? <>
                                        <iframe src={data.src} scrolling="no" loading="lazy" style={{zIndex: 0}} disabled className="project-background" title={data.title}/>
                                        <div className="project-modal iframe-modal" style={{zIndex: 10}}>
                                            <div className="project-number">
                                                {Index+1}
                                            </div>
                                            <div className="project-name">
                                                {data.title}
                                            </div>
                                        </div>
                                    </>
                                :<>
                                        <div style={{zIndex: 0}}  className="project-background">
                                            <img src={data.src} style={{width: "100%", height: "100%", borderRadius: "1rem"}}/>
                                        </div>
                                        <div className="project-modal iframe-modal" style={{zIndex: 10}}>
                                            <div className="project-number">
                                                {Index+1}
                                            </div>
                                            <div className="project-name">
                                                {data.title}
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </a>
                        <Header
                        Title={data.title}
                        Update={data.update}
                        >
                           {data.desc}
                        </Header>
                    </>);
                })
            }
            </div>
        </>
    );
}

export default ProjectList;