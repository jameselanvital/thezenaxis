import { cn } from "./ui/utils"
import newLogo from 'figma:asset/89abcc03a67c97ad548d3d8a036c06ff0ac1a4b1.png'

interface LogoProps {
  variant?: 'header' | 'footer' | 'large'
  className?: string
  showTagline?: boolean
}

const sizeVariants = {
  header: {
    container: "flex items-center justify-start",
    wrapper: "relative w-auto h-full flex items-center justify-center p-1",
    image: "h-full w-auto max-h-full object-contain object-center img-color",
    containerStyle: {
      height: '93px',    // 83px + 10px
      minHeight: '93px', 
      maxHeight: '93px'
    },
    containerStyleSm: {
      height: '101px',   // 91px + 10px
      minHeight: '101px',
      maxHeight: '101px'
    },
    containerStyleMd: {
      height: '109px',   // 99px + 10px
      minHeight: '109px',
      maxHeight: '109px'
    }
  },
  footer: {
    container: "flex items-center justify-start",
    wrapper: "relative w-auto h-full flex items-center justify-center p-1",
    image: "h-full w-auto max-h-full object-contain object-center img-color",
    containerStyle: {
      height: '109px',   // 99px + 10px
      minHeight: '109px',
      maxHeight: '109px'
    },
    containerStyleSm: {
      height: '117px',   // 107px + 10px
      minHeight: '117px', 
      maxHeight: '117px'
    },
    containerStyleMd: {
      height: '125px',   // 115px + 10px
      minHeight: '125px',
      maxHeight: '125px'
    }
  },
  large: {
    container: "flex items-center justify-start",
    wrapper: "relative w-auto h-full flex items-center justify-center p-1",
    image: "h-full w-auto max-h-full object-contain object-center img-color",
    containerStyle: {
      height: '125px',   // 115px + 10px
      minHeight: '125px',
      maxHeight: '125px'
    },
    containerStyleSm: {
      height: '141px',   // 131px + 10px
      minHeight: '141px',
      maxHeight: '141px'
    },
    containerStyleMd: {
      height: '157px',   // 147px + 10px
      minHeight: '157px', 
      maxHeight: '157px'
    }
  }
}

export function Logo({ variant = 'header', className, showTagline = false }: LogoProps) {
  const sizes = sizeVariants[variant]
  
  // Create responsive styles as CSS string
  const responsiveStyles = `
    .logo-container-${variant} {
      height: ${sizes.containerStyle.height};
      min-height: ${sizes.containerStyle.minHeight};
      max-height: ${sizes.containerStyle.maxHeight};
    }
    
    @media (min-width: 640px) {
      .logo-container-${variant} {
        height: ${sizes.containerStyleSm.height};
        min-height: ${sizes.containerStyleSm.minHeight};
        max-height: ${sizes.containerStyleSm.maxHeight};
      }
    }
    
    @media (min-width: 768px) {
      .logo-container-${variant} {
        height: ${sizes.containerStyleMd.height};
        min-height: ${sizes.containerStyleMd.minHeight};
        max-height: ${sizes.containerStyleMd.maxHeight};
      }
    }
  `
  
  return (
    <div className={cn("flex flex-col", className)}>
      {/* Inject styles */}
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      
      <div 
        className={cn(sizes.container, `logo-container-${variant}`, 'logo-mobile-container')}
        style={sizes.containerStyle}
      >
        <div className={cn(sizes.wrapper, 'logo-mobile-wrapper')}>
          <img 
            src={newLogo} 
            alt="ZenAxis Logo - Feel Light, Live Bright" 
            className={cn(sizes.image, 'logo-mobile-image')}
            style={{
              maxHeight: 'calc(100% - 8px)', // Ensure some padding
              maxWidth: '100%',
              display: 'block'
            }}
          />
        </div>
      </div>
      {showTagline && (
        <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">
          Feel Light, Live Bright
        </p>
      )}
    </div>
  )
}