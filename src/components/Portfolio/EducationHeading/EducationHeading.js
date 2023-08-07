import React from "react";
import { EducationHeaddingContainer, EducationHeadingWrapper, EducationHeadingImage } from './EducationHeading.style';
import EducationHeadingImg from '../../../assets/education-heading.png';

const EducationHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <EducationHeadingWrapper>
            <EducationHeaddingContainer imgWidth={0.25 * width}>
                <EducationHeadingImage src={EducationHeadingImg} />
            </EducationHeaddingContainer>
        </EducationHeadingWrapper>

    );
}

export default EducationHeading;