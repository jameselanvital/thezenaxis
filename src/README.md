# The Zen Axis - Wellness Website

A modern, responsive website for The Zen Axis wellness practice, built with React and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with perfect scaling across all devices
- **Single Page Application**: Hash-based routing for seamless navigation
- **Health Condition Pages**: Dedicated pages for various health challenges including obesity, diabetes, PCOS, thyroid issues, and more
- **Contact Forms**: Integrated contact and consultation booking
- **Performance Optimized**: Lazy loading, image optimization, and caching
- **SEO Ready**: Proper meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Web server (for local development) or hosting platform

### Local Development

1. **Clone or download the repository**
2. **Serve the files using a local web server**:

   Using Python (if installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   Using Node.js (if installed):
   ```bash
   npx serve .
   ```

   Using PHP (if installed):
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser** and navigate to `http://localhost:8000`

## 📁 Project Structure

```
/
├── index.html              # Main entry point
├── App.tsx                 # React application code
├── styles/
│   └── globals.css         # Global styles and Tailwind configuration
├── components/             # React components
│   ├── Navigation.tsx      # Main navigation
│   ├── HeroSection.tsx     # Homepage hero
│   ├── Footer.tsx          # Site footer
│   ├── conditions/         # Health condition pages
│   ├── ui/                 # Reusable UI components
│   └── figma/              # Figma integration components
├── images/                 # Static image assets
│   ├── heroes/             # Hero section images
│   ├── decorative/         # Design elements
│   ├── profiles/           # Team and testimonial photos
│   ├── icons/              # Custom icons
│   ├── conditions/         # Condition-specific images
│   └── logos/              # Brand assets
├── imports/                # Figma imports and SVG assets
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── site.webmanifest        # PWA manifest
├── sw.js                   # Service worker for caching
└── deployment.md           # Detailed deployment guide
```

## 🎨 Design System

### Typography
- **Font Family**: Lato (Google Fonts)
- **Responsive Scaling**: Fluid typography using clamp()
- **Weight Variations**: 100, 300, 400, 700, 900

### Colors
- **Primary**: #000000 (Black)
- **Background**: #ffffff (White)
- **Accent**: #044F90 (Energy Blue)
- **Text**: Grayscale variations

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🏥 Health Condition Pages

The website includes dedicated pages for:

- **Metabolic Health**: Obesity, Diabetes, Cholesterol
- **Energy & Pain**: Chronic Fatigue, Chronic Pain
- **Autoimmune**: General Autoimmune Conditions
- **Digestive Health**: GERD, IBS, Food Intolerances, Gut Dysbiosis
- **Thyroid Health**: Hypothyroidism, Hashimoto's Disease
- **Skin Health**: Acne, Eczema, Psoriasis
- **Liver Health**: NAFLD (Non-Alcoholic Fatty Liver Disease)
- **Hormonal Health**: PCOS (Polycystic Ovary Syndrome)

Each page includes:
- Condition overview and symptoms
- Treatment approach
- Success stories and testimonials
- Call-to-action for consultations

## 🔧 Customization

### Adding New Pages
1. Create a new component in the appropriate directory
2. Add the route to `App.tsx`
3. Update navigation in `Navigation.tsx`
4. Add to `sitemap.xml`

### Styling Changes
- Modify `styles/globals.css` for global styles
- Use Tailwind utility classes for component-specific styling
- Custom CSS variables are defined in the root section

### Content Updates
- Text content is directly in component files
- Images can be updated in the `/images` directory
- Figma assets are imported using the `figma:asset/` syntax

## 📱 Mobile Optimization

### Features
- Touch-friendly interface with 44px minimum touch targets
- Hamburger menu for mobile navigation
- Optimized image loading and sizing
- Responsive typography and spacing
- Safe area support for devices with notches

### Performance
- Lazy loading for images below the fold
- Service worker for offline caching
- Compressed assets and optimized delivery
- Core Web Vitals optimization

## 🚀 Deployment

### Recommended Platforms
1. **Netlify** - Drag and drop deployment
2. **Vercel** - Git-based deployment
3. **GitHub Pages** - Free hosting for public repos

### Deployment Steps
1. Upload all files to your hosting platform
2. Ensure `index.html` is set as the main page
3. Configure redirects for SPA routing (if needed)
4. Add your custom domain
5. Enable HTTPS

See `deployment.md` for detailed deployment instructions.

## 🔒 Security

### Headers
- XSS protection enabled
- Content type sniffing disabled
- Frame options set to deny
- HTTPS enforced

### Forms
- Client-side validation
- Spam protection ready
- Secure submission endpoints

## 📊 Analytics & Monitoring

### Ready for Integration
- Google Analytics placeholder in `index.html`
- Performance monitoring setup
- Form submission tracking
- Error logging capabilities

## 🤝 Contributing

### Development Guidelines
1. Maintain responsive design principles
2. Follow accessibility best practices
3. Test across multiple browsers and devices
4. Optimize images and assets
5. Document any new features or changes

### Code Style
- Use semantic HTML elements
- Follow React best practices
- Maintain consistent naming conventions
- Comment complex functionality

## 📞 Support

For technical support or questions about deployment:
- Review the `deployment.md` file
- Check browser developer console for errors
- Verify all file paths and dependencies
- Test on multiple devices and browsers

## 📄 License

This website is proprietary to The Zen Axis wellness practice. All rights reserved.

---

**The Zen Axis** - Transforming health through personalized wellness solutions.