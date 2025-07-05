import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled(motion.div)`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }

  p, a {
    color: #cccccc;
    line-height: 1.6;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #d4af37;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  img {
    height: 50px;
    width: auto;
    filter: brightness(1);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #d4af37;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #d4af37;
    color: #000;
    transform: translateY(-2px);
  }
`;

const Newsletter = styled.div`
  margin-top: 1rem;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  margin-bottom: 1rem;
  
  &::placeholder {
    color: #aaaaaa;
  }
  
  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const NewsletterButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(45deg, #d4af37, #f4d03f);
  border: none;
  border-radius: 8px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
  margin: 0;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  
  a {
    color: #aaaaaa;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #d4af37;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterLogo>
            <img src="/images/cure-logo-navbar.svg" alt="Cure Logo" />
          </FooterLogo>
          <p>
            Revolutionizing the wearable technology industry by creating 
            luxury smart jewelry that seamlessly blends cutting-edge health monitoring 
            with sophisticated design. Experience the future of personal wellness.
          </p>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        <FooterSection
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3>Products</h3>
          <FooterLinks>
            <FooterLink><a href="#products">Smart Rings</a></FooterLink>
            <FooterLink><a href="#products">Smart Necklaces</a></FooterLink>
            <FooterLink><a href="#products">Smart Bracelets</a></FooterLink>
            <FooterLink><a href="#products">Smart Earrings</a></FooterLink>
            <FooterLink><a href="#products">Accessories</a></FooterLink>
            <FooterLink><a href="#products">Gift Cards</a></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3>Support</h3>
          <FooterLinks>
            <FooterLink><a href="#support">Help Center</a></FooterLink>
            <FooterLink><a href="#support">Size Guide</a></FooterLink>
            <FooterLink><a href="#support">Warranty</a></FooterLink>
            <FooterLink><a href="#support">Returns</a></FooterLink>
            <FooterLink><a href="#support">Shipping Info</a></FooterLink>
            <FooterLink><a href="#support">Contact Us</a></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3>Stay Connected</h3>
          <p>Subscribe to our newsletter for exclusive updates and offers.</p>
          <Newsletter>
            <NewsletterInput 
              type="email" 
              placeholder="Enter your email address"
            />
            <NewsletterButton>Subscribe</NewsletterButton>
          </Newsletter>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © 2024 Cure Smart Jewelry. All rights reserved.
        </Copyright>
        <FooterNav>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </FooterNav>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
