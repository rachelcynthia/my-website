import styled from "styled-components";

export const Home = styled.div`
    height: ${props => props.height}px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: ${props => props.width}px;
    // padding-top: ${props => props.paddingTop}px;
    padding-top: ${props => 0.10 * props.height}px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
`;