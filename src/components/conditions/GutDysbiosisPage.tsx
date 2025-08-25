import womanImage from 'figma:asset/bad83782785ab8583ec20013a3eb4580111ceeeb.png';
import decorativeImage from 'figma:asset/4ff0224fac4b97e308af7bc512ad31ef9e08f9cc.png';
import backgroundImage from 'figma:asset/d24c81169b694c22479e9fa95bf66e175d82e124.png';
import { Button } from "../ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Star, Quote, Target, Users, Heart, Brain, Leaf, Shield, CheckCircle, Search, Sprout, UserCheck, Activity, Dumbbell, HeartHandshake } from "lucide-react"

const gutDysbiosisTestimonials = [
  {
    name: "Ravi Sharma",
    title: "Finance Manager",
    location: "Mumbai",
    testimonial: "\"Years of antibiotics had destroyed my gut health. I suffered from chronic digestive issues, mood swings, and frequent infections. ZenAxis restored my microbiome through targeted probiotics and diet. My energy is back and I haven't been sick in months.\"",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }
]

const gutDysbiosisStats = {
  prevalence: "70% of people",
  prevalenceDesc: "have gut imbalances",
  successRate: "88%",
  successDesc: "restore balance",
  timeframe: "3-6 months",
  timeDesc: "average timeline"
}

const commonSymptoms = [
  "Digestive issues and irregular bowel movements",
  "Frequent bloating and gas",
  "Food cravings and sugar addiction",
  "Mood changes and brain fog",
  "Recurring infections and low immunity",
  "Skin problems and inflammation"
]

const potentialComplications = [
  "Compromised immune system function",
  "Increased infection susceptibility",
  "Mental health and mood disorders",
  "Autoimmune condition development",
  "Nutrient malabsorption",
  "Chronic inflammatory conditions"
]

export function GutDysbiosisPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Elegant Hero Section */}
      <section className="lg:hidden bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Hero Content */}
          <div className="text-center pt-8 pb-8">
            {/* Mobile Subtitle - Elegant Typography */}
            <h1 className="hero-subtitle-28pt text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
              Restoring gut microbiome balance through precision microbiome therapy
            </h1>

            {/* Mobile Testimonial - Enhanced Spacing */}
            <div className="mb-10 sm:mb-12 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-4 sm:mb-5 px-4">
                {gutDysbiosisTestimonials[0].testimonial}
              </p>
              <div className="text-center">
                <p className="text-base sm:text-lg font-medium text-energy-blue">
                  {gutDysbiosisTestimonials[0].name}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {gutDysbiosisTestimonials[0].title}
                </p>
              </div>
            </div>

            {/* Mobile Hero Image - Large and Clean - Positioned to Touch Button */}
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="relative obesity-mobile-clean-image-container">
                <img
                  src={womanImage}
                  alt="Professional woman representing confidence and wellness after gut dysbiosis resolution"
                  className="obesity-mobile-clean-image w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Mobile CTA Button - Moved Up 20px Total from Hero Image Bottom */}
            <div className="flex justify-center px-4 -mt-4">
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
                Restoring gut microbiome balance through precision microbiome therapy
              </p>

              {/* Desktop Testimonial */}
              <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-3 sm:mb-4 px-2 lg:px-0">
                  {gutDysbiosisTestimonials[0].testimonial}
                </p>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base font-medium text-energy-blue">
                    {gutDysbiosisTestimonials[0].name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {gutDysbiosisTestimonials[0].title}
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
                  src={womanImage}
                  alt="Professional woman representing confidence and wellness after gut dysbiosis resolution"
                  className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-contain mt-[85px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Gut Dysbiosis Section */}
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
                Restoring Your Inner<br />
                <span className="energy-blue font-light not-italic">Ecosystem</span>
              </h2>
            </div>

            {/* Right Column - Content (5 columns) */}
            <div className="lg:col-span-5 text-center lg:text-left mb-8 sm:mb-10 lg:mb-12 pt-8 sm:pt-10 lg:pt-12 pr-0 lg:pr-5 ml-0 lg:-ml-[110px]">
              <h2 className="wellness-heading-main text-black mb-3 sm:mb-4" style={{ lineHeight: '1.04' }}>
                Beyond Just <span className="font-light energy-blue">Digestive Issues</span>
              </h2>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify">
                Gut dysbiosis—an imbalance in gut microbiome—affects immune function, neurotransmitter production, and overall health, but the solution goes beyond just taking probiotics.
              </p>
              <p className="wellness-content-text text-gray-700 text-center lg:text-justify mt-4">
                At The Zen Axis, we use advanced microbiome testing to identify specific bacterial imbalances and customize treatment protocols. Our comprehensive approach typically restores healthy gut flora within 3 to 6 months.
              </p>
              
              {/* Our Clinical Approach */}
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-3 sm:mb-4 text-center lg:text-left">
                  Our Clinical Approach
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Advanced microbiome testing to identify specific bacterial imbalances
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Targeted probiotic therapy and prebiotic support
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Eliminate pathogenic bacteria and reduce gut inflammation
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Restore gut barrier function and improve nutrient absorption
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-[calc(0.4em+6px)]"></div>
                    <p className="wellness-content-text text-gray-600 text-center lg:text-left flex-1">
                      Long-term lifestyle optimization for sustained gut health
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
                  Our comprehensive approach addresses the root causes of gut dysbiosis through evidence-based microbiome therapy, personalized protocols, and holistic lifestyle interventions for lasting microbiome restoration.
                </p>
              </div>

              {/* Sleek Methodology Accordion */}
              <div className="w-full">
                <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="microbiome-testing" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Microbiome Testing</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Advanced comprehensive stool analysis and microbiome mapping to identify specific bacterial imbalances, pathogenic overgrowth, and beneficial bacteria deficiencies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="targeted-therapy" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Sprout className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Targeted Probiotic Therapy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Precision probiotic selection based on your specific bacterial deficiencies, combined with prebiotic support to nourish beneficial bacteria growth.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pathogen-elimination" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Pathogen Elimination</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Natural antimicrobial protocols to eliminate harmful bacteria, yeast overgrowth, and parasites while preserving beneficial flora.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gut-barrier-repair" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Gut Barrier Repair</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Targeted nutrients and compounds to heal intestinal permeability, strengthen gut lining, and restore proper barrier function.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="immune-modulation" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Immune System Support</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Modulation of gut-associated immune function to reduce chronic inflammation and restore immune tolerance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lifestyle-optimization" className="border-0 border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 px-2 sm:px-0 hover:bg-gray-50/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <HeartHandshake className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-black tracking-wide">Lifestyle Optimization</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 sm:pb-5 px-2 sm:px-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight tracking-wide opacity-90 text-center lg:text-justify">
                    Comprehensive lifestyle modifications including stress management, sleep optimization, and exercise protocols to support long-term gut health.
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
            Join thousands who have successfully restored their gut microbiome balance with our comprehensive approach to gut health optimization.
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