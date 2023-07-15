import * as React from 'react';
import {
    HeaderContainer,
    HeaderIcon,
    HeaderIconButton,
    HeaderText,
    ProfileIcon
} from './Header.style'
import profIcon from '../../../assets/prof.jpeg'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const headerText = "Resume"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderIconButton>
                <HeaderIcon />
            </HeaderIconButton>
            <HeaderText>{headerText}</HeaderText>
            <ProfileIcon src={profIcon}></ProfileIcon>
        </HeaderContainer>
    );
}
export default Header;