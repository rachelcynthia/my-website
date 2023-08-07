import styled from "styled-components";

export const EducationHeaddingContainer = styled.div`
    width: ${props => props.imgWidth}px;
`;

export const EducationHeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const EducationHeadingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;