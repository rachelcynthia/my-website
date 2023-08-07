import styled from "styled-components";

export const BlogsHeaddingContainer = styled.div`
    width: ${props => props.imgWidth}px;
`;

export const BlogsHeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const BlogsHeadingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;