import React, { useEffect, useState } from "react";
import { AboutContainer, AboutContent } from './About.style';
import AboutText from "../AboutText/AboutText";
import AboutHeading from "../AboutHeading/AboutHeading";

const About = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <AboutContainer id="about" >
            <AboutContent id="aboutContent" >
                <AboutHeading />
                <AboutText id="aboutText" />
            </AboutContent>
        </AboutContainer>
    );
}

export default About;