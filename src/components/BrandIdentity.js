import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BrandContainer = styled.section`
  padding: 8rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`;

const BrandContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const BrandLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-family: 'Arial', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  gap: 1.5rem;
  
  .cure-text {
    color: #ffffff;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }

  .sigma-symbol {
    color: #00b894;
    font-size: 4.5rem;
    text-shadow: 0 0 30px rgba(0, 184, 148, 0.6);
  }

  .lines {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .line {
    width: 50px;
    height: 5px;
    background: #00b894;
    box-shadow: 0 0 20px rgba(0, 184, 148, 0.6);
  }
  
  img {
    height: clamp(6rem, 12vw, 12rem);
    width: auto;
    filter: brightness(1.1);
    transition: all 0.3s ease;
    
    &:hover {
      filter: brightness(1.2);
      transform: scale(1.05);
    }
  }
`;

const BrandTagline = styled(motion.p)`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: #d4af37;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;

const BrandDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #cccccc;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const BrandValues = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const BrandValue = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  
  .icon {
    font-size: 3rem;
    color: #d4af37;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  
  p {
    color: #aaaaaa;
    line-height: 1.6;
  }
`;

const BrandIdentity = () => {
  const values = [
    {
      icon: "✨",
      title: "Luxury Craftsmanship",
      description: "Each piece is meticulously crafted using the finest materials and traditional techniques passed down through generations."
    },
    {
      icon: "🔬",
      title: "Innovation Technology",
      description: "Cutting-edge smart technology seamlessly integrated into timeless designs for the modern lifestyle."
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Only the highest quality materials including precious metals, gemstones, and advanced components."
    },
    {
      icon: "🌟",
      title: "Exclusive Design",
      description: "Limited edition pieces that reflect individuality and sophistication for the discerning collector."
    }
  ];

  return (
    <BrandContainer>
      <BrandContent>
        <BrandLogo
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="cure-text">Cure</span>
          <span className="sigma-symbol">Σ</span>
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </BrandLogo>

        <BrandTagline
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Celebrating the Splendor of JEWELTH
        </BrandTagline>

        <BrandDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          At Cure, we believe that jewelry is more than decoration—it's a statement of who you are. 
          Our collection represents the perfect harmony between timeless elegance and modern innovation, 
          creating pieces that not only enhance your beauty but also connect you to the digital world 
          in the most sophisticated way possible.
        </BrandDescription>

        <BrandValues>
          {values.map((value, index) => (
            <BrandValue
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </BrandValue>
          ))}
        </BrandValues>
      </BrandContent>
    </BrandContainer>
  );
};

export default BrandIdentity;
