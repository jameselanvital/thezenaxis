# The Zen Axis - Deployment Guide

## Overview

This website is built as a React single-page application (SPA) with hash-based routing, making it suitable for deployment on static hosting platforms.

## Deployment Platforms

### Recommended Platforms

1. **Netlify** (Recommended)
   - Automatic deployments from Git
   - Built-in form handling
   - CDN and optimizations
   - Custom domain support

2. **Vercel**
   - Excellent React support
   - Global CDN
   - Automatic HTTPS
   - Performance analytics

3. **GitHub Pages**
   - Free hosting for public repositories
   - Automatic deployment from Git
   - Custom domain support

### Static Hosting Platforms

4. **AWS S3 + CloudFront**
5. **Firebase Hosting**
6. **Azure Static Web Apps**

## Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Ensure all dependencies are properly configured
- [ ] Test the application locally
- [ ] Verify all routes work with hash-based navigation
- [ ] Check responsive design on various devices
- [ ] Validate form submissions and contact features

### 2. Assets and Content
- [ ] Optimize images for web delivery
- [ ] Ensure all Figma assets are properly loading
- [ ] Verify favicon and app icons are in place
- [ ] Check that all external fonts load correctly
- [ ] Test the website with slow network connections

### 3. SEO and Meta Tags
- [ ] Verify meta tags in index.html
- [ ] Add appropriate Open Graph tags
- [ ] Ensure proper page titles for each route
- [ ] Add structured data markup if needed
- [ ] Create and add robots.txt and sitemap.xml

### 4. Performance
- [ ] Optimize images and assets
- [ ] Enable compression (gzip/brotli)
- [ ] Set up proper caching headers
- [ ] Test Core Web Vitals
- [ ] Verify mobile page speed

## Deployment Steps

### For Netlify Deployment

1. **Connect Repository**
   ```bash
   # If using Git, commit all files
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Build Settings**
   - Build command: (Leave empty - static site)
   - Publish directory: `/` (root directory)

3. **Environment Variables**
   - Add any required environment variables
   - Configure form handling endpoints if needed

4. **Custom Domain**
   - Add custom domain in Netlify settings
   - Configure DNS records
   - Enable HTTPS

### For Vercel Deployment

1. **Import Project**
   - Connect your Git repository
   - Select the root directory

2. **Build Configuration**
   - Framework: Other
   - Build command: (Leave empty)
   - Output directory: `./`

3. **Domain Setup**
   - Add custom domain
   - Verify DNS configuration

### For GitHub Pages

1. **Repository Setup**
   ```bash
   # Create gh-pages branch
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. **GitHub Settings**
   - Go to repository Settings > Pages
   - Select source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

## Post-Deployment Configuration

### 1. Analytics Setup
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 2. Form Handling
- Configure form submission endpoints
- Set up email notifications
- Add spam protection (reCAPTCHA)

### 3. Performance Monitoring
- Set up Core Web Vitals monitoring
- Configure error tracking
- Monitor form submissions

### 4. Security Headers
Add security headers via hosting platform:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Custom Domain Configuration

### DNS Records
```
Type: CNAME
Name: www
Value: your-site.netlify.app (or your hosting provider)

Type: A
Name: @
Value: [IP provided by hosting service]
```

### SSL Certificate
- Most hosting platforms provide automatic HTTPS
- Ensure "Force HTTPS" is enabled
- Verify certificate is properly configured

## Maintenance and Updates

### Regular Updates
- Monitor website performance
- Update dependencies regularly
- Check for broken links
- Review and update content
- Monitor form submissions

### Backup Strategy
- Keep regular backups of content
- Version control all code changes
- Document configuration changes
- Maintain staging environment for testing

## Troubleshooting

### Common Issues

1. **Hash routing not working**
   - Ensure proper fallback to index.html
   - Check server configuration for SPAs

2. **Images not loading**
   - Verify Figma asset integration
   - Check image paths and formats
   - Ensure proper CORS configuration

3. **Forms not submitting**
   - Verify form action endpoints
   - Check CORS settings
   - Ensure proper error handling

4. **Performance issues**
   - Optimize images and assets
   - Enable compression
   - Check for render-blocking resources

### Support Resources
- Hosting platform documentation
- React deployment guides
- Web performance optimization tools
- SEO validation tools

## File Structure for Deployment

```
/
├── index.html              # Main entry point
├── App.tsx                 # React application
├── styles/
│   └── globals.css         # Global styles
├── components/             # React components
├── images/                 # Static images
├── favicon.ico            # Favicon
├── robots.txt             # Search engine directives
├── sitemap.xml            # Site structure for SEO
└── deployment.md          # This file
```

## Environment-Specific Configuration

### Production
- Enable compression
- Optimize assets
- Enable caching
- Monitor performance

### Staging
- Test new features
- Validate changes
- Performance testing
- Content review

This deployment guide ensures your Zen Axis website is properly configured for production hosting while maintaining all design, functionality, and performance characteristics.