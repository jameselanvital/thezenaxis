
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
      resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Asset aliases for Figma imports
      'figma:asset/e5ea1686d8c7afbf4222cf723880abd38b060ecb.png': path.resolve(__dirname, './src/assets/e5ea1686d8c7afbf4222cf723880abd38b060ecb.png'),
      'figma:asset/d94b5265dc5af0b200eac06cf966521a34a0d86d.png': path.resolve(__dirname, './src/assets/d94b5265dc5af0b200eac06cf966521a34a0d86d.png'),
      'figma:asset/d24c81169b694c22479e9fa95bf66e175d82e124.png': path.resolve(__dirname, './src/assets/d24c81169b694c22479e9fa95bf66e175d82e124.png'),
      'figma:asset/d092aaf34381878027a518cf10b978ba424507b4.png': path.resolve(__dirname, './src/assets/d092aaf34381878027a518cf10b978ba424507b4.png'),
      'figma:asset/cd4152ca34c6ad307254c7c6f4441b9f5238e890.png': path.resolve(__dirname, './src/assets/cd4152ca34c6ad307254c7c6f4441b9f5238e890.png'),
      'figma:asset/c97d6d7d7977dba79d845fedf10356755e84860e.png': path.resolve(__dirname, './src/assets/c97d6d7d7977dba79d845fedf10356755e84860e.png'),
      'figma:asset/c94eebfff7decab16d224976f931d1bb85ba4db0.png': path.resolve(__dirname, './src/assets/c94eebfff7decab16d224976f931d1bb85ba4db0.png'),
      'figma:asset/c644fa2ddab11ffb568a019a1721a572982872cd.png': path.resolve(__dirname, './src/assets/c644fa2ddab11ffb568a019a1721a572982872cd.png'),
      'figma:asset/c097018b213569a183bd9d424e09bd2bc516239b.png': path.resolve(__dirname, './src/assets/c097018b213569a183bd9d424e09bd2bc516239b.png'),
      'figma:asset/bad83782785ab8583ec20013a3eb4580111ceeeb.png': path.resolve(__dirname, './src/assets/bad83782785ab8583ec20013a3eb4580111ceeeb.png'),
      'figma:asset/b1f3f2be32bf2e723319de9155dac5e946bd79e5.png': path.resolve(__dirname, './src/assets/b1f3f2be32bf2e723319de9155dac5e946bd79e5.png'),
      'figma:asset/b0792fe5335df801d3b240a6eee133ae1e19fa0c.png': path.resolve(__dirname, './src/assets/b0792fe5335df801d3b240a6eee133ae1e19fa0c.png'),
      'figma:asset/a94aa850952671a6eac35a7e9b1aaf4a17f32424.png': path.resolve(__dirname, './src/assets/a94aa850952671a6eac35a7e9b1aaf4a17f32424.png'),
      'figma:asset/a67a79b926ff2595159881b5d9814e006a37f757.png': path.resolve(__dirname, './src/assets/a67a79b926ff2595159881b5d9814e006a37f757.png'),
      'figma:asset/a4e5a942a31637d724581bdacba8ac71c7002287.png': path.resolve(__dirname, './src/assets/a4e5a942a31637d724581bdacba8ac71c7002287.png'),
      'figma:asset/a2d9522db695a9c930e0794f681f11eb1ae286c9.png': path.resolve(__dirname, './src/assets/a2d9522db695a9c930e0794f681f11eb1ae286c9.png'),
      'figma:asset/9f0a041971af18611cf56c84a1ddf406c4c03226.png': path.resolve(__dirname, './src/assets/9f0a041971af18611cf56c84a1ddf406c4c03226.png'),
      'figma:asset/9b5fd90066dd5c915eb355d2824d23f084496746.png': path.resolve(__dirname, './src/assets/9b5fd90066dd5c915eb355d2824d23f084496746.png'),
      'figma:asset/95603fc86731e78daf6d00400376d1433b6499b9.png': path.resolve(__dirname, './src/assets/95603fc86731e78daf6d00400376d1433b6499b9.png'),
      'figma:asset/8e12ceaff08a03f4c8b746f505ac885cccc7db41.png': path.resolve(__dirname, './src/assets/8e12ceaff08a03f4c8b746f505ac885cccc7db41.png'),
      'figma:asset/8c928dc7d7f2cba2880ee2856dd2f682ad3b76f4.png': path.resolve(__dirname, './src/assets/8c928dc7d7f2cba2880ee2856dd2f682ad3b76f4.png'),
      'figma:asset/89abcc03a67c97ad548d3d8a036c06ff0ac1a4b1.png': path.resolve(__dirname, './src/assets/89abcc03a67c97ad548d3d8a036c06ff0ac1a4b1.png'),
      'figma:asset/87b43ebedbf73365c4e7a7ac04c65a27b5dc6e5a.png': path.resolve(__dirname, './src/assets/87b43ebedbf73365c4e7a7ac04c65a27b5dc6e5a.png'),
      'figma:asset/6fa4e4f220101ca324a14007de85930df476b098.png': path.resolve(__dirname, './src/assets/6fa4e4f220101ca324a14007de85930df476b098.png'),
      'figma:asset/5c4636b2a1c4e1fb93da10422c10d9d62afb4379.png': path.resolve(__dirname, './src/assets/5c4636b2a1c4e1fb93da10422c10d9d62afb4379.png'),
      'figma:asset/5aed285fddc9aaace7b3f4d1b9638ca52cbb84cc.png': path.resolve(__dirname, './src/assets/5aed285fddc9aaace7b3f4d1b9638ca52cbb84cc.png'),
      'figma:asset/4ff0224fac4b97e308af7bc512ad31ef9e08f9cc.png': path.resolve(__dirname, './src/assets/4ff0224fac4b97e308af7bc512ad31ef9e08f9cc.png'),
      'figma:asset/4220962671a2476ded87d92a38d8915806827541.png': path.resolve(__dirname, './src/assets/4220962671a2476ded87d92a38d8915806827541.png'),
      'figma:asset/26a61992ad97d744e60fb5bdfb1aebe6af89e381.png': path.resolve(__dirname, './src/assets/26a61992ad97d744e60fb5bdfb1aebe6af89e381.png'),
      'figma:asset/16ba58bd7ff3ef3dea85ff5457cea8b751c4da42.png': path.resolve(__dirname, './src/assets/16ba58bd7ff3ef3dea85ff5457cea8b751c4da42.png'),
      'figma:asset/10d10697c938f5917f8af0c185ce69ed9e447f0f.png': path.resolve(__dirname, './src/assets/10d10697c938f5917f8af0c185ce69ed9e447f0f.png'),
      'figma:asset/096a6d7989ad26f884033e36bc8ed9da38c95238.png': path.resolve(__dirname, './src/assets/096a6d7989ad26f884033e36bc8ed9da38c95238.png'),
    },
  },
      build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
  });