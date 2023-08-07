import React, { useContext, useEffect, useState } from "react";
import { AboutTextContainer, IntroText, IntroTextContainer, ResumeButton, HorizontalLine, ResumeButtonContainer, ResumeIcon, ResumeIconContainer, ResumeAnotherButtonContainer } from './AboutText.style';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { MovingComponent } from 'react-moving-text';
import NavigationContext from "../../../Provider/NavigationContext";

const AboutText = () => {
    const intro1 = "I am an application developer with nearly 2 years experience in working on a software development lifecycle (SDLC) "
        + "including analysis, design, development, and testing, deployment and documentation."
    const intro2 = "I have worked in an agile environment, followed TDD (Test Driven Development) and pair programming when developing a mobile app and creating multiple microservices"
    const intro3 = "I am very passionate about coding and I find learning new things interesting, this helps me expand my knowledge base continuosuly which has led me to be highly skilled in multiple frameworks and libraries"
    const intros = [intro1, intro2, intro3]
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <AboutTextContainer width={width}>
            <ul>
            {intros.map((intro, index) => {
                    return (
                        <IntroTextContainer>
                            <IntroText>{intro}</IntroText>
                        </IntroTextContainer>
                    );

                })}
            </ul>
            {/* {isAnimateStart ?
                <MovingComponent
                    type="bounce"
                    duration="2000ms"
                    delay="00ms"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <ResumeButtonContainer>
                        <ResumeAnotherButtonContainer>
                            <ResumeButton height={0.04 * height}>
                                <div style={{ verticalAlign: 'middle' }}>
                                    Resume
                                </div>
                            </ResumeButton>
                            <ResumeIconContainer>
                                <ResumeIcon icon={faPaperPlane} />
                            </ResumeIconContainer>
                        </ResumeAnotherButtonContainer>
                    </ResumeButtonContainer>
                </MovingComponent>
                : <ResumeButtonContainer>
                    <ResumeAnotherButtonContainer>
                        <ResumeButton height={0.04 * height}>
                            <div style={{ verticalAlign: 'middle' }}>
                                Resume
                            </div>
                        </ResumeButton>
                        <ResumeIconContainer>
                            <ResumeIcon icon={faPaperPlane} fontSize={0.03 * height} />
                        </ResumeIconContainer>
                    </ResumeAnotherButtonContainer>
                </ResumeButtonContainer>
            } */}

        </AboutTextContainer>
    );
}

export default AboutText;