import styled from "styled-components";

export const ExperienceHeaddingContainer = styled.div`
    width: ${props => props.imgWidth}px;
`;

export const ExperienceHeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ExperienceHeadingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;