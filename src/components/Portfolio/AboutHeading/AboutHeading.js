import React, { useContext, useEffect, useState } from "react";
import { AboutHeaddingContainer, AboutHeadingImage } from './AboutHeading.style';
import { MovingComponent } from 'react-moving-text'
import NavigationContext from "../../../Provider/NavigationContext";
import AboutHeadingImg from '../../../assets/about-heading.png';

const AboutHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [isAnimateStart, setIsAnimateStart] = useState(false);
    const { clicked } = useContext(NavigationContext);

    useEffect(() => {
        if (clicked == 'about') {
            setIsAnimateStart(true)
        }
        else {
            setIsAnimateStart(false) 
        }
    }, [clicked])
    return (
        <AboutHeaddingContainer imgHeight={0.3 * height}>
            {isAnimateStart ?
                <MovingComponent
                    type="fadeInFromTop"
                    duration="1500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <AboutHeadingImage src={AboutHeadingImg}/>
                </MovingComponent>
                :
                <AboutHeadingImage src={AboutHeadingImg}/>
            }
        </AboutHeaddingContainer>
    );
}

export default AboutHeading;