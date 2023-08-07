import React from "react";
import { EducationContainer, EducationContent, Image, EducationHeading, EducationSubHeading, PaperContent, EducationTextContainer } from './Education.style';
import school from '../../../assets/school.jpeg';
import college from '../../../assets/college.jpg';
import { default as EducationHeadingText } from '../../Portfolio/EducationHeading/EducationHeading.js';

const Education = () => {

    return (
        <EducationContainer id="education">
            <EducationHeadingText />
            <EducationContent id="educationContent" >
                <PaperContent elevation={3}>
                    <Image src={college} />
                    <EducationTextContainer>
                        <EducationHeading>
                            St. Joseph's Institute Of Technology, Chennai — <i><div style={{fontWeight: 100}}>Bachelors of Engineering in  Computer Science</div></i>
                        </EducationHeading>
                        <EducationSubHeading>
                            JUNE 2017 - APRIL 2021
                        </EducationSubHeading>
                    </EducationTextContainer>
                </PaperContent>
                <PaperContent elevation={3} >
                    <Image src={school} />
                    <EducationTextContainer>
                        <EducationHeading>
                            Lalaji Memorial Omega International School, Chennai 
                        </EducationHeading>
                        <EducationSubHeading>
                            JUNE 2015 - APRIL 2017
                        </EducationSubHeading>
                    </EducationTextContainer>
                </PaperContent>
            </EducationContent>
        </EducationContainer>
    );
}

export default Education;