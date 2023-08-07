import React from "react";
import { BlogsHeaddingContainer, BlogsHeadingImage, BlogsHeadingWrapper } from './BlogsHeading.style';
import BlogsHeadingImg from '../../../assets/blogs-heading.png'

const BlogsHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <BlogsHeadingWrapper>
            <BlogsHeaddingContainer imgWidth={0.15 * width}>
                <BlogsHeadingImage src={BlogsHeadingImg} />
            </BlogsHeaddingContainer>
        </BlogsHeadingWrapper>

    );
}

export default BlogsHeading;