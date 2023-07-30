import {Suspense, useEffect, useState, lazy} from "react";

import FallbackCard from "../components/fallback.card";
import TopSplash from "./segments/top.splash";



const Layout = () => {
    const ProjectList = lazy(()=>import("../components/assets/projects"))
    const [projects, setProjects] = useState([])
    let lazyProjects = [null,null,null];
    
   


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/KopyTKG/KopyTKG-website/ImageStore/projects.json")
        .then(response => response.json())
        .then(data => setProjects(data.projects))
    }, [])
    
    return(
        <>
            {/* Front page */}
            <TopSplash/>

            <section className="project-section">
                <header>
                    <span className="sub-title">Personal projects</span> <br/>
                    <span className="title">Latest work</span>
                </header>
                <Suspense fallback={
                    <>
                        <div className="project-grid">  
                            {lazyProjects.map((data,index)=> {
                                return(<>
                                    <FallbackCard key={index+550}/>
                                </>)
                            })}
                        </div>
                    </>
                }>
                    <ProjectList projects={projects}/>
                </Suspense>
            </section>
            <footer className="footer grid">
                <div className="fotter">
                    <span>
                        created by 
                            <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success rounded" rel="noreferrer">KopyTKG</a>
                    </span>    
                </div> 
                <div className="copyright">
                    <span>
                    © 
                    </span> &nbsp;
                    {new Date(Date.now()).getFullYear()} thekrew.app
                </div>
            </footer> 
        </>
    );
};

export default Layout;