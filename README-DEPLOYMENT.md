# The Zen Axis - Deployment Guide

## Local Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`

## Vercel Deployment

### Automatic Deployment (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the Vite framework and configure the build settings
6. Click "Deploy"

### Manual Configuration (if needed)

If Vercel doesn't auto-detect the settings, use these:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Environment Variables

If you need environment variables, add them in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development environments

## Build Optimization

The project is configured with:
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ Code splitting for optimal loading
- ✅ Asset optimization
- ✅ SPA routing support

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all dependencies are in `package.json`
2. **Routing issues**: The `vercel.json` file includes SPA routing configuration
3. **CSS not loading**: Ensure Tailwind directives are in `src/index.css`

### Performance Tips

- Images are already optimized with Vite
- Code splitting is configured for vendor and UI libraries
- Use the `preview` command to test production builds locally: `npm run preview`
