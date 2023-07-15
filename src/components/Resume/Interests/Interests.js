import * as React from 'react';
import Title from '../commons/Title/Title';
import { InterestsList, ListItem, InterestsContainer } from './Interests.style';
import interestsIcon from '../../../assets/interests.png'

const Interests = () => {
    const interests = [
        'Reading',
        'Gaming',
        'Drawing'
    ]
    return (
        <InterestsContainer>
            <Title titleIcon={interestsIcon} titleText="Interests" />
            <InterestsList>
                {interests.map(function (interest) {
                    return (
                        <ListItem>{interest}</ListItem>
                    );
                })}
            </InterestsList>
        </InterestsContainer>
    );
}

export default Interests;