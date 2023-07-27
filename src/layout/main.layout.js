import {Suspense, useEffect, useState, useRef, lazy} from "react";
import DevMod from "../components/float.asset";
import {Github, Discord} from "../assets/@svg/react/solid"
import FallbackCard from "../components/fallback.card";

import MainBG from "../assets/img/background.png"
import BackupBG from "../assets/img/background-backup.png"

const Layout = () => {
    const ProjectList = lazy(()=>import("../components/assets/projects"))
    const [projects, setProjects] = useState([])
    let lazyProjects = [null,null,null];
    const Modal = useRef();
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};

    /**
     * Show the modal and disable scrolling.
     *
     * @param {Event} e - The event that triggered the modal display.
     */
    function showModal(e) {
        let modal = Modal.current;
        modal.classList.add("display");
        disableScroll();
    }

    /**
     * Hide the modal element.
     *
     * @param {Event} e - The event object.
     */
    function hideModal(e) {
        let modal = e.target;
        modal.classList.remove("display");
        enableScroll();
    }
    
    /**
     * Prevents the default behavior of an event.
     *
     * @param {Event} e - The event object.
     * @return {undefined} This function does not return a value.
     */
    function preventDefault(e) {
        e.preventDefault();
    }
      
    /**
     * Prevents the default behavior for specific scroll keys.
     *
     * @param {Event} e - The keyboard event.
     * @return {boolean} Returns false if the default behavior is prevented, otherwise undefined.
     */
    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
        }
    }
      
    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () { supportsPassive = true; } 
        }));
    } catch(e) {}
      
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
      
    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    
    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/KopyTKG/KopyTKG-website/ImageStore/projects.json")
        .then(response => response.json())
        .then(data => setProjects(data.projects))
    }, [])
    
    return(
        <>
            <div className="modal" ref={Modal} onClick={e => hideModal(e)}>
                <div className="card profile">
                    <div className="text">
                        <div className="title">
                        About me.
                        </div>
                        <div className="body">
                        I’m Martin Kopecký, a {new Date().getFullYear() - 2001} year old weirdo from Czech republic, interested in Front-end development.
                        <br/>
                        <br/>
                        I'm a nerd that likes to play video games and build websites.
                        <br/>
                        <br/>
                        I’m interested in UI/UX development and creating smart user interface with awesome and rich experience for the user.
                        </div>
                        <div className="svg-profile">
                            <a href="https://github.com/kopytkg">
                                <Github/>
                            </a>
                            <a href="https://discord.gg/ZtjNUMHm8C">
                                <Discord/>
                            </a>
                        </div>
                    </div>
                    <div className="splash">
                        <div className="mask"/>
                    </div>
                </div>
            </div>
            <section>
                <div className="main-slot">
                    <div className="main-card">
                        <div className="title">
                            {"<KopyTKG/>"}
                        </div>
                        <div className="description">
                            {"Front-end UI/UX developer"} <br/>
                            <span className="subtext"><button className="btn btn-success-outline rounded" onClick={e => showModal(e)}> About me</button></span>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<img src={BackupBG} loading="lazy" className="main-splash backup" alt="backupbg"/>}>
                    <img src={MainBG} loading="lazy" className="main-splash" alt="mainbg"/>
                </Suspense>
            </section> 
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
                            <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success-outline rounded" rel="noreferrer">KopyTKG</a>
                    </span>    
                </div> 
                <div className="copyright">
                    <a>
                    © 
                    </a> &nbsp;
                    {new Date(Date.now()).getFullYear()} thekrew.app
                </div>
            </footer> 
            <DevMod/>
        </>
    );
};

export default Layout;