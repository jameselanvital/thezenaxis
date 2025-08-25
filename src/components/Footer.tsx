import { Separator } from "./ui/separator"
import { Logo } from "./Logo"
import { Heart, Activity, Zap, Brain, Shield, Stethoscope, CircleDot, AlertCircle, Eye, Droplets, Baby, Mail, Phone, MapPin } from "lucide-react"

const wellnessCategories = [
  {
    title: "Systemic & Metabolic Disorders",
    conditions: [
      { name: "Obesity", href: "#challenges/obesity", icon: Activity },
      { name: "Type 2 Diabetes Mellitus", href: "#challenges/diabetes", icon: Droplets },
      { name: "High Cholesterol", href: "#challenges/cholesterol", icon: Heart },
      { name: "Chronic Fatigue", href: "#challenges/fatigue", icon: Zap },
      { name: "Chronic Pain", href: "#challenges/pain", icon: AlertCircle },
      { name: "Autoimmune Condition", href: "#challenges/autoimmune", icon: Shield }
    ]
  },
  {
    title: "Digestive and Gut Health",
    conditions: [
      { name: "Acidity / GERD / Gastritis", href: "#challenges/gerd", icon: CircleDot },
      { name: "Irritable Bowel Syndrome", href: "#challenges/ibs", icon: AlertCircle },
      { name: "Food Intolerances", href: "#challenges/food-intolerances", icon: Eye },
      { name: "Gut Dysbiosis", href: "#challenges/gut-dysbiosis", icon: Activity }
    ]
  },
  {
    title: "Thyroid and Hormonal Health",
    conditions: [
      { name: "Hypothyroidism", href: "#challenges/hypothyroidism", icon: Brain },
      { name: "Hashimoto's Thyroiditis", href: "#challenges/hashimotos", icon: Shield }
    ]
  },
  {
    title: "Skin Conditions",
    conditions: [
      { name: "Acne", href: "#challenges/acne", icon: Eye },
      { name: "Eczema", href: "#challenges/eczema", icon: AlertCircle },
      { name: "Psoriasis", href: "#challenges/psoriasis", icon: Shield }
    ]
  },
  {
    title: "Liver Health",
    conditions: [
      { name: "Non Alcoholic Fatty Liver Disease", href: "#challenges/nafld", icon: Stethoscope }
    ]
  },
  {
    title: "Reproductive and Hormonal Health",
    conditions: [
      { name: "Polycystic Ovary Syndrome", href: "#challenges/pcos", icon: Baby }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container max-w-screen-xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12 lg:items-start">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="footer" />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              A collective of health and wellness professionals dedicated to creating societal change through 
              awareness, empathy, and healing—empowering individuals to live the life they wish for and are 
              truly meant to lead.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a 
                  href="mailto:info@thezenaxis.com" 
                  className="text-sm text-gray-300 hover:text-energy-blue transition-colors"
                >
                  info@thezenaxis.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a 
                  href="tel:+918825630815" 
                  className="text-sm text-gray-300 hover:text-energy-blue transition-colors"
                >
                  +91 8825630815
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Online Consultations Worldwide</span>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                Disclaimer: To protect client confidentiality, we have anonymized the identities of our clients featured in these case studies, which are based on real results achieved through our program.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-12">
            <h3 className="font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-we-help" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  How We Help
                </a>
              </li>
              <li>
                <a href="#our-story" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#connect-with-us" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Connect With Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Free Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Wellness Challenges - Primary Conditions */}
          <div className="lg:pt-12">
            <h3 className="font-medium text-white mb-6">Popular Wellness Challenges</h3>
            <ul className="space-y-3">
              <li>
                <a href="#challenges/obesity" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <Activity className="w-3 h-3" />
                  Obesity
                </a>
              </li>
              <li>
                <a href="#challenges/diabetes" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <Droplets className="w-3 h-3" />
                  Type 2 Diabetes
                </a>
              </li>
              <li>
                <a href="#challenges/cholesterol" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <Heart className="w-3 h-3" />
                  High Cholesterol
                </a>
              </li>
              <li>
                <a href="#challenges/fatigue" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  Chronic Fatigue
                </a>
              </li>
              <li>
                <a href="#challenges/ibs" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <AlertCircle className="w-3 h-3" />
                  IBS
                </a>
              </li>
              <li>
                <a href="#challenges/autoimmune" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  Autoimmune Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* All Wellness Categories */}
          <div className="lg:pt-12">
            <h3 className="font-medium text-white mb-6">All Wellness Categories</h3>
            <ul className="space-y-2">
              {wellnessCategories.map((category, index) => (
                <li key={index}>
                  <details className="group">
                    <summary className="text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer list-none flex items-center gap-2">
                      <span className="text-xs">▶</span>
                      <span className="group-open:hidden">{category.title}</span>
                      <span className="hidden group-open:inline">{category.title}</span>
                    </summary>
                    <ul className="mt-2 ml-4 space-y-1">
                      {category.conditions.map((condition, conditionIndex) => (
                        <li key={conditionIndex}>
                          <a 
                            href={condition.href}
                            className="text-xs text-gray-400 hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
                          >
                            <condition.icon className="w-2.5 h-2.5" />
                            {condition.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <span>© 2025-2026 The Zen Axis. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-gray-300 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-gray-300 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Made with care for your wellness journey</span>
          </div>
        </div>
      </div>
    </footer>
  )
}