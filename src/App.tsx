import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { WellnessContent } from "./components/WellnessContent"
import { DecorativeSection } from "./components/DecorativeSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { TimelineSection } from "./components/TimelineSection"
import { HealthIssuesSection } from "./components/HealthIssuesSection"
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
import { Toaster } from "./components/ui/sonner"
import { useState, useEffect } from "react"


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

  // Comprehensive Safari compatibility fix for complete website functionality
  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) &&
      /webkit/i.test(userAgent) &&
      !/chrome/i.test(userAgent)

    if (isSafari) {
      // Add Safari-specific class for targeting
      document.body.classList.add('safari-browser')
      document.documentElement.classList.add('safari-browser')

      // Add comprehensive Safari compatibility styles
      const style = document.createElement('style')
      style.textContent = `
        /* Safari-specific fixes for complete website functionality */
        @supports (-webkit-appearance: none) and (not (appearance: none)) {
          
          /* Fix backdrop-blur issues that cause colorful overlays */
          [class*="backdrop-blur"]:not(header [class*="backdrop-blur"]) {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(255, 255, 255, 0.95) !important;
          }
          
          /* Ensure header works properly in Safari */
          header.sticky,
          header[class*="sticky"] {
            background: rgba(255, 255, 255, 0.98) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          /* Force hardware acceleration for all positioned elements */
          .absolute, .fixed, .relative, .sticky,
          .hero-responsive, .nav-responsive {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            will-change: transform;
          }
          
          /* Fix gradient rendering issues */
          [class*="bg-gradient"] {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            background-attachment: scroll !important;
          }
          
          /* Ensure proper image rendering */
          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
          
          /* Fix flexbox issues in Safari */
          .flex, [class*="flex"] {
            -webkit-flex-shrink: 0;
            flex-shrink: 0;
          }
          
          /* Fix CSS Grid issues in Safari */
          .grid, [class*="grid"] {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          /* Fix button and form element rendering */
          button, input, select, textarea {
            -webkit-appearance: none;
            appearance: none;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          /* Fix overflow and scrolling issues */
          body {
            -webkit-overflow-scrolling: touch;
            overflow-x: hidden;
          }
          
          /* Fix viewport units in Safari */
          .min-h-screen {
            min-height: 100vh;
            min-height: -webkit-fill-available;
          }
          
          /* Fix z-index stacking context issues */
          .relative {
            isolation: isolate;
          }
          
          /* Fix animation and transition issues */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Fix specific component issues */
          .testimonials, .timeline, .hero-section,
          .health-issues, .services, .footer {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          /* Fix navigation menu issues */
          .navigation-menu, [role="menu"], [role="menubar"] {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          
          /* Fix modal and overlay issues */
          .modal, .overlay, .sheet, .dialog {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
        }
        
        /* Additional Safari-specific media query fixes */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          /* Target Safari specifically */
          
          /* Fix color space issues */
          * {
            color-profile: sRGB;
          }
          
          /* Fix transform issues */
          .transform, [class*="transform"] {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          /* Fix shadow rendering */
          .shadow, [class*="shadow"] {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `
      document.head.appendChild(style)

      // Apply comprehensive JavaScript fixes
      const applyJavaScriptFixes = () => {
        // Fix backdrop-blur elements that cause colorful overlays
        const backdropElements = document.querySelectorAll('[class*="backdrop-blur"]:not(header [class*="backdrop-blur"])')
        backdropElements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.backdropFilter = 'none'
            ; (htmlElement.style as any).webkitBackdropFilter = 'none'
          htmlElement.style.background = 'rgba(255, 255, 255, 0.95)'
        })

        // Force hardware acceleration for all positioned elements
        const positionedElements = document.querySelectorAll('.absolute, .fixed, .relative, .sticky, .hero-responsive, .nav-responsive')
        positionedElements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.transform = 'translateZ(0)'
          htmlElement.style.webkitTransform = 'translateZ(0)'
          htmlElement.style.backfaceVisibility = 'hidden'
          htmlElement.style.webkitBackfaceVisibility = 'hidden'
        })

        // Fix gradient elements
        const gradientElements = document.querySelectorAll('[class*="bg-gradient"]')
        gradientElements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.transform = 'translate3d(0, 0, 0)'
          htmlElement.style.webkitTransform = 'translate3d(0, 0, 0)'
        })

        // Fix images
        const images = document.querySelectorAll('img')
        images.forEach(img => {
          img.style.transform = 'translateZ(0)'
          img.style.webkitTransform = 'translateZ(0)'
        })

        // Fix buttons and form elements
        const interactiveElements = document.querySelectorAll('button, input, select, textarea, a')
        interactiveElements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.transform = 'translateZ(0)'
          htmlElement.style.webkitTransform = 'translateZ(0)'
        })

        // Fix navigation and menu elements
        const navigationElements = document.querySelectorAll('.navigation-menu, [role="menu"], [role="menubar"], nav')
        navigationElements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.transform = 'translateZ(0)'
          htmlElement.style.webkitTransform = 'translateZ(0)'
          htmlElement.style.backfaceVisibility = 'hidden'
          htmlElement.style.webkitBackfaceVisibility = 'hidden'
        })
      }

      // Apply fixes immediately and on DOM changes
      applyJavaScriptFixes()
      setTimeout(applyJavaScriptFixes, 100)
      setTimeout(applyJavaScriptFixes, 500)
      setTimeout(applyJavaScriptFixes, 1000)

      // Apply fixes when new content is loaded (for dynamic content)
      const observer = new MutationObserver(() => {
        applyJavaScriptFixes()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      })

      // Fix scroll issues
      const handleScroll = () => {
        requestAnimationFrame(() => {
          const fixedElements = document.querySelectorAll('.fixed, .sticky')
          fixedElements.forEach(element => {
            const htmlElement = element as HTMLElement
            htmlElement.style.transform = 'translateZ(0)'
            htmlElement.style.webkitTransform = 'translateZ(0)'
          })
        })
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', applyJavaScriptFixes, { passive: true })

      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
        observer.disconnect()
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', applyJavaScriptFixes)
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