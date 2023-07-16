import styled from "styled-components";

export const Home = styled.div`
    background-color: transparent;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: ${props => props.width}px;
    padding-top: ${props => props.paddingTop}px;
    justify-content: center;
    align-items: center;
`;