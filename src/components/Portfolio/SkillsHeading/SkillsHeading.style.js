import styled from "styled-components";

export const SkillsHeaddingContainer = styled.div`
    height: ${props => props.imgHeight}px;
    text-align: center;
    margin-bottom: 30px;
    padding-top: 50px;
`;

export const SkillsHeadingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;