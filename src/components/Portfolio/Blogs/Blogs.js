import React from "react";
import { BlogsContainer, BlogsContent, } from './Blogs.style';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import BlogsHeading from "../BlogsHeading/BlogsHeading";
import Blog1 from '../../../assets/blog1.png';
import Blog2 from '../../../assets/blog2.png';
import Blog3 from '../../../assets/blog3.png';
import Blog4 from '../../../assets/blog4.png';

const Blogs = () => {
    const blogs = [
        {
            name: 'Connecting react frontend to spring boot backend with nginx rate limiting',
            img: Blog1,
        },
        {
            name: 'Circuit Breakers ',
            img: Blog2,
        },
        {
            name: 'Implementing Count Based Circuit Breaker in Java ',
            img: Blog3,
        },
        {
            name: 'Implementing Time Based Circuit Breaker In Java',
            img: Blog4,
        }

    ]
    console.log(blogs[0]);

    return (
        <BlogsContainer id="blogs">
            <BlogsHeading />
            <BlogsContent id="BlogsContent" >
                <ImageList>
                    {blogs.map((item) => (
                        <ImageListItem key={item.img} style={{borderColor: "black", borderWidth: 10}}>
                            <img
                            src={item.img} />
                            <ImageListItemBar
                                title={item.name}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.name}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </BlogsContent>
        </BlogsContainer>
    );
}

export default Blogs;