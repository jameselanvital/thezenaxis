import classicalDancerImage from 'figma:asset/d94b5265dc5af0b200eac06cf966521a34a0d86d.png';
import doctorImage from 'figma:asset/10d10697c938f5917f8af0c185ce69ed9e447f0f.png';
import backgroundImage from 'figma:asset/d24c81169b694c22479e9fa95bf66e175d82e124.png';
import { Button } from "./ui/button"

const ourStoryTestimonials = [
  {
    name: "Lasting Wellness and \nVitality — The Zen Way",
    title: "",
    location: "",
    testimonial: "We envision a world where healing is life-changing— bridging the strengths of conventional medicine with deep root-cause solutions to make chronic disease reversal and lasting weight loss achievable for everyone.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
  }
]

export function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center pt-8 sm:pt-10 lg:pt-12 xl:pt-16 pb-0 relative"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#ffffff'
        }}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1">
              <p className="hero-subtitle-28pt text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0" style={{ whiteSpace: 'pre-line' }}>
                Lasting Wellness and
Vitality — <span className="energy-blue italic">The Zen Way</span>
              </p>

              {/* Testimonial */}
              <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
                <p className="text-lg sm:text-xl text-gray-700 font-normal leading-relaxed mb-3 sm:mb-4 px-2 lg:px-0">
                  {ourStoryTestimonials[0].testimonial}
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto min-h-[48px] text-base">
                  Start Your Journey
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-7 order-1 lg:order-2 mb-4 lg:mb-0 lg:-mb-[100px]">
              <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                <img
                  src={classicalDancerImage}
                  alt="Classical dancing figure representing grace, movement, and the transformative journey of wellness"
                  className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-contain mt-[48px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Our Story Section */}
      <section className="lg:hidden mt-0 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Content */}
          <div className="text-center pt-8 sm:pt-10 pb-8 sm:pb-10">
            <h2 className="wellness-heading-main text-black mb-3 sm:mb-4" style={{ lineHeight: '1.04' }}>
              Our <span className="font-light energy-blue">Story</span>
            </h2>
            <p className="wellness-content-text text-gray-700 text-center">
              As a doctor, I watched countless people struggle with chronic diseases and obesity, feeling trapped in a cycle of medications and temporary fixes. I saw the frustration, the fear, and the longing for a solution that went deeper than just managing symptoms. I've always been someone who digs deeper—never satisfied with surface solutions. Why and how matter to me more than what.
            </p>
            <p className="wellness-content-text text-gray-700 text-center mt-4">
              I immersed myself in the science of root-cause healing, discovering that true transformation wasn't just about treating the body—it was about understanding it, nourishing it, and restoring balance from within. I found doctors who were using lifestyle, nutrition, and a holistic approach to help people heal for good. It was nothing short of life-changing.
            </p>
            <p className="wellness-content-text text-gray-700 text-center mt-4">
              Joining Amura allowed me to put this knowledge into practice, and today, I dedicate myself to helping others break free from the chains of chronic disease and excess weight. I believe healing is not only possible, it's within you. It starts from within. And it's the freedom you deserve.
            </p>
            
            {/* Mobile Doctor Credentials */}
            <div className="mt-8 mb-6">
              <h3 className="wellness-heading-main mb-2" style={{ color: 'var(--energy-blue)' }}>
                Dr. Agalya
              </h3>
              <p className="wellness-content-text text-gray-700 leading-tight">
                MBBS, Chronic Disease Reversal and Weight Loss Expert
              </p>
            </div>

            {/* Mobile Doctor Image - Positioned in white space below credentials */}
            <div className="mt-8 mb-4">
              <div className="relative max-w-sm sm:max-w-md mx-auto">
                <img
                  src={doctorImage}
                  alt="Professional doctor representing The Zen Axis medical expertise and compassionate care"
                  className="w-full h-auto max-h-[620px] sm:max-h-[680px] object-contain translate-y-[70px]"
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Desktop Our Story Section */}
      <section className="hidden lg:block mt-0 pb-0 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Doctor Image (4 columns) */}
            <div className="lg:col-span-4 order-2 lg:order-1 mb-4 lg:mb-0 lg:-mb-[500px]">
              <div className="relative max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:ml-0">
                <img
                  src={doctorImage}
                  alt="Professional doctor representing The Zen Axis medical expertise and compassionate care"
                  className="w-full h-auto max-h-[440px] sm:max-h-[540px] md:max-h-[640px] lg:max-h-[740px] object-contain mt-[30px]"
                />
              </div>
            </div>
            
            {/* Doctor Credentials Column (3 columns) */}
            <div className="lg:col-span-3 order-3 lg:order-2 flex flex-col justify-center mb-4 lg:mb-0 pt-2 lg:pt-4 px-4 lg:px-0 lg:-ml-16">
              <div className="text-center lg:text-left lg:max-w-[200px]">
                <h3 className="wellness-heading-main mb-2 whitespace-nowrap" style={{ color: 'var(--energy-blue)' }}>
                  Dr. Agalya
                </h3>
                <p className="wellness-content-text text-gray-700 leading-tight">
                  MBBS, Chronic Disease Reversal and Weight Loss Expert
                </p>
              </div>
            </div>

            {/* Right Column - Content (5 columns) */}
            <div className="lg:col-span-5 text-center lg:text-left order-1 lg:order-3 pt-8 sm:pt-10 lg:pt-12 pr-0 lg:pr-5 ml-0 lg:-ml-[110px]">
              <h2 className="wellness-heading-main text-black mb-3 sm:mb-4" style={{ lineHeight: '1.04' }}>
                Our <span className="font-light energy-blue">Story</span>
              </h2>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify">
                As a doctor, I watched countless people struggle with chronic diseases and obesity, feeling trapped in a cycle of medications and temporary fixes. I saw the frustration, the fear, and the longing for a solution that went deeper than just managing symptoms. I've always been someone who digs deeper—never satisfied with surface solutions. Why and how matter to me more than what.
              </p>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify mt-4">
                I immersed myself in the science of root-cause healing, discovering that true transformation wasn't just about treating the body—it was about understanding it, nourishing it, and restoring balance from within. I found doctors who were using lifestyle, nutrition, and a holistic approach to help people heal for good. It was nothing short of life-changing.
              </p>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify mt-4">
                Joining Amura allowed me to put this knowledge into practice, and today, I dedicate myself to helping others break free from the chains of chronic disease and excess weight. I believe healing is not only possible, it's within you. It starts from within. And it's the freedom you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="lg:py-12 bg-black relative">
        {/* Mobile spacing - normal padding since image is now within the Our Story section */}
        <div className="lg:hidden pt-8 sm:pt-10 pb-8 sm:pb-10"></div>
        
        {/* Desktop spacing - unchanged */}
        <div className="hidden lg:block py-12"></div>
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="hero-eternal-joy text-white mb-3 sm:mb-4 px-2">
            Ready to Start Your <span className="text-white italic">Transformation?</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4 lg:px-0">
            Join our community of wellness warriors and become part of The Zen Axis story of healing, hope, and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto min-h-[48px] text-base">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto min-h-[48px] text-base">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}