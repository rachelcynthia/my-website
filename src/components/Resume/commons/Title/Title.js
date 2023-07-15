import * as React from 'react';
import { TitleContainer, TitleIcon, TitleText } from './Title.style';

const Title = ({ titleIcon, titleText }) => {
    return (
        <TitleContainer>
            <TitleIcon src={titleIcon} />
            <TitleText>{titleText}</TitleText>
        </TitleContainer>
    );
}

export default Title;