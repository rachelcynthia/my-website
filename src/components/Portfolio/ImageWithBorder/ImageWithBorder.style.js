import styled from "styled-components";

export const ImageContainer = styled.div`
    width: ${props => props.imgWidth}px;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;