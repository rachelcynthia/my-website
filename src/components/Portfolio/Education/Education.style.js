import styled from "styled-components";
import Paper from '@mui/material/Paper';


export const EducationContainer = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    margin-top: 30px;
    align-content: center;
`;

export const EducationContent = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 20%;
    padding: 3% 5%;
    vertical-align: middle;
`;

export const Image = styled.img`
    max-width: 400px;
    object-fit: contain;
`;

export const EducationHeading = styled.div`
    font-family: 'Edu SA Beginner', cursive;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
`;
export const EducationSubHeading = styled.div`
    font-family: 'Edu SA Beginner', cursive;
    font-size: 16px;
    font-weight: 600;
`;

export const PaperContent = styled(Paper)`
    display: flex;
    margin-bottom: 40px;
    padding: 20px;
`;

export const EducationTextContainer = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;