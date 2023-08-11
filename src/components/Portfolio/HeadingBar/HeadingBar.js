import React, { useContext } from "react";
import { Heading, HeadingElement, HeadingWrapper } from './HeadingBar.style';
import NavigationContext from "../../../Provider/NavigationContext";

const HeadingBar = () => {
    const { innerWidth: width } = window;
    const { onClickNavBar } = useContext(NavigationContext);


    const listItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Blogs', 'Contact', 'Resume']
    return (
        <HeadingWrapper>
            <Heading width={width}>
                {listItems.map((ele) => {
                    return <HeadingElement href={`#${ele.toLowerCase()}`} onClick={() => onClickNavBar(ele.toLowerCase())}>{ele}</HeadingElement>;
                })}
            </Heading >
        </HeadingWrapper>

    );
}

export default HeadingBar;