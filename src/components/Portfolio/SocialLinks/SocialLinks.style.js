import styled from "styled-components";

export const SocialLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: ${props => props.paddingTop}px;
`;

export const SocialLinksEle = styled.img``;

export const SocialLinksEleContainer = styled.div`
    padding: 3px;
    margin: 3px;
    background-color:#F6F197;
    border: 1px solid black;
    border-radius: 25%;
    cursor: pointer;
`;