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
    color: white;
    z-index:1
`;

export const HeadingElement = styled.a`
    text-decoration: none;
    color: white;
    margin-right: 30px;
    padding: 5px 0;
    &:hover {
        text-decoration: none;
        color: white;
    }
    &:click {
        text-decoration: none;
        color: white;
    }
`;

export const HeadingWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background-color: black;
    position: sticky;
    top:0;
    opacity: 0.7;
    z-index: 2;
`;