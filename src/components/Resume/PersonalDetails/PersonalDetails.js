import React from 'react';
import {
    NameContainer,
    NameText,
    SubtitleText,
    PersonalDetailsContainer,
    DescriptionText,
    MoreDetailsContainer,
    MoreDetailSubIcon,
    MoreDetailSubContainer,
    MoreDetailSubText,
    MoreDetailSubVerticalLine
} from './PersonalDetails.style'
import mail from '../../../assets/mail.png'
import phoneIcon from '../../../assets/phone.png'
import pin from '../../../assets/pin.png'
import git from '../../../assets/git.png'

const PersonalDetails = () => {
    const name = "Rachel Cynthia"
    const title = "Software Developer"
    const desc = "Passionate developer with experience in building applications in the technology and service industry. Highly skilled in multiple frameworks and libraries. Interested in learning new things and expanding my knowledge base"
    const email = "rachel883omega@gmail.com"
    const phone = "9840236343"
    const location = "Chennai, Tamil Nadu"
    const github = "github.com/rachelcynthia"

    return (
        <PersonalDetailsContainer>
            <NameContainer>
                <NameText>{name}</NameText>
                <SubtitleText>{title}</SubtitleText>
            </NameContainer>
            <DescriptionText>{desc}</DescriptionText>
            <MoreDetailsContainer>
                <MoreDetailSubContainer>
                    <MoreDetailSubIcon src={mail} />
                    <MoreDetailSubText>{email}</MoreDetailSubText>
                </MoreDetailSubContainer>
                <MoreDetailSubVerticalLine />
                <MoreDetailSubContainer>
                    <MoreDetailSubIcon src={phoneIcon} />
                    <MoreDetailSubText>{phone}</MoreDetailSubText>
                </MoreDetailSubContainer>
                <MoreDetailSubVerticalLine />
                <MoreDetailSubContainer>
                    <MoreDetailSubIcon src={pin} />
                    <MoreDetailSubText>{location}</MoreDetailSubText>
                </MoreDetailSubContainer><MoreDetailSubVerticalLine />
                <MoreDetailSubContainer>
                    <MoreDetailSubIcon src={git} />
                    <MoreDetailSubText>{github}</MoreDetailSubText>
                </MoreDetailSubContainer>
            </MoreDetailsContainer>
        </PersonalDetailsContainer>
    );
}

export default PersonalDetails;