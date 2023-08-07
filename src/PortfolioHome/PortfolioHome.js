import React from "react"
import Landing from "../components/Portfolio/Landing/Landing"
import About from "../components/Portfolio/About/About";
import HeadingBar from "../components/Portfolio/HeadingBar/HeadingBar";
import Education from "../components/Portfolio/Education/Education";
import Experience from "../components/Portfolio/Experience/Experience";
import Skills from "../components/Portfolio/Skills/Skills";
import Blogs from "../components/Portfolio/Blogs/Blogs";

const PortfolioHome = () => {
    return (
        <>
            <HeadingBar />
            <Landing />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Blogs />
        </>
    );
}

export default PortfolioHome