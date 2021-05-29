import React from 'react'
import {Container} from '../../globalStyles'
import {FooterContainer, WebsiteContainer,
WebsiteLinks, FooterNav, FooterLogo} from './Footer.elements'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
      <FooterNav>
        <FooterLogo to='/'>
          FastCash
        </FooterLogo>
        <WebsiteContainer>
          <WebsiteLinks href='https://facebook.com' target='_blank' rel='noreferrer noopener'>
            <FaFacebook size={44}/>
          </WebsiteLinks>
          <WebsiteLinks href='https://instagram.com' target='_blank' rel='noreferrer noopener'>
            <FaInstagram size={44}/>
          </WebsiteLinks>
          <WebsiteLinks href='https://twitter.com' target='_blank' rel='noreferrer noopener'>
            <FaTwitter size={44}/>
          </WebsiteLinks>
          <WebsiteLinks href='https://linkedin.com' target='_blank' rel='noreferrer noopener'>
            <FaLinkedin size={44}/>
          </WebsiteLinks>
        </WebsiteContainer>
      </FooterNav>
      </Container>
    </FooterContainer>
  )
}

export default Footer