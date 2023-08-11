import styled from "styled-components";

export const ContactHeaddingContainer = styled.div`
    width: ${props => props.imgWidth}px;
`;

export const ContactHeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

export const ContactHeadingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;