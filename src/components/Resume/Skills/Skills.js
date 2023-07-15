import * as React from 'react';
import {
    SkillsContainer,
    SkillsHeadingContainer,
    SkillsIcon,
    SkillsHeaderText,
    SkillsList,
    ListItem

} from './Skills.style'
import skillIcon from '../../../assets/skills.png';
import Title from '../commons/Title/Title';

const Skills = () => {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'ReactJS',
        'SpringBoot',
        'Golang',
        'Angular',
        'NodeJS',
        'React Native',
        'Python',
        'Java',
        'Git',
        'Teamwork',
        'Time Management',
        'TDD',
        'Pair Programming'
    ]

    return (
        <SkillsContainer>
            <Title titleIcon={skillIcon} titleText={"Skills"} />
            <SkillsList dataColumns={2}>
                {skills.map(function (skill) {
                    return <ListItem>{skill}</ListItem>;
                })}
            </SkillsList>
        </SkillsContainer>
    );
}

export default Skills;