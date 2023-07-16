import React from "react";
import { ScrollContainer, ScrollIcon, ScrollTextEle } from './ScrollText.style';
import mouseCursor from '../../../assets/down.png'

const ScrollText = () => {
    const { innerHeight: height, innerWidth: width} = window;

    return (
        <ScrollContainer width={width} href="#about">
            <ScrollIcon src={mouseCursor} height={0.03 * height}/>
            <ScrollTextEle>Scroll down</ScrollTextEle>
        </ScrollContainer>
    );
}

export default ScrollText;