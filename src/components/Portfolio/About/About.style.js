import styled from "styled-components";

export const AboutContainer = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    align-content: center;
`;

export const AboutContent = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`;