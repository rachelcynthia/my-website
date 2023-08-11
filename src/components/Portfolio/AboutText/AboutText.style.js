import styled from "styled-components";

export const AboutTextContainer = styled.div`
    margin-left: ${props => 0.01 * props.width}px;
    width: 60%;
`;

export const IntroText = styled.div`
    font-family: 'Edu SA Beginner', cursive;
    font-family: 'Kanit', sans-serif;
    font-family: 'REM', sans-serif;
    white-space: pre-wrap;
    color: #222222;
    font-size: 20px;
    font-weight: 300;
`;

export const IntroTextContainer = styled.li`
    margin-bottom: 30px;
`;