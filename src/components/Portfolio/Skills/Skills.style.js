import styled from "styled-components";
import Paper from '@mui/material/Paper';


export const SkillsContainer = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    align-content: center;
`;

export const SkillsContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 3% 5%;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ItemListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    padding: 10px 0px 5px 0px;
    margin-right: 20px;
    margin-bottom: 20px;
    align-items: center;
    background-color: #222222;
    color: white;
    justify-content: center;
    border-radius: 40px;
`;

export const ItemText = styled.div`
    // margin-left: 10%;
    margin-top: 5%;
    // margin-bottom: 5%;
    vertical-align: middle;
`;