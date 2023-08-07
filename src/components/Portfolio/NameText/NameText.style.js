import styled from "styled-components";

export const HeadingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 5px;
    height: ${props => props.imgHeight}px;
`;