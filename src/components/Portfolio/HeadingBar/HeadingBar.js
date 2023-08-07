import React, { useContext } from "react";
import { Heading, HeadingElement, HeadingContainer } from './HeadingBar.style';
import NavigationContext from "../../../Provider/NavigationContext";

const HeadingBar = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const { onClickNavBar } = useContext(NavigationContext);


    const listItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Blogs', 'Resume']
    return (
        <Heading width={width}>
            {listItems.map((ele) => {
                return <HeadingElement href={`#${ele.toLowerCase()}`} onClick={() => onClickNavBar(ele.toLowerCase())}>{ele}</HeadingElement>;
            })}
        </Heading >
    );
}

export default HeadingBar;