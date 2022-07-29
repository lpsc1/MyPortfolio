import React from "react";
import { Container, TextBox } from "./styles";
import { FiMail } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import {AiOutlineLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

interface SocialCardProps {
  icon: string;
  altIcon: string;
  title: string;
  subTitle: string;
  link: string;
}

export function SocialCard({
  icon,
  altIcon,
  title,
  subTitle,
  link,
}: SocialCardProps) {
  return (
    <Container>
      <a href={link} target={'_blank'}>
      {icon === 'FiMail' ? <FiMail className="img"/> :''}
      {icon === 'SiLinkedin' ? <SiLinkedin  className="img"/> :''}
      {icon === 'GoLocation' ? <GoLocation className="img"/> :''}
      </a>
      <TextBox>
        <h1>{title}</h1>
        <p className="p">{subTitle}</p>
      </TextBox>
    </Container>
  );
}
