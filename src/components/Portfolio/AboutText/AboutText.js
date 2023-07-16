import React from "react";
import { AboutTextContainer, IntroText, ResumeButton } from './AboutText.style';

const AboutText = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const intro = "I am an application developer with around 2 years experience in working on a software development lifecycle (SDLC)"
        + "including analysis, design, development, and testing, deployment and documentation. I have worked in an agile environment,"
        + "followed TDD (Test Driven Development) and pair prograaming when developing a mobile app and creating multiple microservices all while providing deliverables at the agreed timeline."
        + "I am very passionate about coding and development."
        + "I am very interested in learning new things and expanding my knowledge base continuosuly which has led me to be highly skilled in multiple frameworks and libraries"
    return (
        <AboutTextContainer>
            <IntroText>
                {intro}
            </IntroText>
            <ResumeButton>Go to Resume</ResumeButton>
        </AboutTextContainer>
    );
}

export default AboutText;