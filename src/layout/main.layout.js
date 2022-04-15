import React from 'react';
import anime from 'animejs';
import Background from "../components/background";
import Logo from "../components/svg/logo.svg";
import Parallax from '../middleware/parallax';
import { Col, Container, Row } from 'reactstrap';

import {Discord, Instagram, Twitter, Twitch, Facebook} from "../assets/@svg/react/solid/";

class Layout extends React.Component {

    componentDidMount() {
        anime({
            targets: '#logo .path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutCubic',
            duration: 6000,
            delay: function(el, i) { return i * 280 },
            direction: 'alternate',
            loop: true
        });
        
    }
    render(){
        return(
            <>
                <div className="section">
                    <Parallax direction="vertical" speed="0.3">
                        <div className="center">
                            <div className="title">
                                <Logo />
                            </div>
                        </div>
                    </Parallax>
                    <div className='moon'/>
                </div> 
                <div className="section">
                    <div className="parallax" 
                    /*data-direction="vertical" data-rate="0.1"*/
                    >
                        
                        <div className="splitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fillOpacity="1" d="M0,256L40,245.3C80,235,160,213,240,181.3C320,149,400,107,480,106.7C560,107,640,149,720,176C800,203,880,213,960,208C1040,203,1120,181,1200,165.3C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className="main">
                            <div className='parallax' data-direction="vertical" data-rate="0.1">
                                <center>
                                    <div className='logo'> {"<KopyTKG/>"} </div>
                                    
                                </center>
                            </div> 
                            <div className='info'>
                                    <Container>

                                    <Row>

                                        <Col lg="6" className='slot-margin'>
                                            <div className='slot'>
                                                <div className='title'>
                                                        Kdo jsem?
                                                </div>
                                                <div className='description'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, turpis sit amet suscipit ullamcorper, libero leo fermentum erat, interdum viverra nisl dui non nulla. Proin elementum nulla lacus, in suscipit massa fringilla quis. Integer at lorem dictum, luctus nibh quis, pretium tortor. In vestibulum aliquam vestibulum. Nam auctor risus gravida sapien gravida aliquam. Aliquam feugiat eu ligula vitae rhoncus. Praesent in blandit turpis.
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="6" className='slot-margin'>
                                            <center>
                                                <img src={process.env.PUBLIC_URL + '/img/logo.jpeg'} /> 
                                            </center>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" className='slot-margin'>
                                            <Row>
                                                <Col lg="4" xs="4">
                                                    <a href="#">
                                                        <Discord className='svg'/>
                                                    </a>
                                                </Col>
                                                <Col lg="4" xs="4">
                                                    <a href="https://instagram.com/kopy_tkg" target="_blank">
                                                        <Instagram className='svg'/>
                                                    </a>
                                                </Col>
                                                <Col lg="4" xs="4">
                                                    <a href="https://twitter.com/kopy_tkg" target="_blank">
                                                        <Twitter className='svg'/>
                                                    </a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="2" />
                                                <Col xs="4">
                                                    <a href="https://www.twitch.tv/kopytkg" target="_blank">
                                                        <Twitch className='svg'/>
                                                    </a>
                                                </Col>
                                                <Col xs="4">
                                                    <a href='https://www.facebook.com/Kopyy' target="_blank">
                                                        <Facebook className='svg' />
                                                    </a>
                                                </Col>
                                                <Col xs="2" />
                                            </Row>
                                        </Col>
                                        <Col lg="6" className='slot-margin'>
                                            <div className='slot'>
                                                <div className='title'>
                                                    Kde mě najdeš?
                                                </div>
                                                <div className='description'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, turpis sit amet suscipit ullamcorper, libero leo fermentum erat, interdum viverra nisl dui non nulla. Proin elementum nulla lacus, in suscipit massa fringilla quis. Integer at lorem dictum, luctus nibh quis, pretium tortor. In vestibulum aliquam vestibulum. Nam auctor risus gravida sapien gravida aliquam. Aliquam feugiat eu ligula vitae rhoncus. Praesent in blandit turpis.
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    </Container>
                            </div>
                        </div>
                        <siv className="splitter">
                            <svg viewBox="0 0 1440 320">
                                <path  fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,229.3C672,256,768,288,864,266.7C960,245,1056,171,1152,117.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                            </svg>
                        </siv>
                    </div>
                </div>
                <div className='day'></div>
                <Background />
            </>

        );
    }
};

export default Layout;