import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductsContainer = styled.section`
  padding: 8rem 2rem;
  background: #ffffff;
  min-height: 100vh;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #2c2c2c;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 1px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProductCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #00b894;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00b894, #00cec9);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ProductImage = styled.div`
  height: 300px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductIcon = styled.div`
  font-size: 4rem;
  color: #d4af37;
  z-index: 2;
  position: relative;
  filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.3));
  display: ${props => props.hasImage ? 'none' : 'block'};
`;

const ProductInfo = styled.div`
  padding: 2rem;
`;

const ProductName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const ProductDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const ProductFeature = styled.li`
  color: #555555;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    color: #00b894;
    font-weight: bold;
  }
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00b894;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(45deg, #00b894, #00cec9);
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 184, 148, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(45deg, #00b894, #00cec9);
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductsSection = () => {
  const { addToCart } = useCart();

  const getProductIcon = (productName) => {
    if (productName.includes('Ring')) return '💍';
    if (productName.includes('Necklace')) return '📿';
    if (productName.includes('Set') || productName.includes('Jewelry')) return '✨';
    if (productName.includes('Wedding')) return '💎';
    if (productName.includes('Charging')) return '⚡';
    if (productName.includes('Gift')) return '🎁';
    return '💎';
  };

  const products = [
    {
      id: 1,
      name: "Cure Me Diamond Wedding Set",
      price: "$1,299 - $4,999",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.10_4585b82c.jpg",
      badge: "Bestseller",
      description: "Exquisite diamond wedding and engagement rings with intricate detailing, celebrating life's precious moments with smart technology.",
      features: [
        "Diamond Accents",
        "Smart Health Monitoring",
        "Intricate Detailing",
        "Precious Metals",
        "Lifetime Warranty"
      ]
    },
    {
      id: 2,
      name: "Cure Me Smart Ring Pro",
      price: "₹55,000 - ₹1,99,000",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.10_265569aa.jpg",
      badge: "Hot",
      description: "Advanced smart ring with transparent design showing internal circuitry, featuring Cure's cutting-edge wearable technology.",
      features: [
        "Transparent Tech Design",
        "24/7 Health Monitoring",
        "Bluetooth 5.0 Connectivity",
        "7-Day Battery Life",
        "Water Resistant"
      ]
    },
    {
      id: 3,
      name: "Cure Me Fast Charging Station",
      price: "₹15,000 - ₹30,000",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.10_bdd57aff.jpg",
      badge: "Essential",
      description: "Premium black charging station for all your Cure devices with fast charging capabilities in just 30 minutes.",
      features: [
        "Fast 30-Minute Charging",
        "Multiple Device Support",
        "Premium Black Finish",
        "LED Status Indicators",
        "Compact Design"
      ]
    },
    {
      id: 4,
      name: "Cure Me Elite Charging Box",
      price: "₹15,000 - ₹30,000",
      image: "images/products/WhatsApp Image 2025-07-03 at 21.16.10_1739afa3.jpg",
      badge: "Limited",
      description: "Luxury white charging station with premium materials and fast charging technology for your complete Cure collection.",
      features: [
        "Luxury White Finish",
        "Fast Charging Technology",
        "Premium Materials",
        "LED Display",
        "Multiple Device Slots"
      ]
    },
    {
      id: 5,
      name: "Cure Me Pendant Necklace",
      price: "₹70,000 - ₹95,000",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.11_fc590f9e.jpg",
      badge: "New",
      description: "Beautiful pendant necklace in luxury packaging, perfect for gifting with smart jewelry technology integrated.",
      features: [
        "Premium Gift Packaging",
        "Smart Pendant Technology",
        "Luxury Presentation Box",
        "Perfect for Gifting",
        "Multiple Chain Options"
      ]
    },
    {
      id: 6,
      name: "Cure Me Collection Ring",
      price: "₹1,50,000 - ₹2,20,000",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.12_6609035e.jpg",
      badge: "Signature",
      description: "Signature Cure ring with the iconic Σ symbol, featuring premium gold finish and advanced biometric sensors.",
      features: [
        "Premium Gold Finish",
        "Advanced Biometrics",
        "Elegant Design",
        "Smart Technology"
      ]
    },
    {
      id: 7,
      name: "Cure MeBlue Gemstone Collection",
      price: "₹95,000 - ₹1,40,000",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.12_774fac3c.jpg",
      badge: "Luxury",
      description: "Complete jewelry set with matching necklaces, earrings, and rings featuring stunning blue gemstones and gold accents.",
      features: [
        "Complete Jewelry Set",
        "Blue Gemstone Accents",
        "Gold Plated Finish",
        "Coordinated Design",
        "Smart Health Features"
      ]
    },
    {
      id: 8,
      name: "Cure Me Luxury Gift Collection",
      price: "₹1,60,000 - ₹2,70,000",
      image: "/images/products/WhatsApp Image 2025-07-03 at 21.16.12_a721a72f.jpg",
      badge: "Gift",
      description: "Beautiful luxury gift sets in premium gold packaging, perfect for special occasions and celebrations.",
      features: [
        "Premium Gold Packaging",
        "Multiple Jewelry Options",
        "Luxury Presentation",
        "Perfect for Gifting",
        "Customizable Sets"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <ProductsContainer id="products">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Smart Jewelry Collection
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              {product.badge && <Badge>{product.badge}</Badge>}
              
              <ProductImage>
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                )}
              </ProductImage>

              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                
                <ProductFeatures>
                  {product.features.map((feature, index) => (
                    <ProductFeature key={index}>{feature}</ProductFeature>
                  ))}
                </ProductFeatures>

                <ProductPrice>{product.price}</ProductPrice>

                <AddToCartButton
                  onClick={() => addToCart(product)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </motion.div>
    </ProductsContainer>
  );
};

export default ProductsSection;
