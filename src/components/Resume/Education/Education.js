import Title from "../commons/Title/Title";
import { EducationCollegeCity, EducationCollegeDegree, EducationCollegeName, EducationContainer, EducationDate, EducationSubHeaderContainer, EducationSubContainer, EducationList } from "./Education.style";
import educationIcon from '../../../assets/education.png';

const Education = () => {
    const education = [
        {
            college: "St. Joseph’s Institute Of Technology",
            city: "Chennai",
            degree: 'Bachelors of Engineering in  Computer Science',
            date: 'JUNE 2017 - APRIL 2021'
        }
    ]
    return (
        <EducationContainer>
            <Title titleIcon={educationIcon} titleText="Education" />
            <EducationList>
            {education.map(function (edu) {
                return (
                    <EducationSubContainer>
                        <EducationSubHeaderContainer>
                            <EducationCollegeName>{edu.college}, </EducationCollegeName>
                            <EducationCollegeCity>{edu.city} - </EducationCollegeCity>
                            <EducationCollegeDegree>{edu.degree}</EducationCollegeDegree>
                        </EducationSubHeaderContainer>
                        <EducationDate>{edu.date}</EducationDate>
                    </EducationSubContainer>

                );
            })}
            </EducationList>
        </EducationContainer>
    );
}

export default Education;