import { ImageWithFallback } from "../figma/ImageWithFallback"
import { Button } from "../ui/button"
import { Star, Quote, Target, Users, Heart, Brain, Leaf, Shield, CheckCircle } from "lucide-react"

interface Testimonial {
  name: string
  age: number
  location: string
  before: string
  after: string
  story: string
  timeframe: string
  image: string
}

interface ConditionPageProps {
  title: string
  subtitle: string
  description: string
  testimonials: Testimonial[]
  stats: {
    successRate: string
    avgTimeframe: string
    patientsHelped: string
  }
}

export function ConditionPageBase({ title, subtitle, description, testimonials, stats }: ConditionPageProps) {
  // Use the first testimonial as the featured header testimonial
  const featuredTestimonial = testimonials[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Featured Testimonial */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black min-h-[85vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)]"></div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h1 className="hero-eternal-joy text-white mb-4">
                Transforming Lives with <span className="energy-blue">{title}</span>
              </h1>
              <p className="hero-subtitle-18pt text-white/80 mb-6 max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
              <p className="wellness-content-text text-white/70 max-w-3xl mx-auto lg:mx-0">
                {description}
              </p>
            </div>

            {/* Right Column - Large Image */}
            <div className="lg:col-span-7">
              <div className="relative">
                <ImageWithFallback
                  src={featuredTestimonial.image}
                  alt={`${featuredTestimonial.name} transformation journey`}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Achievers Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="wellness-heading-main text-black mb-4">
              Meet the <span className="wellness-heading-emphasis energy-blue">Achievers</span>
            </h2>
            <p className="wellness-content-text text-gray-700 max-w-2xl mx-auto">
              Real people, real transformations. Discover how our holistic approach has helped others overcome {title.toLowerCase()} and reclaim their vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={`${testimonial.name} transformation`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-black">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.age} years old, {testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                    <p className="text-sm font-medium text-red-800 mb-1">Before</p>
                    <p className="text-sm text-red-700">{testimonial.before}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
                    <p className="text-sm font-medium text-green-800 mb-1">After {testimonial.timeframe}</p>
                    <p className="text-sm text-green-700">{testimonial.after}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Quote className="w-5 h-5 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{testimonial.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Way of Healing Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="wellness-heading-main text-black mb-4">
              Our Way of <span className="wellness-heading-emphasis energy-blue">Healing</span>
            </h2>
            <p className="wellness-content-text text-gray-700 max-w-3xl mx-auto">
              Our comprehensive approach addresses the root causes of {title.toLowerCase()} through evidence-based functional medicine, personalized treatment protocols, and holistic lifestyle interventions for lasting transformation.
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-medium text-black mb-2">Root Cause Analysis</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We investigate the underlying factors contributing to your condition through comprehensive testing and detailed health history analysis.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-medium text-black mb-2">Natural Healing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our approach emphasizes natural healing methods, targeted nutrition, and evidence-based supplementation to restore optimal function.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-medium text-black mb-2">Personalized Care</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every treatment plan is uniquely designed for your specific needs, genetics, lifestyle, and health goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-medium text-black mb-2">Mind-Body Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We address the psychological and emotional aspects of healing alongside physical symptoms for comprehensive wellness.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-medium text-black mb-2">Lifestyle Medicine</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sustainable lifestyle modifications that support long-term health and prevent condition recurrence.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-medium text-black mb-2">Ongoing Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous monitoring, adjustments, and support throughout your healing journey to ensure lasting results.
              </p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="wellness-heading-main text-black">{stats.successRate}</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="wellness-heading-main text-black">{stats.avgTimeframe}</div>
              <p className="text-gray-600">Average Transformation Time</p>
            </div>
            <div className="space-y-2">
              <div className="wellness-heading-main text-black">{stats.patientsHelped}</div>
              <p className="text-gray-600">Lives Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="hero-eternal-joy text-white mb-4">
            Ready to Start Your <span className="energy-blue">Transformation?</span>
          </h2>
          <p className="wellness-content-text text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands who have successfully overcome {title.toLowerCase()} with our personalized approach to holistic wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}