import React from "react";
import { HeadingText, SubheadingText, NameContainer } from './NameText.style';
import SocialLinks from "../SocialLinks/SocialLinks";

const NameText = () => {
    const { innerHeight: height } = window;

    return (
        <NameContainer>
            <HeadingText>I'm Rachel Cynthia</HeadingText>
            <SubheadingText>A Developer</SubheadingText>
            <SocialLinks />
        </NameContainer>
    );
}

export default NameText;