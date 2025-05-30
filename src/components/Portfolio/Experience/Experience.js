import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExperienceContainer, ExperienceContent, CompanyName} from './Experience.style';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ExperienceHeading from "../ExperienceHeading/ExperienceHeading";

const Experience = () => {
    const Timelines = [
        {
            name: 'The University of Manchester, UK',
            role: 'Digital Skills Lead - Part-time',
            time: 'DEC 2024 - PRESENT'
        },
        {
            name: 'Thoughtworks, India',
            role: 'Application Developer',
            time: 'DEC 2021 - AUG 2024'
        },
        {
            name: 'Thoughtworks, India',
            role: 'Intern',
            time: 'SEP 2021 - DEC 2021'
        },
        {
            name: 'Kaar Technologies, Chennai',
            role: 'Intern',
            time: 'MAR 2021 - AUG 2021'
        }

    ]

    return (
        <ExperienceContainer id="experience">
            <ExperienceHeading />
            <ExperienceContent id="ExperienceContent" >
                {Timelines.map(exp => {
                    return (
                        <Timeline>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {exp.time}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <FontAwesomeIcon icon={faSuitcase} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <CompanyName>
                                        {exp.name}
                                    </CompanyName>
                                    <Typography>{exp.role}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    );
                })}

            </ExperienceContent>
        </ExperienceContainer>
    );
}

export default Experience;