import headerImage from 'figma:asset/8c928dc7d7f2cba2880ee2856dd2f682ad3b76f4.png';
import decorativeImage from 'figma:asset/4ff0224fac4b97e308af7bc512ad31ef9e08f9cc.png';
import backgroundImage from 'figma:asset/d24c81169b694c22479e9fa95bf66e175d82e124.png';
import { Button } from "../ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Star, Quote, Target, Users, Heart, Brain, Leaf, Shield, CheckCircle, Search, Sprout, UserCheck, Activity, Dumbbell, HeartHandshake } from "lucide-react"

const painTestimonials = [
  {
    name: "Joshua",
    title: "Tech Director",
    location: "",
    testimonial: "Back pain and headaches used to keep me on the sidelines. I never knew that changing my diet and doing exercises could make a big difference. But thanks to this program, the pain's eased— and now I'm back to hiking, playing sports, and enjoying life again.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }
]

const painStats = {
  prevalence: "60% of adults",
  prevalenceDesc: "are affected",
  successRate: "83%",
  successDesc: "see improvement",
  timeframe: "3-8 months",
  timeDesc: "average timeline"
}

const commonSymptoms = [
  "Persistent joint or muscle pain",
  "Stiffness and reduced mobility",
  "Pain that worsens with weather changes",
  "Sleep disruption due to discomfort",
  "Fatigue from chronic pain",
  "Mood changes and irritability"
]

const potentialComplications = [
  "Chronic pain syndrome development",
  "Dependency on pain medications",
  "Depression and anxiety disorders",
  "Sleep disorders and insomnia",
  "Reduced quality of life",
  "Social isolation and relationship strain"
]

export function PainPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Elegant Hero Section */}
      <section className="lg:hidden bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Hero Content */}
          <div className="text-center pt-8 pb-8">
            {/* Mobile Subtitle - Elegant Typography */}
            <h1 className="hero-subtitle-28pt text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
              Eliminating chronic pain through holistic wellness
            </h1>

            {/* Mobile Testimonial - Enhanced Spacing */}
            <div className="mb-10 sm:mb-12 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-4 sm:mb-5 px-4">
                "{painTestimonials[0].testimonial}"
              </p>
              <div className="text-center">
                <p className="text-base sm:text-lg font-medium text-energy-blue">
                  {painTestimonials[0].name}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {painTestimonials[0].title}
                </p>
              </div>
            </div>

            {/* Mobile Hero Image - Large and Clean - Proper Spacing */}
            <div className="mb-8 sm:mb-10 flex justify-center">
              <div className="relative max-w-[350px] w-full mx-auto">
                <img
                  src={headerImage}
                  alt="Professional man representing pain-free, confident living"
                  className="w-full h-auto object-contain max-h-[400px] sm:max-h-[450px]"
                />
              </div>
            </div>
            
            {/* Mobile CTA Button - Proper Spacing */}
            <div className="flex justify-center px-4 mt-6">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto max-w-xs min-h-[52px] text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                onClick={() => window.location.hash = 'contact'}
              >
                <span className="relative z-10">Start Your Journey</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Hero Section */}
      <section 
        className="hidden lg:flex min-h-[85vh] items-center justify-center pt-8 xl:pt-16 pb-0 relative"
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
              {/* Desktop Subtitle */}
              <p className="hero-subtitle-18pt text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0">
                Eliminating chronic pain through holistic wellness
              </p>

              {/* Desktop Testimonial */}
              <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-3 sm:mb-4 px-2 lg:px-0">
                  "{painTestimonials[0].testimonial}"
                </p>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base font-medium text-energy-blue">
                    {painTestimonials[0].name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {painTestimonials[0].title}
                  </p>
                </div>
              </div>
              
              {/* Desktop CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto min-h-[48px] text-base"
                  onClick={() => window.location.hash = 'contact'}
                >
                  <span className="relative z-10">Start Your Journey</span>
                </Button>
              </div>
            </div>

            {/* Right Column - Desktop Hero Image */}
            <div className="lg:col-span-7 order-1 lg:order-2 mb-4 lg:mb-0 lg:-mb-[100px]">
              <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                <img
                  src={headerImage}
                  alt="Professional man representing pain-free, confident living"
                  className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-contain mt-[86px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Chronic Pain Section */}
      <section className="mt-0 sm:mt-0 lg:mt-0 pb-4 sm:pb-6 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - Decorative Image and Headline (7 columns) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center lg:justify-start mt-[150px] -ml-[30px]">
              {/* Decorative Image */}
              <div className="mb-6 lg:mb-8 -ml-[20px]">
                <img
                  src={decorativeImage}
                  alt="Decorative butterfly and floral design"
                  className="butterfly-size sm:butterfly-size-sm lg:butterfly-size-lg h-auto opacity-80"
                />
              </div>
              
              {/* Headline */}
              <h2 className="wellness-heading-large text-black text-center lg:text-left px-4 lg:px-8" style={{ lineHeight: '1.04' }}>
                Easing Chronic Pain,<br />
                <span className="energy-blue font-light not-italic">The Zen Way</span>
              </h2>
            </div>

            {/* Right Column - Content (5 columns) */}
            <div className="lg:col-span-5 text-center lg:text-left mb-8 sm:mb-10 lg:mb-12 pt-8 sm:pt-10 lg:pt-12 pr-0 lg:pr-5 ml-0 lg:-ml-[110px]">
              <h2 className="wellness-heading-main text-black mb-3 sm:mb-4" style={{ lineHeight: '1.04' }}>
                Beneath the Pain Lies the <span className="font-light energy-blue">Root</span>
              </h2>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify mb-4">
                Chronic pain often goes beyond physical injury. It can be a sign of systemic inflammation, nerve sensitivity, hormonal imbalances, or emotional stress. Without addressing these deeper causes, pain can persist and limit your quality of life.
              </p>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify">
                At The Zen Axis, we focus on reversing chronic pain by addressing its root causes. Most clients see significant improvement in pain levels and mobility within 3 to 6 months through a holistic, restorative approach.
              </p>
              
              {/* Mindful Medicine Section */}
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-3 sm:mb-4 text-center lg:text-left">
                  Mindful Medicine — <span className="energy-blue font-light not-italic">Our Way</span>
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Identify and reduce systemic inflammation
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Regulate nervous system function and reduce pain hypersensitivity
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Address hormonal imbalances that contribute to chronic pain
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Optimize nutrition to support tissue repair and pain relief
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Incorporate movement therapies to restore function and mobility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>



      {/* Our Way of Healing Section */}
      <section className="pt-0 sm:pt-0 lg:pt-0 pb-12 sm:pb-14 lg:pb-16 bg-gray-50 -mt-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - Empty to match top section layout (7 columns) */}
            <div className="lg:col-span-7">
              {/* Empty space to match the decorative image column from top section */}
            </div>

            {/* Right Column - Content (5 columns) */}
            <div className="lg:col-span-5 text-center lg:text-left mb-8 sm:mb-10 lg:mb-12 pt-6 sm:pt-8 lg:pt-10 pr-0 lg:pr-5 ml-0 lg:-ml-[110px]">
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="wellness-heading-main text-black mb-3 sm:mb-4 px-2">
                  Our Way of <span className="font-light italic energy-blue">Healing</span>
                </h2>
                <p className="text-sleek-sm text-gray-600 leading-tight px-2 sm:px-4 lg:px-0 text-center lg:text-justify">
                  Our comprehensive approach addresses the root causes of chronic pain through evidence-based functional medicine, personalized treatment protocols, and holistic lifestyle interventions for lasting pain relief.
                </p>
              </div>

              {/* Sleek Methodology Accordion */}
              <div className="w-full">
                <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="root-cause" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Root Cause Analysis</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    We investigate the underlying factors contributing to your condition through comprehensive testing and detailed health history analysis.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="natural-healing" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Sprout className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Natural Healing</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Our approach emphasizes natural healing methods, targeted nutrition, and evidence-based supplementation to restore optimal function.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="personalized-care" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Personalized Care</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Every treatment plan is uniquely designed for your specific needs, genetics, lifestyle, and health goals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mind-body" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Mind-Body Integration</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    We address the psychological and emotional aspects of healing alongside physical symptoms for comprehensive wellness.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lifestyle-medicine" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Lifestyle Medicine</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Sustainable lifestyle modifications that support long-term health and prevent condition recurrence.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ongoing-support" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <HeartHandshake className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Ongoing Support</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Continuous monitoring, adjustments, and support throughout your healing journey to ensure lasting results.
                  </p>
                </AccordionContent>
              </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-10 lg:py-12 bg-black">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="hero-eternal-joy text-white mb-3 sm:mb-4 px-2">
            Ready to Start Your <span className="text-white italic">Transformation?</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4 lg:px-0">
            Join thousands who have successfully overcome chronic pain with our personalized approach to holistic wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto min-h-[48px] text-base" onClick={() => window.location.hash = 'contact'}>
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