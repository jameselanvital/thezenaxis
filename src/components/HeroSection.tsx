import { Button } from "./ui/button"
import butterflyImage from 'figma:asset/cd4152ca34c6ad307254c7c6f4441b9f5238e890.png'
import floralBackground from 'figma:asset/096a6d7989ad26f884033e36bc8ed9da38c95238.png'

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 overflow-hidden"
      style={{
        backgroundImage: `url(${floralBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center 490px'
      }}
    >
      <div className="container-responsive w-full py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-1 lg:order-1 z-10 relative">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="tracking-tight leading-tight">
                  <span className="block hero-eternal-joy mb-1 sm:mb-2">Take Back</span>
                  <span className="block hero-limitless-energy">
                    Your <span className="energy-blue">Health</span>
                  </span>
                </h1>
                <h2 className="hero-subtitle-18pt text-primary/90 tracking-tight leading-relaxed px-2 sm:px-4 lg:px-0 max-w-3xl mx-auto lg:mx-0">
                  <span className="block">Lose weight. Reverse disease.</span>
                  <span className="block">Get off medications</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="content-sleek text-responsive-base text-white max-w-2xl leading-relaxed pt-2 px-4 sm:px-6 lg:px-0 mx-auto lg:mx-0">
                  Transform your health with The ZenAxis methodology - a comprehensive approach that addresses 
                  the root causes of health challenges, helping you achieve sustainable wellness and vitality.
                </p>
                <p className="content-sleek text-responsive-lg text-white max-w-2xl leading-relaxed px-4 sm:px-6 lg:px-0 mx-auto lg:mx-0">
                  Your body knows the way. We help you listen.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-0">
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-mobile-friendly text-responsive-base px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 font-bold w-full sm:w-auto sm:min-w-[260px] lg:min-w-[280px] border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: '#044F90',
                  color: '#044F90'
                }}
                onClick={() => window.location.hash = 'connect-with-us'}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:col-span-3 relative flex items-end justify-center order-2 lg:order-2">
            <div className="relative w-full flex items-end justify-center">
              {/* Mobile/Tablet optimized container */}
              <div className="block lg:hidden w-full max-w-sm sm:max-w-md mx-auto">
                <img 
                  src={butterflyImage} 
                  alt="Woman with butterflies representing transformation and wellness" 
                  className="w-full h-auto object-contain object-bottom"
                  style={{
                    maxHeight: '60vh',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
              </div>
              
              {/* Desktop optimized container */}
              <div className="hidden lg:block w-full h-full min-h-[600px] xl:min-h-[700px] flex items-end justify-center">
                <img 
                  src={butterflyImage} 
                  alt="Woman with butterflies representing transformation and wellness" 
                  className="w-full h-full max-w-none object-contain object-bottom"
                  style={{
                    maxHeight: 'min(95vh, 800px)',
                    width: 'auto',
                    height: 'auto',
                    transform: 'translateY(83px)'
                  }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements for larger screens */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-energy-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-energy-blue/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}