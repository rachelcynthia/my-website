import React from "react";
import { HeadingImage, NameContainer } from './NameText.style';
import SocialLinks from "../SocialLinks/SocialLinks";
import LandingText from '../../../assets/landing-text.png'

const NameText = () => {
    const { innerWidth: width } = window;

    return (
        <NameContainer imgWidth={0.35 * width}>
            <HeadingImage src={LandingText} />
            <SocialLinks />
        </NameContainer>
    );
}

export default NameText;