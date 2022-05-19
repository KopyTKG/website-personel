import { useState, useEffect, useRef } from "react";
import Background from "../components/background";
import Logo from "../components/svg/logo.svg";
import Parallax from '../middleware/parallax';
import SnakeImg from "./../assets/img/SnakeLogo2.png"

const Layout = (props) => {
    const Modal = useRef();
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};

    const showModal = e => {
        let modal = Modal.current;
        modal.classList.add("display");
        disableScroll();
    }

    const hideModal = e => {
        let modal = Modal.current;
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
            <section>
                

            </section>
            
            <footer className="footer grid gap-1rem">
                <div className="grid-col-span-3">
                    <span className="fotter">
                        created by <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success-outline rounded">{"<KopyTKG/>"} </a>            
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
                        © 2022 definitelynotawebsite.website
                    </span>
                </div>
            </footer> 
        </>
    );
};

export default Layout;