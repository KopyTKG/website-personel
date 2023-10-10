'use client'
import Modal from "./modal";
import {useRef} from "react";

function TopSplash() {
    const modalRef = useRef();
    /**
     * Show the modal and disable scrolling.
     *
     * @param {Event} e - The event that triggered the modal display.
     */
    function showModal(e: any) {
        let modal: any = modalRef.current;
        modal.classList.add("modal-show");
    }

    /**
     * Hide the modal element.
     *
     * @param {Event} e - The event object.
     */
    function hideModal(e: any) {
        let modal: any = document.getElementById("modal");
        modal.classList.remove("modal-show");
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
                <img src={"/background.png"} className="main-splash" alt="mainbg" loading="lazy" />
            </section> 
        </>
    )
}

export default TopSplash;