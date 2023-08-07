import styled from "styled-components";

export const ImageContainer = styled.div`
    height: ${props => props.imgHeight}px;
    text-align: center;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`