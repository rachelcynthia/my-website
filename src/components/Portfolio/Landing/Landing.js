import React from "react";
import ParticlesBg from 'particles-bg';
import {Home} from './Landing.style';

const Landing = () => {
    return (
        <Home>
            <ParticlesBg type="circle" num={2} color="#caf095"/>
        </Home>
    );
}

export default Landing;