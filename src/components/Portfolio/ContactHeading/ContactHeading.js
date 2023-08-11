import React from "react";
import { ContactHeadingWrapper, ContactHeaddingContainer, ContactHeadingImage } from "./ContactHeading.style";
import ContactHeadingImg from '../../../assets/contact-heading.png'


const ContactHeading = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <ContactHeadingWrapper>
            <ContactHeaddingContainer imgWidth={0.15 * width}>
                <ContactHeadingImage src={ContactHeadingImg} />
            </ContactHeaddingContainer>
        </ContactHeadingWrapper>
    );
}

export default ContactHeading;