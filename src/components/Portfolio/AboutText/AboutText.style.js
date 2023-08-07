import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AboutTextContainer = styled.div`
    margin-left: ${props => 0.01 * props.width}px;
    width: 60%;
`;

export const IntroText = styled.div`
    font-family: Georgia, serif;
    font-size: 20px;
    white-space: pre-wrap;
    color: black;
`;

export const IntroTextContainer = styled.li`
    margin-bottom: 20px;
    width: 70%;
`;

export const ResumeIconContainer = styled.div`
    display : flex;
    font-size: 20px;
    align-items : center;
    padding: 0px 10px 0px 10px;

`;

export const ResumeButton = styled.div`
    height: ${props => props.height}px;
    display : flex;
    align-items : center;
    font-size: 22px;
    color: black;
    padding: 10px 0px 10px 10px;
   
`;

export const ResumeButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
    margin-top: 30px;
    cursor: pointer;
`;

export const ResumeIcon = styled(FontAwesomeIcon)`
    font-size: 26px;
    color: #1c4a01;
`;


export const ResumeAnotherButtonContainer = styled.div`
    display: flex;
    border: 1px solid #1c4a01;
    padding: 5px;
    &:hover {
        border: 1px solid #1c4a01;
        border-right: 0;
        background-color: #1c4a01;
        color:#fffce8;
    }
    &:hover ${ResumeButton} {
        color: #fffce8;
    }
    &:hover ${ResumeIcon} {
        color: #fffce8;
    }
`;



export const HorizontalLine = styled.hr`
    width: 70%;
    border-color: black;
    border-style:solid;
`;