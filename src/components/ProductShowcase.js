import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShowcaseContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  overflow: hidden;
  position: relative;
`;

const ShowcaseTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;

const ShowcaseSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #cccccc;
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ShowcaseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 25px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 80px rgba(212, 175, 55, 0.2);
    border-color: rgba(212, 175, 55, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ShowcaseImage = styled.div`
  height: 350px;
  background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    position: relative;
    z-index: 2;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ShowcaseContent = styled.div`
  padding: 2.5rem;
`;

const ShowcaseItemTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const ShowcaseDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const ShowcaseFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const ShowcaseFeature = styled.li`
  color: #aaaaaa;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✨';
    color: #d4af37;
  }
`;

const FallbackIcon = styled.div`
  font-size: 6rem;
  color: #d4af37;
  z-index: 3;
  position: relative;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
`;

const ProductShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "Cure Smart Ring Collection",
      image: "/images/cure-ring-gold.jpg",
      fallbackIcon: "💍",
      description: "Revolutionary smart ring technology meets luxury craftsmanship. Monitor your health in style with our signature gold-finished ring featuring advanced biometric sensors and seamless connectivity.",
      features: [
        "24/7 Health Monitoring",
        "Premium Gold Finish",
        "Bluetooth 5.0",
        "7-Day Battery Life",
        "Waterproof Design"
      ]
    },
    {
      id: 2,
      title: "Cure Necklace Collection",
      image: "/images/cure-necklace-chain.jpg",
      fallbackIcon: "📿",
      description: "Elegant sterling silver necklace with sophisticated chain design. Perfect fusion of traditional jewelry craftsmanship with modern smart technology for the discerning individual.",
      features: [
        "Sterling Silver Chain",
        "Heart Rate Monitoring",
        "Elegant Design",
        "Wireless Charging",
        "Mobile Integration"
      ]
    },
    {
      id: 3,
      title: "Cure Jewelry Set Collection",
      image: "/images/cure-jewelry-set.jpg",
      fallbackIcon: "✨",
      description: "Complete jewelry collection featuring coordinated pieces with stunning blue gemstone accents. Each piece is meticulously crafted to complement your lifestyle and enhance your natural beauty.",
      features: [
        "Complete Set",
        "Blue Gemstones",
        "Coordinated Design",
        "Premium Materials",
        "Gift Ready"
      ]
    },
    {
      id: 4,
      title: "Cure Wedding Collection",
      image: "/images/cure-wedding-rings.jpg",
      fallbackIcon: "💎",
      description: "Celebrate your most precious moments with our exquisite wedding collection. Each ring features intricate detailing and diamond accents, symbolizing eternal love and commitment.",
      features: [
        "Diamond Accents",
        "Intricate Details",
        "Wedding Rings",
        "Precious Metals",
        "Lifetime Warranty"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ShowcaseContainer>
      <ShowcaseTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Celebrating the Splendor of JEWELTH
      </ShowcaseTitle>

      <ShowcaseSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover our signature collection where each piece tells a story of luxury, innovation, and timeless elegance. 
        Crafted for those who appreciate the finer things in life.
      </ShowcaseSubtitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ShowcaseGrid>
          {showcaseItems.map((item) => (
            <ShowcaseCard
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
            >
              <ShowcaseImage>
                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <FallbackIcon style={{ display: 'none' }}>
                  {item.fallbackIcon}
                </FallbackIcon>
              </ShowcaseImage>

              <ShowcaseContent>
                <ShowcaseItemTitle>{item.title}</ShowcaseItemTitle>
                <ShowcaseDescription>{item.description}</ShowcaseDescription>
                
                <ShowcaseFeatures>
                  {item.features.map((feature, index) => (
                    <ShowcaseFeature key={index}>{feature}</ShowcaseFeature>
                  ))}
                </ShowcaseFeatures>
              </ShowcaseContent>
            </ShowcaseCard>
          ))}
        </ShowcaseGrid>
      </motion.div>
    </ShowcaseContainer>
  );
};

export default ProductShowcase;
