import React, { useContext, useEffect, useState } from "react";
import { ExperienceHeaddingContainer, ExperienceHeadingText } from './ExperienceHeading.style';
import { MovingComponent } from 'react-moving-text'
import NavigationContext from "../../../Provider/NavigationContext";

const ExperienceHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [isAnimateStart, setIsAnimateStart] = useState(false);
    const { clicked } = useContext(NavigationContext);

    useEffect(() => {
        if (clicked == 'experience') {
            setIsAnimateStart(true)
        }
        else {
            setIsAnimateStart(false) 
        }
    }, [clicked])
    return (
        <ExperienceHeaddingContainer marginTop={0.15 * height}>
            {isAnimateStart ?
                <MovingComponent
                    type="fadeInFromTop"
                    duration="1500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <ExperienceHeadingText>My Experience</ExperienceHeadingText>
                </MovingComponent>
                :
                <ExperienceHeadingText>My Experience</ExperienceHeadingText>
            }
        </ExperienceHeaddingContainer>
    );
}

export default ExperienceHeading;