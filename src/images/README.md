# Images Directory

This directory is prepared for static image assets used throughout The Zen Axis website.

## Current Image Handling

The website currently uses Figma asset imports for images, which are imported using the `figma:asset/` syntax in the React components. These images are automatically optimized and served by the Figma integration.

## Image Categories

### Hero Images
- Hero section background images
- Condition-specific hero images for each health challenge page

### Decorative Elements
- Butterfly and floral design elements
- Background patterns and textures

### Profile Images
- Team member photos
- Testimonial client photos (when not using placeholder services)

### Icons and Graphics
- Custom icons and graphics
- Condition-specific illustrations

## Image Optimization Guidelines

When adding new static images to this directory, please follow these guidelines:

1. **File Formats**:
   - Use WebP for photos when possible (with JPEG fallbacks)
   - Use SVG for icons and simple graphics
   - Use PNG for images requiring transparency

2. **File Naming**:
   - Use descriptive, kebab-case naming: `hero-obesity-treatment.webp`
   - Include size indicators for different variants: `logo-mobile.svg`, `logo-desktop.svg`

3. **Responsive Images**:
   - Provide multiple sizes for different screen densities
   - Use appropriate compression levels to balance quality and file size

4. **Accessibility**:
   - Ensure all images have appropriate alt text in the components
   - Provide high contrast versions when necessary

## Directory Structure

```
/images/
├── heroes/          # Hero section images
├── decorative/      # Decorative elements and patterns
├── profiles/        # Team and testimonial photos
├── icons/           # Custom icons and graphics
├── conditions/      # Condition-specific images
└── logos/           # Logo variations and brand assets
```

## Performance Considerations

- All images should be optimized for web delivery
- Consider lazy loading for images below the fold
- Use appropriate image dimensions to avoid unnecessary scaling
- Implement proper caching headers for production deployment

## Migration Notes

If migrating from Figma assets to static images:
1. Export images from Figma in appropriate formats and sizes
2. Update import statements in components from `figma:asset/` to relative paths
3. Ensure all image transformations (grayscale filters, etc.) are maintained
4. Test responsive behavior across all device sizes