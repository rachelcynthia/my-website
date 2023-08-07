import styled from "styled-components";
import Paper from '@mui/material/Paper';


export const EducationContainer = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background-color: #fffce8;
    align-content: center;
`;

export const EducationContent = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 20%;
    padding: 0 5%;
    vertical-align: middle;
    background-color: #fffce8;
`;

export const Image = styled.img`
    max-width: 400px;
    object-fit: contain;
`;

export const EducationHeading = styled.div``;
export const EducationSubHeading = styled.div``;

export const PaperContent = styled(Paper)`
    display: flex;
    margin-bottom: 40px;
    padding: 20px;
    // justify-content: space-between;
`;

export const EducationTextContainer = styled.div`
    margin-left: 20px;
`;