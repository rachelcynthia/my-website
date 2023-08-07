import React from "react";
import { ExperienceHeaddingContainer, ExperienceHeadingImage, ExperienceHeadingWrapper } from './ExperienceHeading.style';
import ExperienceHeadingImg from '../.../../../../assets/experience-heading.png';

const ExperienceHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <ExperienceHeadingWrapper width={width}>
            <ExperienceHeaddingContainer imgWidth={0.25 * width}>
                <ExperienceHeadingImage src={ExperienceHeadingImg} />
            </ExperienceHeaddingContainer>
        </ExperienceHeadingWrapper>

    );
}

export default ExperienceHeading;