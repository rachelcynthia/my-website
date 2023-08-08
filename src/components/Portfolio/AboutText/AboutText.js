import React, { useContext, useEffect, useState } from "react";
import { AboutTextContainer, IntroText, IntroTextContainer, ResumeButton, HorizontalLine, ResumeButtonContainer, ResumeIcon, ResumeIconContainer, ResumeAnotherButtonContainer } from './AboutText.style';

const AboutText = () => {
    const intro1 = `I am an application developer with nearly 2 years experience in working on a <b>software development lifecycle (SDLC)</b>`
    const intro4 = "I have worked on <b>analysis, design, development</b> and <b>testing, deployment and documentation</b> in software development"
    const intro2 = "I have worked in an agile environment, followed <b>TDD and pair programming</b> when developing a <b>mobile app</b> and creating multiple <b>microservices</b>"
    const intros = [intro1, intro4, intro2]
    const { innerWidth: width, innerHeight: height } = window;

    const setInnerHTML = (intro) => {
        return intro;
    }

    return (
        <AboutTextContainer width={width}>
            <ul>
                {intros.map((intro, index) => {
                    return (
                        <IntroTextContainer>
                            <IntroText dangerouslySetInnerHTML={{ __html: intro }} />
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