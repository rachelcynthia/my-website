import React from "react";
import ContactHeading from "../ContactHeading/ContactHeading";
import { ContactContainer, ContactWrapper, ContactContent, ContactText, ButtonWrapper, ContactButtons, ContactInfoContainer } from "./Contact.style";
import linkedIn from '../../../assets/linkedin.svg'
import envelope from '../../../assets/envelope-solid.svg'
import gitIcon from '../../../assets/git-logo.svg';
import medium from '../../../assets/medium.png';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
    // const contactInfo = [
    //     { icon: phone, desc: '+91 98402 36343' },
    //     { icon: email, desc: 'rachel883omega@gmail.com' },
    //     { icon: location, desc: 'Chennai, Tamil Nadu - 600125' }
    // ]
    // const contactButtons = [
    //     { icon: envelope, link: '' },
    //     { icon: linkedIn, link: 'www.linkedin.com/in/rachel-cynthia' }
    // ]

    const contactInfo = [
        { icon: faPhone, desc: '+91 98402 36343' },
        { icon: faEnvelope, desc: 'rachel883omega@gmail.com' },
        { icon: faMapLocationDot, desc: 'Chennai, Tamil Nadu - 600125' }
    ]
    const contactButtons = [
        { icon: envelope, link: 'mailto:rachel883omega@gmail.com' },
        { icon: linkedIn, link: 'https://www.linkedin.com/in/rachel-cynthia' },
        { icon: gitIcon, link: 'https://github.com/rachelcynthia' },
        { icon: medium, link: 'https://medium.com/@rachel883omega' },
    ]

    const onCLickContact = (link) => {
        window.open(link)
    }
    return (
        <ContactWrapper id='#contact'>
            <ContactContainer>
                <hr/>
                <ContactContent>
                    <ContactHeading />
                    {contactInfo.map((contact) => {
                        return (
                            <ContactInfoContainer>
                                <FontAwesomeIcon icon={contact.icon} style={{ color: '#cf9f76' }} fontSize={25} />
                                <ContactText>{contact.desc}</ContactText>
                            </ContactInfoContainer>
                        );
                    })}
                    <ContactButtons>
                        {contactButtons.map((button) => {
                            return (
                                <ButtonWrapper onClick={() => onCLickContact(button.link)}>
                                    <img src={button.icon} width={25} height={25}/>
                                </ButtonWrapper>
                            );
                        })}
                    </ContactButtons>
                </ContactContent>
                <hr />
            </ContactContainer>
        </ContactWrapper>
    );
}

export default Contact;