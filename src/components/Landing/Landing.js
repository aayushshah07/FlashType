import React from 'react';
import flash from './../../assets/Flash-PNG-Pic.png';
import './Landing.css';
import Typewriter from 'typewriter-effect';

const Landing = () =>{
    return(
        <div className="landing-container">
            <div  data-aos="fade-right" className="landing-left" >
                <h1 className="landing-header">Can you type.....</h1>
                <div className="typewriter-container">
                    <Typewriter
                    options={{
                        strings: ['Fast ?', 'Quick ?',' Correct ?'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>                
            </div>
            <div className="landing-right" >
                <img className="flash-image"  data-aos="fade-left" src={flash}></img>
            </div>
        </div>
    );
}

export default Landing;