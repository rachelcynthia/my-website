import styled from "styled-components";
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg'

export const HeaderContainer = styled.div`
    background-color: black;
    padding: 10px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
`;

export const HeaderIconButton = styled.button`
    background-color: black;
    border: none;
`;

export const HeaderIcon = styled(MenuIcon)`
    height: 24px;
    width: 24px;
    margin-right: 12px;
`;

export const HeaderText = styled.div`
    text-align: center;
    color: white;
    font-size: 24px;
    padding-top: 3px;
`;



export const ProfileIcon = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;


