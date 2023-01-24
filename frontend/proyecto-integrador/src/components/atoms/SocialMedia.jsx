import React from 'react';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconLinkedin from '../../assets/icon-linkedin.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconInstagram from '../../assets/icon-ig.svg';
import {SocialMediaStyle, IconStyle} from '../../styles/atoms/SocialMediaStyle'

function SocialMedia() {

  return (
    <SocialMediaStyle>
        <IconStyle src={ iconFacebook } alt={"icon-facebook"}/>
        <IconStyle src={ iconLinkedin } alt={"icon-linkedin"}/>
        <IconStyle src={ iconTwitter } alt={"icon-twitter"}/>
        <IconStyle src={ iconInstagram } alt={"icon-instagram"}/>
    </SocialMediaStyle>
  )
}

export default SocialMedia