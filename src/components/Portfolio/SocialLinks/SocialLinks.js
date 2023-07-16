import React from "react";
import { SocialLinksContainer, SocialLinksEle, SocialLinksEleContainer } from './SocialLinks.style';
import gitIcon from '../../../assets/git.png';
import medium from '../../../assets/medium.png';
import linkedin from '../../../assets/linkedin.png';

const SocialLinks = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const links = [
        { icon: gitIcon, link: 'https://github.com/rachelcynthia' },
        { icon: medium, link: 'https://medium.com/@rachel883omega' },
        { icon: linkedin, link: 'https://www.linkedin.com/in/rachel-cynthia/' }
    ]

    return (
        <SocialLinksContainer paddingTop={0.02 * height} >
            {links.map((link) => {
                return (
                    <SocialLinksEleContainer>
                        <SocialLinksEle src={link.icon} height={0.05 * height} />
                    </SocialLinksEleContainer>
                );
            })}
        </SocialLinksContainer>
    );
}

export default SocialLinks;