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
            name: 'Thoughtworks, India',
            img: Blog1,
            desc: 'DEC 2021 - PRESENT'
        },
        {
            name: 'Thoughtworks, India',
            role: Blog2,
            desc: 'SEP 2021 - DEC 2021'
        },
        {
            name: 'Kaar Technologies, Chennai',
            role: Blog3,
            desc: 'MAR 2021 - AUG 2021'
        },
        {
            name: 'Kaar Technologies, Chennai',
            role: Blog4,
            desc: 'MAR 2021 - AUG 2021'
        }

    ]
    console.log(blogs[0]);

    return (
        <BlogsContainer id="blogs">
            <BlogsHeading />
            <BlogsContent id="BlogsContent" >
                <ImageList>
                    {blogs.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                            src={item.img} />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={item.desc}
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