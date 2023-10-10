'use client'
import { Suspense, lazy, useState, useEffect } from "react";
import FallbackCard from "./fallbacks/fallback.card"


export default function Projects(props: any) {
    const ProjectList = lazy(()=>import("./components/projects"))
    const [projects, setProjects] = useState([])
    let lazyProjects = [null,null,null];
    
   


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/KopyTKG/KopyTKG-website/ImageStore/projects.json")
        .then(response => response.json())
        .then(data => setProjects(data.projects))
    }, [])

    return(
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
    ); 
}