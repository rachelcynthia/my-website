import React, { useContext } from "react";
import { ScrollContainer, ScrollIcon, ScrollTextEle } from './ScrollTextDown.style';
import mouseCursor from '../../../assets/down.png'
import NavigationContext from "../../../Provider/NavigationContext";

const ScrollTextDown = () => {
    const { innerHeight: height, innerWidth: width } = window;
    const { onClickNavBar } = useContext(NavigationContext)

    return (
        <ScrollContainer width={width} href="#about" onClick={() => onClickNavBar("about")}>
            <ScrollIcon src={mouseCursor} height={0.03 * height} />
            <ScrollTextEle>Scroll down</ScrollTextEle>
        </ScrollContainer>
    );
}

export default ScrollTextDown;