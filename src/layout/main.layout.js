import React from 'react';
import anime from 'animejs';
import Background from "../components/background";
import Logo from "../components/svg/logo.svg";
import Info from '../components/info.comp';

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
                    <div className="center">
                        <div className="title">
                            <Logo />
                        </div>
                    </div>
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
                                <center>
                                <div className='ping'>
                                    <div className='animation'/>
                                </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                <Background />
            </>

        );
    }
};

export default Layout;