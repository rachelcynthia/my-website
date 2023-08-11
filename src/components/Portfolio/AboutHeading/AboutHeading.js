import React from "react";
import { AboutHeaddingContainer, AboutHeadingImage } from './AboutHeading.style';
import AboutHeadingImg from '../../../assets/about-heading.png';

const AboutHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <AboutHeaddingContainer imgWidth={0.2 * width}>
            <AboutHeadingImage src={AboutHeadingImg} />
        </AboutHeaddingContainer>
    );
}

export default AboutHeading;