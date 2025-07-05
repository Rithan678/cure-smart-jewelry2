import React from 'react';
import { motion } from 'framer-motion';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import BrandIdentity from './components/BrandIdentity';
import SpecsSection from './components/SpecsSection';
import ProductsSection from './components/ProductsSection';
import FloatingElements from './components/FloatingElements';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

const theme = {
  colors: {
    primary: '#d4af37',
    primaryLight: '#f4d03f',
    background: '#0a0a0a',
    backgroundLight: '#1a1a1a',
    white: '#ffffff',
    gray: '#888888',
    transparent: 'rgba(255, 255, 255, 0.1)',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Playfair Display', serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1400px',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.white};
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const SparkleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <AppContainer>
          <SparkleContainer id="sparkle-container" />
          <FloatingElements />
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection />
            <ProductShowcase />
            <BrandIdentity />
            <SpecsSection />
            <ProductsSection />
            <Footer />
          </motion.main>
        </AppContainer>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
