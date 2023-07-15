import * as React from 'react';
import Title from '../commons/Title/Title';
import { BlogsContainer, BlogsLink, BlogsList, BlogTitle, BlogListItem } from './Blogs.style';
import blogIcon from '../../../assets/blog.png';

const Blogs = () => {
    const blogs = [
        {
            title: 'Connecting react frontend to spring boot backend with nginx rate limiting ',
            link: 'https://medium.com/@rachel883omega/connecting-your-react-frontend-to-spring-boot-backend-with-nginx-rate-limiting-f7d1c32ce67f'
        },
        {
            title: 'Circuit Breakers',
            link: 'https://medium.com/@rachel883omega/circuit-breakers-42cf042238c1'
        },
        {
            title: 'Implementing Count Based Circuit Breaker in Java ',
            link: 'https://medium.com/@rachel883omega/implementing-count-based-circuit-breaker-in-java-5bcab82014ae'
        },
        {
            title: 'Implementing Time Based Circuit Breaker in Java',
            link: ''
        }
    ];

    return (
        <BlogsContainer>
            <Title titleIcon={blogIcon} titleText="Blogs" />
            <BlogsList>
                {blogs.map(function (blog) {
                    return (
                        <BlogListItem>
                            <BlogTitle>{blog.title}</BlogTitle>
                            <BlogsLink href={blog.link} target="_blank">Go to Blog</BlogsLink>
                        </BlogListItem>
                    );
                })}
            </BlogsList>
        </BlogsContainer>
    );
}

export default Blogs;