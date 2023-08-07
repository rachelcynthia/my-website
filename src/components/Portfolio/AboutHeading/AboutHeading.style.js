import styled from "styled-components";

export const AboutHeaddingContainer = styled.div`
    width: ${props => props.imgWidth}px;
`;

export const AboutHeadingImage = styled.img`
    height: ${props => props.imgHeight}px;
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;