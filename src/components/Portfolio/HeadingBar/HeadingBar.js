import React from "react";
import { Heading, HeadingElement, HeadingContainer } from './HeadingBar.style';

const HeadingBar = () => {
    const { innerWidth: width, innerHeight: height } = window;

    const listItems = ['Home', 'About', 'Education', 'Work', 'Experience', 'Resume']
    return (
        <Heading width={width}>
            {listItems.map((ele) => {
                return <HeadingElement>{ele}</HeadingElement>;
            })}
        </Heading>
    );
}

export default HeadingBar;