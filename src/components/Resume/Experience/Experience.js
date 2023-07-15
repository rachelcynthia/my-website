import * as React from 'react';
import work from '../../../assets/work.png'
import Title from '../commons/Title/Title';
import {
    ExperienceContainer,
    ExperienceAchievementsHeading,
    ExperienceSubContainer,
    ExperienceSubHeading,
    ExperienceCompany,
    ExperienceRole,
    ExperienceAchievements,
    ExperienceAchievementListItem
} from './Experience.style';

const Experience = () => {
    const experience = [
        {
            company: 'Thoughtworks, India',
            role: 'Application Developer',
            time: 'DEC 2021 - PRESENT',
            achievements: [
                'Responsible for developing a prelogin page on a  mobile banking  app using React Native',
                'Followed TDD practices during development',
                'Worked on integrating content from a CMS',
                'Created a micro service that handles access policy for internal use using golang',
                'Created a generator that can be used for adding access policy for each micro service using javascript',
                'Developed a pre login page for existing customers',
                'Created a micro service for login access details and personalized offers for existing customers using Java, Spring Boot',
                'Used JUnit, Jest and Mockito for testing',
                'Used kafka as a messaging service',
                'Implemented circuit breakers and rate limiting in the micro service',
                'Worked on dockerizing the micro service',
                'Worked with CI/CD Pipelines',
                'Worked in debugging, and maintaining code in a large corporate banking environment'
            ]
        },
        {
            company: 'Thoughtworks, India',
            role: 'Intern',
            time: 'SEP 2021 - DEC 2021',
            achievements: [
                ' Worked with a team of developers to create a project from scratch till deployment',
                'Followed agile practices'
            ]
        }
    ]
    return (
        <ExperienceContainer>
            <Title titleIcon={work} titleText="Work Experience" />
            {experience.map(function (experiencelist) {
                return (
                    <ExperienceSubContainer>
                        <ExperienceSubHeading>
                            <ExperienceCompany>{experiencelist.company}</ExperienceCompany>
                            -
                            <ExperienceRole>{experiencelist.role}</ExperienceRole>
                        </ExperienceSubHeading>
                        <ExperienceAchievementsHeading>Achievements</ExperienceAchievementsHeading>
                        <ExperienceAchievements>
                            {experiencelist.achievements.map(function (achievement) {
                                return (
                                    <ExperienceAchievementListItem>{achievement}</ExperienceAchievementListItem>
                                )
                            })}
                        </ExperienceAchievements>

                    </ExperienceSubContainer>
                );
            })}

        </ExperienceContainer>
    );
}

export default Experience;