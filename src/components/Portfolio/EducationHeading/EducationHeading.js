import React, { useContext, useEffect, useState } from "react";
import { EducationHeaddingContainer, EducationHeadingText } from './EducationHeading.style';
import { MovingComponent } from 'react-moving-text'
import NavigationContext from "../../../Provider/NavigationContext";

const EducationHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [isAnimateStart, setIsAnimateStart] = useState(false);
    const { clicked } = useContext(NavigationContext);

    useEffect(() => {
        if (clicked == 'education') {
            setIsAnimateStart(true)
        }
        else {
            setIsAnimateStart(false) 
        }
    }, [clicked])
    return (
        <EducationHeaddingContainer marginTop={0.15 * height}>
            {isAnimateStart ?
                <MovingComponent
                    type="fadeInFromTop"
                    duration="1500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <EducationHeadingText>My Education</EducationHeadingText>
                </MovingComponent>
                :
                <EducationHeadingText>My Education</EducationHeadingText>
            }
        </EducationHeaddingContainer>
    );
}

export default EducationHeading;