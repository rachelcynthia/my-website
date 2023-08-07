import React from "react";
import { Image, ImageContainer } from './ImageWithBorder.style';
import profileImage from '../../../assets/profile-image.png'

const ImageWithBorder = () => {
    const { innerHeight: height, innerWidth: width } = window;

    return (
        <ImageContainer imgHeight={0.7 * height} >
            <Image src={profileImage} />
        </ImageContainer>
    );
}

export default ImageWithBorder;