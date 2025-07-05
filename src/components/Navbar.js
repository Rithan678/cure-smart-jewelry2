import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 1.5rem 3rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  img {
    height: 50px;
    width: auto;
    transition: all 0.3s ease;
    filter: brightness(1);
    margin: 0;
    padding: 0;
  }

  &:hover img {
    filter: brightness(1.1) drop-shadow(0 0 15px rgba(0, 184, 148, 0.6));
    transform: scale(1.05);
  }

  &:hover {
    background: rgba(0, 184, 148, 0.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #00b894;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #00b894, #00cec9);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;

  &:hover {
    color: #00b894;
    background: rgba(0, 184, 148, 0.1);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #00b894;
  color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  animation: ${props => props.bounce ? 'bounce 0.5s ease' : 'none'};

  @keyframes bounce {
    0%, 20%, 60%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(-5px);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent>
        <Logo onClick={() => scrollToSection('hero')}>
          <img src="/images/cure-logo-navbar.svg" alt="Cure Logo" />
        </Logo>
        
        <NavLinks>
          <li><NavLink onClick={() => scrollToSection('jewelry')}>Smart Jewelry</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('products')}>Wearables</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('specs')}>Technology</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('about')}>About</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('products')}>Shop</NavLink></li>
        </NavLinks>

        <NavIcons>
          <IconButton>
            <i className="fas fa-search"></i>
          </IconButton>
          <IconButton>
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && <CartCount bounce={cartBounce}>{cartCount}</CartCount>}
          </IconButton>
          <IconButton>
            <i className="fas fa-user"></i>
          </IconButton>
          <MobileMenuButton>
            <i className="fas fa-bars"></i>
          </MobileMenuButton>
        </NavIcons>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
