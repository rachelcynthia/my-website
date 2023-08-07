import React, { useContext, useEffect, useState } from "react";
import { SkillsHeaddingContainer, SkillsHeadingText } from './SkillsHeading.style';
import { MovingComponent } from 'react-moving-text'
import NavigationContext from "../../../Provider/NavigationContext";


const SkillsHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [isAnimateStart, setIsAnimateStart] = useState(false);
    const { clicked } = useContext(NavigationContext);

    useEffect(() => {
        if (clicked == 'Skills') {
            setIsAnimateStart(true)
        }
        else {
            setIsAnimateStart(false) 
        }
    }, [clicked])
    return (
        <SkillsHeaddingContainer marginTop={0.15 * height}>
            {isAnimateStart ?
                <MovingComponent
                    type="fadeInFromTop"
                    duration="1500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <SkillsHeadingText>My Skills</SkillsHeadingText>
                </MovingComponent>
                :
                <SkillsHeadingText>My Skills</SkillsHeadingText>
            }
        </SkillsHeaddingContainer>
    );
}

export default SkillsHeading;