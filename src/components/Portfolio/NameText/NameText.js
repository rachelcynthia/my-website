import React from "react";
import { HeadingImage, NameContainer } from './NameText.style';
import SocialLinks from "../SocialLinks/SocialLinks";
import LandingText from '../../../assets/landing-text.png'

const NameText = () => {
    const { innerHeight: height, innerWidth: width } = window;

    return (
        <NameContainer imgHeight={0.5 * height} >
            <HeadingImage src={LandingText} />
            <SocialLinks />
        </NameContainer>
    );
}

export default NameText;