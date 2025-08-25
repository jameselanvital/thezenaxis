import exampleImage from 'figma:asset/a2d9522db695a9c930e0794f681f11eb1ae286c9.png';
import { Button } from "./ui/button";

export function WellnessContent() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center -mt-5">
          {/* Content column */}
          <div className="space-y-8">
            {/* Main heading */}
            <div className="text-left space-y-4">
              <h2 className="wellness-heading-main text-black">
                Your body is unique.
              </h2>
              <h2 className="wellness-heading-main text-black" style={{ lineHeight: '0.7' }}>
                <span className="wellness-heading-emphasis">Your wellness journey</span> should be too.
              </h2>
            </div>
            
            {/* Content paragraphs */}
            <div className="space-y-8 text-left">
              <p className="content-sleek-lg text-black">
                We restore what your body needs: balanced nutrition, hormones and neurotransmitters, gut health, immunity, detox, inflammation control, and metabolism.
              </p>
              
              <p className="content-sleek-lg text-black">
                We've been told that ageing means decline. But when our systems are in balance, ageing can bring clarity, strength, and sustained energy.
              </p>
              
              <div className="space-y-6 pt-4">
                <p className="content-sleek-lg text-black">
                  True healing starts when everything works together.
                </p>
                <p className="content-sleek-lg text-black">
                  No quick fixes—just lasting vitality from within.
                </p>
                
                {/* Join Now Button */}
                <div className="flex justify-left pt-8">
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
                    onClick={() => window.location.hash = 'connect-with-us'}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image column - Increased size */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img 
                src={exampleImage} 
                alt="Wellness and health transformation journey"
                className="w-full h-auto object-contain rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}