import React, { useContext, useEffect, useState } from "react";
import { BlogsHeaddingContainer, BlogsHeadingText } from './BlogsHeading.style';
import { MovingComponent } from 'react-moving-text'
import NavigationContext from "../../../Provider/NavigationContext";

const BlogsHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [isAnimateStart, setIsAnimateStart] = useState(false);
    const { clicked } = useContext(NavigationContext);

    useEffect(() => {
        if (clicked == 'Blogs') {
            setIsAnimateStart(true)
        }
        else {
            setIsAnimateStart(false) 
        }
    }, [clicked])
    return (
        <BlogsHeaddingContainer marginTop={0.15 * height}>
            {isAnimateStart ?
                <MovingComponent
                    type="fadeInFromTop"
                    duration="1500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <BlogsHeadingText>My Blogs</BlogsHeadingText>
                </MovingComponent>
                :
                <BlogsHeadingText>My Blogs</BlogsHeadingText>
            }
        </BlogsHeaddingContainer>
    );
}

export default BlogsHeading;