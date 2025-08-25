import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Star, Quote } from "lucide-react"

const carouselData = [
  {
    id: 1,
    title: "Lost 30 lbs & Reversed Diabetes",
    subtitle: "Sarah's Transformation",
    quote: "I never thought I could feel this energetic again. The functional medicine approach didn't just help me lose weight - it gave me my life back.",
    rating: 5,
    timeframe: "6 months",
    results: ["Blood sugar normalized", "30 lbs weight loss", "Energy restored"],
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c5e2ef47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Overcame Chronic Fatigue",
    subtitle: "Michael's Journey",
    quote: "After years of feeling exhausted, I finally found the root cause. Now I wake up refreshed and have energy throughout the day.",
    rating: 5,
    timeframe: "4 months",
    results: ["Sleep quality improved", "Energy levels restored", "Mental clarity enhanced"],
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Healed Digestive Issues",
    subtitle: "Emma's Recovery",
    quote: "Years of stomach problems are behind me. I can finally enjoy meals without worry and feel comfortable in my own body.",
    rating: 5,
    timeframe: "5 months",
    results: ["Digestive comfort restored", "Food sensitivities resolved", "Gut health optimized"],
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Balanced Hormones Naturally",
    subtitle: "Lisa's Wellness Story",
    quote: "My mood swings and irregular cycles are a thing of the past. I feel balanced, confident, and truly myself again.",
    rating: 5,
    timeframe: "7 months",
    results: ["Hormonal balance achieved", "Mood stabilized", "Energy consistent"],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Reduced Inflammation & Pain",
    subtitle: "David's Healing",
    quote: "Joint pain that plagued me for years is gone. I'm active again, playing with my kids and feeling like myself.",
    rating: 5,
    timeframe: "3 months",
    results: ["Joint pain eliminated", "Inflammation reduced", "Mobility restored"],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
]

export function WellnessCarousel() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container max-w-screen-xl px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="wellness-heading-main text-black mb-4">
            Real People, <span className="wellness-heading-emphasis energy-blue">Real Transformations</span>
          </h2>
          <p className="wellness-content-text text-gray-700 max-w-3xl mx-auto">
            Discover how functional medicine has transformed the lives of our clients. 
            Each story represents a journey from struggle to vitality, from confusion to clarity.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselData.map((story) => (
                <CarouselItem key={story.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative">
                        <ImageWithFallback
                          src={story.imageUrl}
                          alt={`${story.subtitle} - wellness transformation`}
                          className="w-full h-full object-cover img-color hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        {/* Timeframe Badge */}
                        <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full">
                          <span className="text-sm font-medium">{story.timeframe}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 lg:p-8">
                        {/* Title & Subtitle */}
                        <div className="mb-4">
                          <h3 className="text-lg lg:text-xl font-medium text-black mb-1">
                            {story.title}
                          </h3>
                          <p className="text-energy-blue font-medium italic">
                            {story.subtitle}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(story.rating)].map((_, index) => (
                            <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="mb-6">
                          <Quote className="w-6 h-6 text-gray-300 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">
                            "{story.quote}"
                          </p>
                        </div>

                        {/* Results */}
                        <div className="space-y-2">
                          <h4 className="font-medium text-black">Key Results:</h4>
                          <ul className="space-y-1">
                            {story.results.map((result, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-energy-blue rounded-full mr-2 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 border-gray-200" />
              <CarouselNext className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 border-gray-200" />
            </div>
          </Carousel>

          {/* Mobile Navigation Hint */}
          <div className="md:hidden text-center mt-6">
            <p className="text-sm text-gray-500">
              Swipe to see more transformations →
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="wellness-content-text text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to write your own transformation story? 
            Join hundreds of others who have reclaimed their health and vitality.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-medium"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  )
}