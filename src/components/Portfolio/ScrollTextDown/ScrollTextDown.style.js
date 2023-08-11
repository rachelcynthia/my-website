import styled from "styled-components";

export const ScrollContainer = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: ${props => props.width}px;
`;
export const ScrollIcon = styled.img`
    height: ${props => props.height}px;
    padding-right: 6px;
`;

export const ScrollTextEle = styled.div`
    font: caption;
    font-size: 22px;
    font-family: 'Handjet', cursive;
    color: black;
    &:hover
`;