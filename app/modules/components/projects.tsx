export default function ProjectList (props: any) {
    return(
            <div className="project-grid">
            {
                props.projects.map((data:any, key: any) => {
                    return(<>
                        <a className="card-body" target="_blank" href={data.url} rel="noreferrer" key={key}>
                            <div className="card-head" style={{animationDelay: key*2+"s"}}>
                                {data.type === "iframe"? <>
                                    <iframe src={data.src} className="card-icon" style={{zIndex: -1}} scrolling="no" loading="lazy"  title={data.title}/>    
                                    <div className="card-dummy" />
                                    </>
                                :<>     
                                    <img src={data.src} className="card-icon" alt={data.title}/>
                                    <div className="card-dummy" />
                                </>
                                }
                            </div>
                            <div className="card-title">
                                {(key+1)+")"}&nbsp;&nbsp;{data.title}
                            </div>
                            <div className="card-desc">
                                {data.desc}
                            </div>
                            <div className="card-update">
                                Last update: <span className="card-date">{data.update}</span>
                            </div>
                        </a>
                    </>);
                })
            }
            </div>
    );
}
