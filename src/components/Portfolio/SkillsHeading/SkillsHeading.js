import React from "react";
import { SkillsHeaddingContainer, SkillsHeadingImage } from './SkillsHeading.style';
import SkillsHeadingImg from '../.../../../../assets/skills-heading.png'

const SkillsHeading = () => {
    const { innerHeight: height } = window;

    return (
        <SkillsHeaddingContainer imgHeight={0.1 * height}>
                    <SkillsHeadingImage src={SkillsHeadingImg} />
        </SkillsHeaddingContainer>
    );
}

export default SkillsHeading;