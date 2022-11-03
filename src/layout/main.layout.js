import {Suspense, useEffect, useRef, lazy} from "react";
import DevMod from "../components/float.asset";
import {Twitter, Github, Discord} from "../assets/@svg/react/solid"
import FallbackCard from "../components/fallback.card";
import Macroboard from "../assets/img/Macroboard.png"
import MainBG from "../assets/img/background.png"
import BackupBG from "../assets/img/background-backup.png"

const Layout = () => {
    const ProjectList = lazy(()=>import("../components/assets/projects"))

    let projects = [
        {
            url: "https://signpost.thekrew.app/",
            type: "iframe",
            src: "https://signpost.thekrew.app/",
            title: "Signpost",
            desc: "signpost is open-source project. It is my atempt to recreate linktree like web application.React was used to create this web application.",
            update: "18.04.2022"
    },
        {
            url: "https://github.com/KopyTKG/Macroboard/",
            type: "img",
            src: Macroboard,
            title: "Numeric Keyboard PCB",
            desc: "Custome build PCB for numerical keyboard. All powered with Arduino Leonardo.",
            update: "02.09.2022"
    },
        {
            url: "https://project.thekrew.app/",
            type: "iframe",
            src: "https://project.thekrew.app/",
            title: "The Krew site",
            desc: "The krew website is my side project for our gamer group. All is power by React and SASS. It is still work in progress.",
            update: "08.07.2022"
    },
    ]

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
                            <span className="subtext">FIND MORE <button className="btn btn-success-outline rounded" onClick={e => showModal(e)}> About me</button></span>
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
                <Suspense fallback={<>
                    {projects.map((data,index)=> {
                        return(<>
                            <FallbackCard/>
                        </>)
                    })}
                </>
                }>
                    
                    <ProjectList projects={projects}/>
                </Suspense>
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
                            <a className="btn btn-success-dark" href="https://discord.gg/ZtjNUMHm8C">Discord</a>
                        </div>
                    </div>
                </div>
                <div className="grid-col-span-3">
                    <span className="copyright">
                        <a>
                        © 
                        </a> &nbsp;
                        {new Date(Date.now()).getFullYear()} thekrew.app
                    </span>
                </div>
            </footer> 
            <DevMod/>
        </>
    );
};

export default Layout;