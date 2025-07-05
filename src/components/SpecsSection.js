import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpecsContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: 1px;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SpecCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.15);
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

const SpecIcon = styled.div`
  font-size: 3rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const SpecTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const SpecDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SpecItem = styled.li`
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    color: #ffffff;
    font-weight: 500;
  }

  span:last-child {
    color: #d4af37;
    font-weight: 600;
  }
`;

const FeatureHighlight = styled(motion.div)`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #000;
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const HighlightTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const HighlightDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
  margin: 0;
`;

const SpecsSection = () => {
  const specs = [
    {
      icon: "🔋",
      title: "Battery Life",
      description: "Extended battery performance with intelligent power management",
      specs: [
        { label: "Ring Pro", value: "7 Days" },
        { label: "Necklace Elite", value: "10 Days" },
        { label: "Bracelet Smart", value: "5 Days" },
        { label: "Earrings Tech", value: "12 Hours" }
      ]
    },
    {
      icon: "📡",
      title: "Connectivity",
      description: "Seamless connection with all your devices and platforms",
      specs: [
        { label: "Bluetooth", value: "5.0 LE" },
        { label: "Range", value: "30 meters" },
        { label: "Pairing", value: "Multi-device" },
        { label: "Updates", value: "OTA" }
      ]
    },
    {
      icon: "💧",
      title: "Water Resistance",
      description: "Built to withstand daily activities and adventures",
      specs: [
        { label: "Rating", value: "IPX8" },
        { label: "Depth", value: "50 meters" },
        { label: "Swimming", value: "Yes" },
        { label: "Shower Safe", value: "Yes" }
      ]
    },
    {
      icon: "🏥",
      title: "Health Sensors",
      description: "Advanced biometric monitoring for comprehensive health insights",
      specs: [
        { label: "Heart Rate", value: "24/7" },
        { label: "Blood Oxygen", value: "SpO2" },
        { label: "Sleep Tracking", value: "REM/Deep" },
        { label: "Stress Monitor", value: "HRV" }
      ]
    },
    {
      icon: "🛡️",
      title: "Security",
      description: "Military-grade encryption and privacy protection",
      specs: [
        { label: "Encryption", value: "AES-256" },
        { label: "Authentication", value: "Biometric" },
        { label: "Data Storage", value: "Local" },
        { label: "Privacy", value: "GDPR" }
      ]
    },
    {
      icon: "💎",
      title: "Materials",
      description: "Premium materials crafted for comfort and durability",
      specs: [
        { label: "Frame", value: "Titanium" },
        { label: "Coating", value: "PVD Gold" },
        { label: "Sensor", value: "Sapphire" },
        { label: "Hypoallergenic", value: "Yes" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <SpecsContainer id="specs">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technical Specifications
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SpecsGrid>
          {specs.map((spec, index) => (
            <SpecCard
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <SpecIcon>{spec.icon}</SpecIcon>
              <SpecTitle>{spec.title}</SpecTitle>
              <SpecDescription>{spec.description}</SpecDescription>
              
              <SpecList>
                {spec.specs.map((item, itemIndex) => (
                  <SpecItem key={itemIndex}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </SpecItem>
                ))}
              </SpecList>
            </SpecCard>
          ))}
        </SpecsGrid>
      </motion.div>

      <FeatureHighlight
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <HighlightTitle>Revolutionary Health Monitoring</HighlightTitle>
        <HighlightDescription>
          Our proprietary sensor technology provides medical-grade accuracy in a luxury package. 
          Experience the future of personal health monitoring with style and sophistication.
        </HighlightDescription>
      </FeatureHighlight>
    </SpecsContainer>
  );
};

export default SpecsSection;
