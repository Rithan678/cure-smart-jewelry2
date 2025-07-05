# Cure Me - Smart Jewelry & Wearable Technology 💎

A modern, luxury React application for smart jewelry and wearable Bluetooth products. Built with React, styled-components, and Framer Motion for smooth animations.

![Cure Me Logo](public/images/cure-logo-navbar.svg)

## 🌟 Features

- **Modern Design**: Clean, elegant interface with gradient backgrounds and glass morphism effects
- **Smart Product Showcase**: Dynamic product grid with real product images and hover effects
- **Interactive Shopping Cart**: Add/remove items with smooth animations and notifications
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Brand Consistency**: Cure logo integration throughout the application
- **Advanced UI Components**: Styled-components for consistent theming

## 🎨 Design Elements

- **Logo**: Custom "Cure Σ" logo with green accent color (#00b894)
- **Color Scheme**: Dark theme with green accents and premium gold highlights
- **Typography**: Playfair Display (serif) for headings, Inter for body text
- **Icons**: Font Awesome icons for enhanced visual appeal
- **Animations**: Smooth scroll, hover effects, and micro-interactions

## �️ Tech Stack

- **Frontend**: React 18
- **Styling**: Styled-components
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **State Management**: React Context API
- **Build Tool**: Create React App

## 📁 Project Structure

```
cure-smart-jewelry/
├── public/
│   ├── index.html              # Main HTML template
│   ├── favicon.svg             # Custom Cure favicon
│   ├── cure-favicon.svg        # Apple touch icon
│   └── images/
│       ├── cure-logo-navbar.svg
│       └── products/           # Product images
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation with logo
│   │   ├── HeroSection.js     # Hero with brand logo
│   │   ├── ProductsSection.js # Product showcase
│   │   ├── SpecsSection.js    # Technology specs
│   │   ├── BrandIdentity.js   # Brand story
│   │   ├── Footer.js          # Footer with logo
│   │   └── FloatingElements.js
│   ├── context/
│   │   └── CartContext.js     # Shopping cart state
│   ├── App.js                 # Main app component
│   └── index.js               # Entry point
├── package.json
└── README.md
```

## � Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cure-smart-jewelry.git
   cd cure-smart-jewelry
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🛍️ Product Features

- **Smart Jewelry Collection**: Rings, necklaces, bracelets with embedded technology
- **Wearable Technology**: Bluetooth connectivity, health monitoring
- **Luxury Design**: Premium materials with smart functionality
- **Fast Charging**: Quick charging solutions for all devices
- **Gift Collections**: Curated sets for special occasions

## 🎯 Key Components

- **Navbar**: Fixed navigation with logo and smooth scrolling
- **Hero Section**: Brand introduction with prominent logo display
- **Products Section**: Interactive product grid with real images
- **Brand Identity**: Company story and values
- **Shopping Cart**: Context-based cart management
- **Responsive Design**: Mobile-first approach

## 🌐 Live Demo

[View Live Demo](https://your-demo-link.com) (Add your deployed link here)

## 📱 Screenshots

*Add screenshots of your application here*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Framer Motion for animations
- React community for excellent documentation

---

**Made with ❤️ for Cure Me Smart Jewelry**

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your browser
2. **Add products**: Click "Add to Cart" on any product
3. **View cart**: Click the cart icon in the top-right corner
4. **Manage cart**: Add/remove items, adjust quantities

## 🛠️ Customization

### Adding New Products
Edit the `products` array in the JavaScript section:

```javascript
{
    id: 7,
    name: "Your Product Name",
    price: 99,
    image: "images/your-product.jpg",
    description: "Your product description",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    badge: "New"
}
```

### Changing Colors
Update the CSS variables in the `<style>` section:

```css
/* Change primary colors */
background: linear-gradient(45deg, #YourColor1, #YourColor2);
```

### Adding More Pages
Create new HTML sections and update the navigation:

```html
<li><a href="#newpage">New Page</a></li>
```

## 📱 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full grid layout with hover effects
- **Tablet**: Responsive grid with touch-friendly buttons
- **Mobile**: Single column layout with optimized spacing

## 🔧 Technical Features

- **Vanilla JavaScript**: No external frameworks required
- **CSS Grid**: Modern layout system for responsive design
- **Intersection Observer**: Scroll-based animations
- **Local Storage**: Cart data persistence (can be added)
- **Progressive Enhancement**: Works without JavaScript

## 🎯 Performance

- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Animations**: Hardware-accelerated transitions
- **SEO Friendly**: Semantic HTML structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For customization or additional features, feel free to modify the code according to your needs. The structure is modular and easy to extend.

---

**Made with ❤️ for Cure Smart Jewelry**
