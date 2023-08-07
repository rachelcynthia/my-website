import React from "react";
import { SkillsContainer, SkillsContent, ItemListContainer, ItemText } from './Skills.style';
import { default as SkillsHeadingText } from '../../Portfolio/SkillsHeading/SkillsHeading.js';
import Avatar from '@mui/material/Avatar';
import htmlLogo from '../../../assets/html.webp';
import cssLogo from '../../../assets/css.webp';
import jsLogo from '../../../assets/js.png';
import reactLogo from '../../../assets/react.png';
import springLogo from '../../../assets/spring.png';
import goLogo from '../../../assets/go.png';
import angularLogo from '../../../assets/angular.png';
import nodeLogo from '../../../assets/node.png';
import pythonLogo from '../../../assets/python.png';
import javaLogo from '../../../assets/java.png';
import gitLogo from '../../../assets/git.png';

const Skills = () => {
    const { innerHeight: height, innerWidth: width } = window;

    const itemData = [
        { src: htmlLogo, text: "HTML" },
        { src: cssLogo, text: "CSS" },
        { src: jsLogo, text: "JavaScript" },
        { src: reactLogo, text: "React" },
        { src: springLogo, text: "Spring" },
        { src: goLogo, text: "Golang" },
        { src: angularLogo, text: "Angular" },
        { src: nodeLogo, text: "NodeJS" },
        { src: reactLogo, text: "ReactNative" },
        { src: pythonLogo, text: "Python" },
        { src: javaLogo, text: "Java" },
        { src: gitLogo, text: "Git" }
    ]

    return (
        <SkillsContainer id="skills">
            <SkillsHeadingText />
            <SkillsContent id="SkillsContent" width={width}>
                {itemData.map((item) => {
                    return (
                        <ItemListContainer>
                            <Avatar alt="Remy Sharp" src={item.src} />
                            {/* <img src={item.src} /> */}
                            <ItemText>{item.text}</ItemText>
                        </ItemListContainer>
                    );
                })}
            </SkillsContent>
        </SkillsContainer>
    );
}

export default Skills;