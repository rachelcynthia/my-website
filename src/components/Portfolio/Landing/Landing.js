import React, { useState, useEffect } from "react";
import { Home, Container } from './Landing.style';
import ImageWithBorder from "../ImageWithBorder/ImageWithBorder";
import NameText from "../NameText/NameText";

const Landing = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (

        <Home height={height} id="home" >
            <Container width={width} height={height}>
                <NameText />
                <ImageWithBorder />
            </Container>
        </Home>

    );
}

export default Landing;