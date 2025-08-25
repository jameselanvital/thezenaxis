import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Button } from "./ui/button"
import { MessageCircle, FlaskConical, FileText, MonitorCheck, TrendingUp, ArrowRight, CheckCircle2, Clock, Users, Target } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import consultationImage from 'figma:asset/16ba58bd7ff3ef3dea85ff5457cea8b751c4da42.png'
import dailyMonitoringImage from 'figma:asset/9b5fd90066dd5c915eb355d2824d23f084496746.png'

export function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const timelineSteps = [
    {
      step: 1,
      title: "One On One Consultation",
      subtitle: "Your Journey Begins",
      description: "Comprehensive consultation where we listen to your health story and understand your unique challenges, goals, and lifestyle factors.",
      details: "Personalized assessment with detailed health history review and goal setting for your transformation journey.",
      icon: MessageCircle,
      image: consultationImage,
      duration: "60-90 min",
      outcome: "Clear understanding of your health challenges"
    },
    {
      step: 2,
      title: "Lab Assessment & Root Cause",
      subtitle: "Deep Dive Analysis",
      description: "Targeted lab assessments and comprehensive testing to uncover the root causes behind your symptoms and health concerns.",
      details: "Advanced functional testing that reveals hidden imbalances conventional medicine often misses.",
      icon: FlaskConical,
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center",
      duration: "1-2 weeks",
      outcome: "Detailed insights into your body's imbalances"
    },
    {
      step: 3,
      title: "Personal Healing Plan",
      subtitle: "Your Custom Blueprint",
      description: "Customized, comprehensive healing plan designed specifically for your body's natural rhythms and unique needs.",
      details: "Tailored protocol including nutrition guidelines, targeted supplementation, and lifestyle modifications.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop&crop=center",
      duration: "Ongoing",
      outcome: "Complete roadmap to optimal health"
    },
    {
      step: 4,
      title: "Daily Monitoring & Guidance",
      subtitle: "Continuous Support",
      description: "Continuous support with progress monitoring, real-time adjustments, and guidance throughout your healing journey.",
      details: "Regular check-ins, progress tracking, and real-time plan adjustments to keep you on the path to optimal health.",
      icon: MonitorCheck,
      image: dailyMonitoringImage,
      duration: "Daily",
      outcome: "Consistent progress with expert guidance"
    },
    {
      step: 5,
      title: "Real Results & Lasting Changes",
      subtitle: "Transformation Complete",
      description: "Experience natural, sustainable transformation with lasting health improvements and renewed vitality.",
      details: "Long-term wellness achievements that give you the energy and vitality to live your absolute best life.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=faces",
      duration: "Lifetime",
      outcome: "Sustained health and vitality"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev < timelineSteps.length - 1 ? prev + 1 : prev))
      }, 1200)

      return () => clearInterval(timer)
    }
  }, [isVisible, timelineSteps.length])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Subtle Monochromatic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300 shadow-sm mb-6">
            <Target className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Your Transformation Journey</span>
          </div>
          
          <h2 className="wellness-heading-main text-black mb-6">
            Your Healing <span className="wellness-heading-emphasis energy-blue">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="wellness-content-text text-gray-700">
              This is more than a program—it's a journey back to balance, clarity, and lasting well-being. At The Zen Axis, we don't just manage symptoms—we gently uncover and support your body's natural ability to heal.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Personalized Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Proven Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Lasting Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Timeline */}
        <div className="relative">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = index <= activeStep
              
              return (
                <div 
                  key={step.step} 
                  className={`transform transition-all duration-700 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-30'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                    {/* Mobile Timeline Indicator */}
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">{step.step}</span>
                    </div>
                    <div className="absolute -left-2 top-16 w-0.5 h-full bg-gradient-to-b from-gray-400 to-transparent"></div>
                    
                    <div className="ml-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                          <IconComponent className="w-6 h-6 text-gray-700" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-600 mb-1 uppercase tracking-wide">{step.subtitle}</div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <ImageWithFallback
                          src={step.image}
                          alt={step.title}
                          className="w-full h-32 object-cover rounded-xl shadow-sm"
                        />
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                          <strong>Outcome:</strong> {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop Layout - Black & White Creative Design */}
          <div className="hidden lg:block">
            {/* Elegant Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full transform -translate-y-1/2 z-0 shadow-sm">
              <div 
                className="h-full bg-gradient-to-r from-gray-700 via-black to-gray-700 rounded-full transition-all duration-2000 ease-out shadow-lg"
                style={{ 
                  width: `${((activeStep + 1) / timelineSteps.length) * 100}%`,
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
                }}
              ></div>
            </div>

            {/* Timeline Cards */}
            <div className="relative grid grid-cols-5 gap-8">
              {timelineSteps.map((step, index) => {
                const IconComponent = step.icon
                const isActive = index <= activeStep
                const isEven = index % 2 === 0
                
                return (
                  <div key={step.step} className="relative flex flex-col items-center">
                    {/* Sophisticated Timeline Node */}
                    <div 
                      className={`relative z-20 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 mb-8 border-2 ${
                        isActive 
                          ? 'bg-black border-gray-700 scale-110' 
                          : 'bg-white border-gray-300 scale-100 hover:border-gray-400'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className={`w-12 h-12 rounded-full flex flex-col items-center justify-center ${
                        isActive ? 'bg-white/20' : 'bg-gray-50'
                      }`}>
                        <div className={`text-xs font-bold mb-0.5 ${isActive ? 'text-white' : 'text-gray-700'}`}>
                          {step.step}
                        </div>
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-700'}`} />
                      </div>
                      
                      {/* Subtle Pulsing Animation for Active Step */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-black animate-ping opacity-10"></div>
                      )}
                    </div>

                    {/* Sophisticated Card Layout */}
                    <div 
                      className={`w-64 transform transition-all duration-700 ${
                        isActive ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-40 scale-95'
                      } ${isEven ? '' : 'translate-y-16'}`}
                      style={{ transitionDelay: `${index * 300}ms` }}
                      onMouseEnter={() => setActiveStep(index)}
                    >
                      <div className="relative group">
                        {/* Professional Card */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-gray-300">
                          {/* Card Header */}
                          <div className="text-center mb-4">
                            <div className="text-xs font-medium text-gray-600 mb-1 uppercase tracking-wide">
                              {step.subtitle}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-3">
                              {step.title}
                            </h3>
                            <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                                <Clock className="w-3 h-3" />
                                {step.duration}
                              </span>
                            </div>
                          </div>
                          
                          {/* Image with sophisticated hover effect */}
                          <div className="mb-4 relative overflow-hidden rounded-xl group">
                            <ImageWithFallback
                              src={step.image}
                              alt={step.title}
                              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <p className="text-xs text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                            
                            {/* Professional Outcome Highlight */}
                            <div className="bg-gray-50 p-3 rounded-xl">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-gray-700 font-medium leading-relaxed">
                                  {step.outcome}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Subtle Connection Arrow */}
                        {index < timelineSteps.length - 1 && (
                          <div className={`absolute top-4 ${isEven ? '-right-8' : '-left-8'} w-8 h-8 flex items-center justify-center`}>
                            <ArrowRight className={`w-4 h-4 text-gray-400 transition-all duration-300 ${
                              isActive ? 'text-gray-700 scale-110' : ''
                            }`} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sophisticated Black & White Call to Action */}
        <div className="mt-24 text-center">
          <div className="relative overflow-hidden bg-black rounded-3xl p-12 shadow-2xl">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                <Target className="w-4 h-4 text-white/80" />
                <span className="text-sm font-medium text-white/80">Ready to Transform?</span>
              </div>
              
              <h3 className="wellness-heading-main text-white mb-6">
                Begin Your <span className="energy-blue font-bold italic">Healing Journey</span> Today
              </h3>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Take the first step towards lasting wellness. Your transformation starts with a single conversation that could change everything.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  onClick={() => window.location.hash = 'connect-with-us'}
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-4 rounded-xl backdrop-blur-sm"
                  onClick={() => window.location.hash = 'connect-with-us'}
                >
                  Schedule Consultation
                </Button>
              </div>
              
              {/* Professional Trust Indicators */}
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}