import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
   FaFacebook,
   FaInstagram,
   FaYoutube,
   FaTwitter,
   FaLinkedin,
} from "react-icons/fa";
import {
   FooterContainer,
   FooterWrap,
   FooterLinksContainer,
   FooterLinksWrapper,
   FooterLinkItems,
   FooterLinkTitle,
   FooterLink,
   SocialMedia,
   SocialMediaWrap,
   SocialLogo,
   WebsiteRights,
   SocialIcons,
   SocialIconLink,
} from "./FooterElements";

const Footer = () => {
   const scrollHome = () => {
      scroll.scrollToTop();
   };

   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>About Us</FooterLinkTitle>
                     <FooterLink to="/">How it works</FooterLink>
                     <FooterLink to="/">Testimonials</FooterLink>
                     <FooterLink to="/">Careers</FooterLink>
                     <FooterLink to="/">Investors</FooterLink>
                     <FooterLink to="/">Terms of Service</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                     <FooterLinkTitle>Network</FooterLinkTitle>
                     <FooterLink to="/">Ambassadors</FooterLink>
                     <FooterLink to="/">Agency</FooterLink>
                     <FooterLink to="/">Influencer</FooterLink>
                     <FooterLink to="/">Events</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>About Us</FooterLinkTitle>
                     <FooterLink to="/">How it works</FooterLink>
                     <FooterLink to="/">Testimonials</FooterLink>
                     <FooterLink to="/">Careers</FooterLink>
                     <FooterLink to="/">Investors</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                     <FooterLinkTitle>Connect With Us</FooterLinkTitle>
                     <FooterLink to="/">Facebook</FooterLink>
                     <FooterLink to="/">Instagram</FooterLink>
                     <FooterLink to="/">Youtube</FooterLink>
                     <FooterLink to="/">Twitter</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to="/" onClick={scrollHome}>
                     Budgeteers
                  </SocialLogo>
                  <WebsiteRights>
                     Budgeteers &copy; | {new Date().getFullYear()} All rights
                     reserved.
                  </WebsiteRights>
                  <SocialIcons>
                     <SocialIconLink
                        href="/"
                        target="_blank"
                        aria-label="Facebook"
                     >
                        <FaFacebook />
                     </SocialIconLink>
                     <SocialIconLink
                        href="/"
                        target="_blank"
                        aria-label="Instagram"
                     >
                        <FaInstagram />
                     </SocialIconLink>
                     <SocialIconLink
                        href="/"
                        target="_blank"
                        aria-label="Youtube"
                     >
                        <FaYoutube />
                     </SocialIconLink>
                     <SocialIconLink
                        href="/"
                        target="_blank"
                        aria-label="Twitter"
                     >
                        <FaTwitter />
                     </SocialIconLink>
                     <SocialIconLink
                        href="/"
                        target="_blank"
                        aria-label="Linkedin"
                     >
                        <FaLinkedin />
                     </SocialIconLink>
                  </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   );
};

export default Footer;
