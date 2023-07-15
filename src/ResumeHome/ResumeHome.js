import React from "react";
import {
    Section,
    SectionWrapper
} from './ResumeHome.style'
import PersonalDetails from '../components/Resume/PersonalDetails/PersonalDetails';
import Header from '../components/Resume/Header/Header';
import Skills from '../components/Resume/Skills/Skills';
import Experience from '../components/Resume/Experience/Experience';
import Education from '../components/Resume/Education/Education';
import Blogs from '../components/Resume/Blogs/Blogs';
import Interests from '../components/Resume/Interests/Interests';

const Home = () => {
    return (
        <SectionWrapper>
            <Header />
            <Section>
                <PersonalDetails />
                <Skills />
                <Experience />
                <Education />
                <Blogs />
                <Interests />
            </Section>
        </SectionWrapper>
    );
}

export default Home;