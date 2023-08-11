import React from "react";
import { AboutTextContainer, IntroText, IntroTextContainer } from './AboutText.style';

const AboutText = () => {
    const intro1 = `I am an application developer with nearly 2 years experience in working on a <b>software development lifecycle (SDLC)</b>`
    const intro4 = "I have worked on <b>analysis, design, development</b> and <b>testing, deployment and documentation</b> in software development"
    const intro2 = "I have worked in an agile environment, followed <b>TDD and pair programming</b> when developing a <b>mobile app</b> and creating multiple <b>microservices</b>"
    const intros = [intro1, intro4, intro2]
    const { innerWidth: width } = window;

    return (
        <AboutTextContainer width={width}>
            <ul>
                {intros.map((intro) => {
                    return (
                        <IntroTextContainer>
                            <IntroText dangerouslySetInnerHTML={{ __html: intro }} />
                        </IntroTextContainer>
                    );

                })}
            </ul>
        </AboutTextContainer>
    );
}

export default AboutText;