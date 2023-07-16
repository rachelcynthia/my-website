import React from "react";
import { AboutContainer } from './About.style';
import AboutText from "../AboutText/AboutText";

const About = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <AboutContainer id="about">
            <AboutText />
        </AboutContainer>
    );
}

export default About;