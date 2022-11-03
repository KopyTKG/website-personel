import {useEffect, useRef } from "react";
import ProjectList from "../components/assets/projects";
import DevMod from "../components/float.asset";
import {Twitter, Github, Discord} from "../assets/@svg/react/solid"
import FallbackCard from "../components/fallback.card";
import Macroboard from "../assets/img/Macroboard.png"
import MainBG from "../assets/img/background.png"
import BackupBG from "../assets/img/background-backup.png"
import Header from "../components/project.header";
import {Twitter, Github, Instagram} from "../assets/@svg/react/solid"

const Layout = () => {
    const Modal = useRef();
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};

    const showModal = e => {
        let modal = Modal.current;
        modal.classList.add("display");
        disableScroll();
    }

    const hideModal = e => {
        let modal = e.target;
        modal.classList.remove("display");
        enableScroll();
    }
    function preventDefault(e) {
        e.preventDefault();
      }
      
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
                        I’m Martin Kopecký, a 21 year old weirdo from Czech republic, interested in Front-end development.
                        <br/>
                        <br/>
                        I'm a nerd that likes to play video games and build websites.
                        <br/>
                        <br/>
                        I’m interested in UI/UX development and creating smart user interface with awesome and rich experience for the user.
                        </div>
                        <div className="svg-profile">
                            <a href="https://twitter.com/kopy_tkg">
                                <Twitter/>
                            </a>
                            <a href="https://github.com/kopytkg">
                                <Github/>
                            </a>
                            <a href="https://www.instagram.com/kopy_tkg/">
                                <Instagram/>
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
                            <span className="subtext">FIND MORE <button className="btn btn-success-outline rounded" onClick={e => showModal(e)}> About me</button></span>
                        </div>
                    </div>
                </div>
                <div className="main-splash"/>
            </section> 
            <section className="project-section">
                <header>
                    <span className="sub-title">Personal projects</span> <br/>
                    <span className="title">Latest work</span>
                </header>
               <ProjectList/>
            </section>
            <div className="splitter">
                <div className="splitter-img" />
                <div className="splitter-blend">
                    <div className="splitter-line"/>
                </div>
            </div>
            <section className="project-section">
                <header>
                    <span className="sub-title">Public projects</span> <br/>
                    <span className="title">Latest work</span>
                </header>
                <div className="project-body">
                    <div className="projects">
                        
                        <a className="card" target="_blank" href="https://project.thekrew.app/" rel="noreferrer">
                            <div className="project-img">
                                <iframe src="https://project.thekrew.app/" scrolling="no" style={{zIndex: 0}} disabled className="project-background" title="mainSite"/>
                                <div className="project-modal iframe-modal" style={{zIndex: 10}}>
                                    <div className="project-number">
                                        01
                                    </div>
                                    <div className="project-name">
                                        The Krew site
                                    </div>
                                </div>
                            </div>
                        </a>
                        <Header
                        Title="The Krew Site"
                        Update="08.07.2022"
                        >
                            The krew website is my side project for our gamer group. All is power by <b>React</b> and <b>SASS</b>. It is still work in progress.
                        </Header>
                    </div>
                </div>
            </section>
            <footer className="footer grid gap-1rem">
                <div className="grid-col-span-3">
                    <span className="fotter">
                        created by <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success-outline rounded" rel="noreferrer">{"<KopyTKG/>"} </a>            
                    </span>
                </div>
                <div className="grid-col-span-3">
                    <div className="grid grid-col-3 gap-2rem ">
                        <div>
                            <a className="btn btn-success-dark" href="https://github.com/kopytkg">Github</a>
                        </div>
                        <div>
                            <a className="btn btn-success-dark" href="https://twitter.com/kopy_tkg">Twitter</a>
                        </div>
                        <div>
                            <a className="btn btn-success-dark" href="https://www.instagram.com/kopy_tkg/">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="grid-col-span-3">
                    <span className="copyright">
                        <a>
                        © 
                        </a> &nbsp;
                        {new Date(Date.now()).getFullYear()} definitelynotawebsite.website
                    </span>
                </div>
            </footer> 
            <DevMod/>

        </>
    );
};

export default Layout;