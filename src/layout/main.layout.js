import { useState, useEffect } from "react";
import Background from "../components/background";
import Logo from "../components/svg/logo.svg";
import Parallax from '../middleware/parallax';
import MainSplash from "../assets/img/background.png"
import { Col, Container, Row } from 'reactstrap';

import SnakeImg from "./../assets/img/SnakeLogo2.png"

const Layout = (props) => {
    const [density, setDensity] = useState(200);


    useEffect(() => {
        let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(vw < 1000) 
        {   
            setDensity(100);
        }
    }, [density, setDensity])
    
    return(
        <>
            <section>
                <div className="main-mask"/>
                <div className="main-slot">
                    <div className="title">
                        {"<KopyTKG/>"}
                    </div>
                    <div className="description">
                        {"Front-end UI/UX developer"}
                    </div>
                </div>
                <div className="main-splash"/>
            </section> 
            <section>
                <div className="about-splash">
                    About
                </div>
            </section>
            <div className="section">
                    <div className="main">
                        <div className='info'>
                            <Container>
                                <Row>
                                    <Col lg="2"/>
                                    <Col xs="12" lg="4" className='slot-margin'>
                                        <center>
                                            <img className="ico-logo" src={process.env.PUBLIC_URL + '/img/logo.png'} /> 
                                        </center>
                                    </Col>
                                    <Col xs="12" lg="4" className="description">
                                        <span className="title"> Kdo jsem? </span><br/>
                                        {props.settings["description"]}
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col className="redirect">
                                        <center> 
                                            kde mě najdeš? 
                                            &nbsp;
                                            - 
                                            &nbsp;
                                            <a href="https://signpost.definitelynotawebsite.website" className="btn-secondary btn"> 
                                                signpost 
                                            </a>
                                        </center>
                                    </Col>
                                </Row>
                            </Container>
                            <br/>
                            <Row >
                                <Row className="project-section">
                                    <Col xs="0" lg="3" />
                                    <Col xs="6" lg="3" className="project-flex"> 
                                        <a href={process.env.PUBLIC_URL+"/routes/Snake-JS/index.html"} className="project-slot" target="_blank">
                                            {/* <span className="project-box">
                                                <span className="project-name">
                                                     Snake Game
                                                </span> 
                                            </span> */}
                                            <img className="project-icon" src={SnakeImg} />
                                        </a>
                                    </Col>
                                    <Col xs="6" lg="3" className="project-flex">
                                        <div className="project-slot"> 
                                            Slot 
                                        </div>
                                    </Col>
                                    <Col xs="0" lg="3" />
                                </Row>

                            </Row>
                        </div>
                        
                    </div>
            </div>
            <footer className="footer grid gap-1rem">
                            <div className="grid-col-span-3">
                                <span className="fotter">
                                    created by <span className='logo'> {"<KopyTKG/>"} </span>            
                                </span>
                            </div>
                            <div className="grid-col-span-3">
                                <div className="grid grid-col-3 gap-5rem ">
                                    <div>
                                        <a className="link" href="#">Github</a>
                                    </div>
                                    <div>
                                        <a className="link" href="#">Twitter</a>
                                    </div>
                                    <div>
                                        <a className="link" href="#">Instagram</a>
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