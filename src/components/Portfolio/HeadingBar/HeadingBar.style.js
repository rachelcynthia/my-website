import styled from "styled-components";

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    float: right;
    font-size: 24px;
    font: italic 1.6em "Fira Sans", serif;
    position: sticky;
    top: 10px;
    border-bottom: 1px solid black;
    padding-left: 20px;
    background-color: black;
    color: white;
    z-index:1
`;

export const HeadingElement = styled.a`
    text-decoration: none;
    margin-right: 30px;
    &:hover {
        text-decoration: none;
    }
    &:click {
        text-decoration: none;
    }
`;

export const HeadingWrapper = styled.div``;