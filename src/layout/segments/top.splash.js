import MainBG from "../../assets/img/background.png"
import BackupBG from "../../assets/img/background-backup.png"
import Modal from "../../components/modal";
import {Suspense} from "react";
import {useRef} from "react";

function TopSplash() {
    const modalRef = useRef();
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};

    /**
     * Show the modal and disable scrolling.
     *
     * @param {Event} e - The event that triggered the modal display.
     */
    function showModal(e) {
        let modal = modalRef.current;
        modal.classList.add("modal-show");
        disableScroll();
    }

    /**
     * Hide the modal element.
     *
     * @param {Event} e - The event object.
     */
    function hideModal(e) {
        let modal = document.getElementById("modal");
        modal.classList.remove("modal-show");
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

    return(
        <>
            <Modal
                ModalRef={modalRef}
                hideModal={hideModal}
                
            />
            <section>
                <div className="main-slot">
                    <div className="main-card">
                        <div className="title">
                            {"<KopyTKG/>"}
                        </div>
                        <div className="description">
                            {"Front-end UI/UX developer"} <br/>
                            <span className="subtext"><button className="btn btn-success rounded" onClick={e => showModal(e)}> About me</button></span>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<img src={BackupBG} loading="lazy" className="main-splash backup" alt="backupbg"/>}>
                    <img src={MainBG} loading="lazy" className="main-splash" alt="mainbg"/>
                </Suspense>
            </section> 
        </>
    )
}

export default TopSplash;