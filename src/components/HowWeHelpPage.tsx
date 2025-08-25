
import decorativeCrane from 'figma:asset/a94aa850952671a6eac35a7e9b1aaf4a17f32424.png';
import { Button } from "./ui/button"



export function HowWeHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Spacer */}
      <section className="pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
      </section>

      {/* Main Content Section */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 relative bg-white">
        
        
        <div className="container max-w-screen-xl mx-auto px-4 relative">
          {/* Layout container with content and decorative image */}
          <div className="relative flex items-start justify-between">
            {/* Main Content */}
            <div className="w-full max-w-[28rem] sm:max-w-[30rem] ml-0 sm:ml-[16.2rem]">
              <div className="text-left">
                {/* Opening Statement */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <h1 className="wellness-heading-large text-black mb-6 sm:mb-8" style={{ lineHeight: '1.1' }}>
                    We're here to bring humanity back to healing — <span className="font-light italic energy-blue">The Zen Way</span>.
                  </h1>
                  
                  <p className="wellness-content-text text-gray-700 mb-4 sm:mb-6">
                    We are a chronic disease reversal and weight loss clinic—rooted in science, built on compassion, and dedicated to transforming lives.
                  </p>
                </div>

                {/* Core Philosophy */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <p className="wellness-content-text text-gray-700 mb-4 sm:mb-6">
                    At the heart of our work is a simple belief: real well-being begins with empathy and is sustained by science. We don't just treat symptoms—we take the time to understand you as a whole person: your story, your lifestyle, your goals.
                  </p>
                  
                  <p className="wellness-content-text text-gray-700 mb-4 sm:mb-6">
                    Our care is about uncovering root causes and designing thoughtful, personalized plans that support lasting, meaningful change. Every program is sustainable and crafted to fit into the natural rhythm of your life.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="wellness-heading-main text-black mb-4 sm:mb-6" style={{ lineHeight: '1.1' }}>
                    We envision a future where health is not merely managed, but deeply <span className="font-light italic energy-blue">understood</span>.
                  </h2>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <p className="wellness-content-text text-gray-700">
                      Where healing is not rushed, but gently nurtured.
                    </p>
                    
                    <p className="wellness-content-text text-gray-700">
                      And where each step forward is guided by both evidence and heart.
                    </p>
                    
                    <p className="wellness-content-text text-gray-700">
                      We are not in the business of healthcare.
                    </p>
                  </div>
                </div>

                {/* Closing Statement */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="wellness-heading-main text-black mb-4 sm:mb-6" style={{ lineHeight: '1.1' }}>
                    We are the origin of <span className="font-light italic energy-blue">compassion</span>—here to create lasting change in your well-being.
                  </h2>
                </div>

                {/* Call to Action */}
                <div className="mt-8 sm:mt-10 lg:mt-12">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto min-h-[48px] text-base">
                      Begin Your Transformation
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Crane Image - Moved Right Away From Content */}
            <div className="hidden lg:block absolute right-0 top-0 z-0">
              <img 
                src={decorativeCrane} 
                alt="Decorative crane illustration" 
                className="w-[30rem] xl:w-[36rem] opacity-60 hover:opacity-70 transition-opacity duration-300 img-grayscale-always"
                style={{ 
                  transform: 'translateX(calc(10% - 25px))',
                  filter: 'grayscale(100%) brightness(0.2) contrast(1.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-8 sm:py-10 lg:py-12 bg-black">
        <div className="container max-w-screen-xl mx-auto px-4 text-left">
          <div className="w-full max-w-[28rem] sm:max-w-[30rem] ml-0 sm:ml-[16.2rem]">
            <h2 className="hero-eternal-joy text-white mb-3 sm:mb-4">
              Ready to Experience <span className="text-white italic">Compassionate Healing?</span>
            </h2>
            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8">
              Join us in creating a new standard of healthcare—one built on understanding, empathy, and evidence-based healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto min-h-[48px] text-base">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto min-h-[48px] text-base">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}