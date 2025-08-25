import { Button } from "./ui/button"
import Frame4460 from "../imports/Frame4460"

export function ServicesSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="relative w-full">
        {/* Main Content */}
        <div className="relative">
          {/* Figma Import Container - Viewport Height */}
          <div className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Frame4460 />
            </div>
          </div>
          
          {/* Overlay Content for Better Integration */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent pointer-events-none" />
          
          {/* Enhanced Call-to-Action Overlay */}
          <div className="absolute top-[calc(50%-80px)] left-4 sm:left-8 lg:left-16 transform -translate-y-1/2 max-w-3xl z-20 pointer-events-auto">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-black tracking-tight">
                  This isn't just a program;
                  <br className="hidden sm:block" />
                  it's the opportunity to{" "}
                  <span className="font-bold italic text-energy-blue">reclaim your health</span>
                  <br className="hidden sm:block" />
                  and your{" "}
                  <span className="font-bold italic text-energy-blue">life</span>
                </h2>
                
                <p className="text-lg sm:text-xl lg:text-2xl font-light text-black leading-relaxed max-w-2xl">
                  With the right tools, guidance, and support, you can achieve the vitality 
                  you've always dreamt of. Take that first step now and experience a future 
                  of limitless health and happiness.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg uppercase"
                  style={{ 
                    backgroundColor: '#000000',
                    fontSize: '1.25rem',
                    fontWeight: '400',
                    letterSpacing: '0.02em',
                    paddingLeft: '3.875rem',
                    paddingRight: '3.875rem',
                    paddingTop: '1.4375rem',
                    paddingBottom: '1.4375rem'
                  }}
                  onClick={() => window.location.hash = 'contact'}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}