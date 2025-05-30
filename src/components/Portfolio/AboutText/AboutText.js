import React from "react";
import { AboutTextContainer, IntroText, IntroTextContainer } from './AboutText.style';

const AboutText = () => {
    const intro1 = `I am an application developer with nearly 3 years experience in working on a <b>software development lifecycle (SDLC)</b>`
    const intro4 = "I have worked on <b>analysis, design, development</b> and <b>testing, deployment and documentation</b> in software development"
    const intro2 = "I have worked in an agile environment, followed <b>TDD and pair programming</b> when developing a <b>mobile app</b> and creating multiple <b>microservices</b>"
    const intros = [intro1, intro4, intro2]
    const { innerWidth: width } = window;

    return (
        <AboutTextContainer width={width}>
                <IntroTextContainer>
                        <p>
                            Hi🦉 I'm <strong>Rachel Cynthia</strong> Full-stack sorcerer, AI enthusiast, and crochet enthusiast,
                            currently based in the rainy yet lovely city of 
                            <strong> Manchester, UK</strong>.
                            I'm an MSc student in Advanced Computer Science at the University of Manchester, with a background as a full-stack developer at
                            <strong> Thoughtworks</strong>, where I built scalable microservices, preached clean code, and deployed
                            cloud-native magic with Java, Spring, Golang, and a healthy dose of caffeine.
                        </p>

                        <p>
                            By day, I'm diving into machine learning models and cryptographic protocols.
                            I also work part time with the <strong> University Library's Digital Skills Team</strong>,
                            where I get to <em>design content for student workshops, edit videos, plan events, and build web resources</em>
                            that make digital literacy a little more fun and a lot more accessible.
                        </p>

                        <p>When I'm not debugging at 2am or building something weirdly wonderful for a side project (trying to automate unnecessary stuff :P),
                            you'll probably find me:</p>
                        <ul>
                            <li>Volunteering at local parks 🌱 (yes, I plant trees <em>and</em> write algorithms)</li>
                            <li>Crocheting handmade goodies sometimes for charity and sometimes for my <em>(not always)</em> lovely friends🧶</li>
                            <li>Writing blogs about circuit breakers and so much more(Trust me they are cooler than they sound) ⚡</li>
                        </ul>

                        <p>
                            I love blending <strong>tech with storytelling</strong> from designing ML projects that predict the future of food 🌾,
                            to helping others grow their digital confidence. I believe in systems that are secure, scalable, and slightly sarcastic (just like me).
                        </p>

                        <p>If you're into clean code, ethical AI, or want to exchange crochet patterns over coffee, let's connect!</p>


                    {/* <IntroText dangerouslySetInnerHTML={{ __html: intro }} /> */}
                </IntroTextContainer>
        </AboutTextContainer>
    );
}

export default AboutText;