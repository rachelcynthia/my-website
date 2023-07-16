import React from "react";
import ParticlesBg from 'particles-bg';
import { Home, Container } from './Landing.style';
import ImageWithBorder from "../ImageWithBorder/ImageWithBorder";
import HeadingBar from "../HeadingBar/HeadingBar";
import NameText from "../NameText/NameText";
import ScrollText from "../ScrollText/ScrollText";
import SocialLinks from "../SocialLinks/SocialLinks";

const Landing = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <Home height={height} width={width}>
            <HeadingBar />
            <Container  paddingTop={0.1 * height} width={width}>
                <NameText />
                <ImageWithBorder />
            </Container>
            <ScrollText />
            <ParticlesBg type="circle" num={10} color="#caf095" bg={true} />
        </Home>
    );
}

export default Landing;