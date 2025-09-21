import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { WellnessContent } from "./components/WellnessContent"
import { DecorativeSection } from "./components/DecorativeSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { WellnessCarousel } from "./components/WellnessCarousel"
import { TimelineSection } from "./components/TimelineSection"
import { HealthIssuesSection } from "./components/HealthIssuesSection"
import { ServicesSection } from "./components/ServicesSection"
import { Footer } from "./components/Footer"
import { ObesityPage } from "./components/conditions/ObesityPage"
import { DiabetesPage } from "./components/conditions/DiabetesPage"
import { CholesterolPage } from "./components/conditions/CholesterolPage"
import { FatiguePage } from "./components/conditions/FatiguePage"
import { PainPage } from "./components/conditions/PainPage"
import { AutoimmunePage } from "./components/conditions/AutoimmunePage"
import { GerdPage } from "./components/conditions/GerdPage"
import { IbsPage } from "./components/conditions/IbsPage"
import { FoodIntolerancesPage } from "./components/conditions/FoodIntolerancesPage"
import { GutDysbiosisPage } from "./components/conditions/GutDysbiosisPage"
import { HypothyroidismPage } from "./components/conditions/HypothyroidismPage"
import { HashimotosPage } from "./components/conditions/HashimotosPage"
import { AcnePage } from "./components/conditions/AcnePage"
import { EczemaPage } from "./components/conditions/EczemaPage"
import { PsoriasisPage } from "./components/conditions/PsoriasisPage"
import { NafldPage } from "./components/conditions/NafldPage"
import { PcosPage } from "./components/conditions/PcosPage"
import { ContactPage } from "./components/ContactPage"
import { HowWeHelpPage } from "./components/HowWeHelpPage"
import { OurStoryPage } from "./components/OurStoryPage"
import { ConnectWithUsPage } from "./components/ConnectWithUsPage"
import { ThankYouPage } from "./components/ThankYouPage"
import { SafariBrowserNotice } from "./components/SafariBrowserNotice"
import { Toaster } from "./components/ui/sonner"
import { useState, useEffect } from "react"
import { applySafariFixes, disableProblematicFeatures } from "./utils/safariDetection"

function getPageFromHash() {
  const hash = window.location.hash.slice(1) // Remove the #
  return hash || 'home'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash())

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
      // Scroll to top on page change for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Apply Safari-specific fixes
  useEffect(() => {
    applySafariFixes()
    disableProblematicFeatures()
  }, [])

  // Additional Safari fix for colorful overlay
  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) && 
                     /webkit/i.test(userAgent) && 
                     !/chrome/i.test(userAgent)
    
    if (isSafari) {
      // Add a style tag to specifically target the colorful overlay issue
      const style = document.createElement('style')
      style.textContent = `
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          /* Only target Safari and only disable backdrop-blur that causes issues */
          .hero-responsive [class*="backdrop-blur"],
          .testimonials [class*="backdrop-blur"],
          .timeline [class*="backdrop-blur"] {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(255, 255, 255, 0.95) !important;
          }
          
          /* Preserve header backdrop-blur */
          header [class*="backdrop-blur"] {
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            background: rgba(255, 255, 255, 0.95) !important;
          }
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'challenges/obesity':
        return <ObesityPage />
      case 'challenges/diabetes':
        return <DiabetesPage />
      case 'challenges/cholesterol':
        return <CholesterolPage />
      case 'challenges/fatigue':
        return <FatiguePage />
      case 'challenges/pain':
        return <PainPage />
      case 'challenges/autoimmune':
        return <AutoimmunePage />
      case 'challenges/gerd':
        return <GerdPage />
      case 'challenges/ibs':
        return <IbsPage />
      case 'challenges/food-intolerances':
        return <FoodIntolerancesPage />
      case 'challenges/gut-dysbiosis':
        return <GutDysbiosisPage />
      case 'challenges/hypothyroidism':
        return <HypothyroidismPage />
      case 'challenges/hashimotos':
        return <HashimotosPage />
      case 'challenges/acne':
        return <AcnePage />
      case 'challenges/eczema':
        return <EczemaPage />
      case 'challenges/psoriasis':
        return <PsoriasisPage />
      case 'challenges/nafld':
        return <NafldPage />
      case 'challenges/pcos':
        return <PcosPage />
      case 'contact':
        return <ContactPage />
      case 'how-we-help':
        return <HowWeHelpPage />
      case 'our-story':
        return <OurStoryPage />
      case 'connect-with-us':
        return <ConnectWithUsPage />
      case 'thank-you':
        return <ThankYouPage />
      default:
        return (
          <>
            <HeroSection />
            <WellnessContent />
            <DecorativeSection />
            <TestimonialsSection />
            <TimelineSection />
            <HealthIssuesSection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Safari Browser Notice */}
      <SafariBrowserNotice />
      
      {/* Safe area support for devices with notches */}
      <div className="safe-area-top">
        <Navigation />
      </div>
      
      {/* Main content with responsive container */}
      <main className="relative w-full">
        <div className="w-full">
          {renderPage()}
        </div>
      </main>
      
      {/* Footer with safe area support */}
      <div className="safe-area-bottom">
        <Footer />
      </div>

      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}