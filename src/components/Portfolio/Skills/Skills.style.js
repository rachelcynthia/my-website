import styled from "styled-components";
import Paper from '@mui/material/Paper';


export const SkillsContainer = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background-color: #fffce8;
    align-content: center;
`;

export const SkillsContent = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 20%;
    padding: 0 5%;
    vertical-align: middle;
    background-color: #fffce8;
`;

export const ItemListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ItemText = styled.div``;