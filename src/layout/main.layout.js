import { useState } from "react";
import Background from "../components/background";
import Logo from "../components/svg/logo.svg";
import Balloon from "../components/svg/balloon.svg";
import Parallax from '../middleware/parallax';
import { Col, Container, Row } from 'reactstrap';

const Layout = (props) => {
    const [limit, setLimit] = useState(false);
    const [density, setDensity] = useState(950);

    const Mount = () => {
        let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(vw < 1000) 
        {   
            setDensity(100);
        }
        setLimit(true);
    }
    return(
        <>
        {!limit? Mount(): null}
            <div className="section">
                <Parallax direction="vertical" speed="0.45">
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
                        <div className='top'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fillOpacity="1" d="M0,256L40,245.3C80,235,160,213,240,181.3C320,149,400,107,480,106.7C560,107,640,149,720,176C800,203,880,213,960,208C1040,203,1120,181,1200,165.3C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
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
                                <br />
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
                        </div>
                        <div className='parallax' data-direction="vertical" data-rate="0.1">
                            <center>
                                <span className="fotter">
                                    created by <span className='logo'> {"<KopyTKG/>"} </span>            
                                </span>
                            </center>
                        </div> 
                    </div>
                    
                    <siv className="splitter">
                        <div className='bottom'>
                            <svg viewBox="0 0 1440 320">
                                <path  fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,229.3C672,256,768,288,864,266.7C960,245,1056,171,1152,117.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                            </svg>
                        </div>
                    </siv>
                </div>
            </div>
            <Balloon class="balloon" />
            <Background  density={density}/>
        </>
    );
};

export default Layout;