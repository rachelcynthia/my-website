import styled from "styled-components";


export const SkillsContainer = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    align-content: center;
`;

export const SkillsContent = styled.div`
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SkillsContentContainer = styled.div`
    width: 100%;
    height: 100%;
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
    margin-top: 5%;
    vertical-align: middle;
`;

export const SkillsImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

export const ImageContainer = styled.div`
    width: ${props => 0.02 * props.width}px;
`;