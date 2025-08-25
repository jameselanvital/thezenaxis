import { Avatar, AvatarFallback } from "./ui/avatar";
import sarahImage from 'figma:asset/c97d6d7d7977dba79d845fedf10356755e84860e.png';
import senthilImage from 'figma:asset/95603fc86731e78daf6d00400376d1433b6499b9.png';
import sheenaImage from 'figma:asset/5c4636b2a1c4e1fb93da10422c10d9d62afb4379.png';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Kamya Mehra",
      location: "Fashion Designer",
      text: "After 15 years of diabetes on medication and dealing with menopausal symptoms, I felt trapped. Now I feel young, healthy and free - eating without fear, travelling and truly living.",
      initials: "KM",
      image: sarahImage
    },
    {
      name: "Senthil",
      location: "Software Engineer", 
      text: "I used to struggle with migraines, acidity, and high blood pressure. I felt drained and unfocused. The Zen Axis program turned that around—I feel clear, light, and myself again.",
      initials: "S",
      image: senthilImage
    },
    {
      name: "Sheena",
      location: "Entrepreneur",
      text: "This program was different from anything I've tried. They helped me understand my body and its signals. I've lost 10 kgs, but more importantly, I feel energized, my gut feels lighter, and I can focus better.",
      initials: "S",
      image: sheenaImage
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
      
      <div className="container max-w-screen-xl px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="wellness-heading-main text-black mb-6">
            Meet the <span className="wellness-heading-emphasis energy-blue">Achievers</span>
          </h2>
          <p className="content-sleek-lg text-black max-w-2xl">
            Discover those who've taken charge of their health through our program. <span className="hidden lg:block"></span>Their success stories are proof that lasting change is possible. <span className="hidden lg:block"></span>From overcoming health challenges to thriving with energy, these real <span className="hidden lg:block"></span>transformations will inspire you to take that first step towards <span className="hidden lg:block"></span>your health journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white/90 transition-all duration-300 flex flex-col h-full">
              {/* Featured Image */}
              {testimonial.image && (
                <div className="relative w-full h-[380px] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - ZenAxis client`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Quote */}
              <div className="relative flex-grow mb-4">
                <svg
                  className="absolute -top-2 -left-2 w-6 h-6 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <p className="content-sleek-lg text-black font-normal italic relative z-10 pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author - Fixed position at bottom */}
              <div className="flex items-center space-x-4 pt-3 border-t border-gray-100 pl-6 mt-auto">
                {!testimonial.image && (
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gray-100 text-black">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <p className="wellness-heading-main text-base" style={{ color: 'var(--energy-blue)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sleek-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="content-sleek-lg text-black mb-8" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
            Ready to start your own transformation journey?
          </p>
          <div className="flex justify-center">
            <button 
              className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg uppercase"
              onClick={() => window.location.hash = 'connect-with-us'}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}