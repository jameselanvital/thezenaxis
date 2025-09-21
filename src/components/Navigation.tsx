"use client"

import * as React from "react"
import { ChevronDown, Heart, Activity, Zap, Brain, Shield, Stethoscope, CircleDot, AlertCircle, Eye, Droplets, Baby, Menu } from "lucide-react" 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { cn } from "./ui/utils"
import { Logo } from "./Logo"

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

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Force dark header styling aggressively with mobile-specific handling
  React.useEffect(() => {
    const forceDarkHeader = () => {
      if (headerRef.current) {
        const header = headerRef.current
        
        // Remove any conflicting classes first
        header.classList.remove('bg-white', 'bg-white/95', 'bg-gray-50', 'bg-background')
        
        // Apply dark styles with maximum priority
        header.style.setProperty('background', 'rgba(0, 0, 0, 0.95)', 'important')
        header.style.setProperty('background-color', 'rgba(0, 0, 0, 0.95)', 'important')
        header.style.setProperty('color', 'white', 'important')
        header.style.setProperty('backdrop-filter', 'blur(10px)', 'important')
        header.style.setProperty('-webkit-backdrop-filter', 'blur(10px)', 'important')
        header.style.setProperty('border-bottom', '1px solid rgba(255, 255, 255, 0.1)', 'important')
        
        // Ensure no gaps by removing margins/padding and positioning correctly
        header.style.setProperty('margin', '0', 'important')
        header.style.setProperty('padding', '0', 'important')
        header.style.setProperty('top', '0', 'important')
        header.style.setProperty('position', 'sticky', 'important')
        header.style.setProperty('width', '100%', 'important')
        
        // Mobile-specific styling
        const isMobile = window.innerWidth <= 768
        if (isMobile) {
          header.style.setProperty('background-image', 'none', 'important')
          header.style.setProperty('background-attachment', 'scroll', 'important')
          // Force hardware acceleration on mobile
          header.style.setProperty('transform', 'translateZ(0)', 'important')
          header.style.setProperty('-webkit-transform', 'translateZ(0)', 'important')
        }
        
        // Add the dark header class
        header.classList.add('force-dark-header', 'mobile-dark-header')
      }
      
      // Also apply to any other header elements globally
      const allHeaders = document.querySelectorAll('header')
      allHeaders.forEach(h => {
        const headerEl = h as HTMLElement
        headerEl.style.setProperty('background', 'rgba(0, 0, 0, 0.95)', 'important')
        headerEl.style.setProperty('background-color', 'rgba(0, 0, 0, 0.95)', 'important')
        headerEl.style.setProperty('color', 'white', 'important')
        headerEl.style.setProperty('margin', '0', 'important')
        headerEl.style.setProperty('padding', '0', 'important')
        headerEl.style.setProperty('top', '0', 'important')
        headerEl.classList.add('force-dark-header', 'mobile-dark-header')
        
        // Mobile-specific global styling
        const isMobile = window.innerWidth <= 768
        if (isMobile) {
          headerEl.style.setProperty('background-image', 'none', 'important')
          headerEl.style.setProperty('transform', 'translateZ(0)', 'important')
        }
      })
      
      // Remove margins from parent containers that might cause gaps
      const safeAreaContainers = document.querySelectorAll('.safe-area-top, [class*="safe-area"]')
      safeAreaContainers.forEach(container => {
        const containerEl = container as HTMLElement
        containerEl.style.setProperty('margin', '0', 'important')
        containerEl.style.setProperty('padding', '0', 'important')
        containerEl.style.setProperty('margin-top', '0', 'important')
        containerEl.style.setProperty('padding-top', '0', 'important')
      })
    }

    // Apply immediately and repeatedly with more frequent intervals for mobile
    forceDarkHeader()
    setTimeout(forceDarkHeader, 25)
    setTimeout(forceDarkHeader, 75)
    setTimeout(forceDarkHeader, 150)
    setTimeout(forceDarkHeader, 300)
    setTimeout(forceDarkHeader, 600)
    setTimeout(forceDarkHeader, 1000)
    
    // Apply on resize to handle mobile orientation changes
    const handleResize = () => {
      setTimeout(forceDarkHeader, 100)
    }
    window.addEventListener('resize', handleResize)
    
    // Apply on touch events for mobile
    const handleTouch = () => {
      setTimeout(forceDarkHeader, 50)
    }
    document.addEventListener('touchstart', handleTouch, { passive: true })
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  return (
    <header 
      ref={headerRef}
      className="force-dark-header dark-header-forced sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/10 text-white"
      style={{
        background: 'rgba(0, 0, 0, 0.95)',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        minHeight: '64px',
        margin: '0',
        padding: '0',
        position: 'sticky',
        top: '0',
        width: '100%',
        zIndex: '50'
      }}
    >
      <div className="container-responsive flex h-16 sm:h-20 md:h-24 lg:h-28 max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="flex items-center" onClick={closeMobileMenu}>
            <Logo variant="header" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center ml-10">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={cn(
                  "nav-sleek group inline-flex h-10 lg:h-12 w-max items-center justify-center rounded-md px-4 lg:px-6 py-2 transition-colors text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-sleek h-10 lg:h-12 px-4 lg:px-6 text-white hover:bg-white/10 data-[state=open]:bg-white/20">
                Wellness Challenges
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="nav-mega-menu w-[90vw] max-w-[1050px] p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {wellnessCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="px-3 py-3 border-r border-border/15 last:border-r-0">
                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-foreground/70 uppercase tracking-wider border-b border-border/20 pb-1.5 mb-2">
                            {category.title}
                          </h4>
                          <div className="space-y-0.5">
                            {category.conditions.map((condition, conditionIndex) => (
                              <ConditionItem
                                key={conditionIndex}
                                title={condition.name}
                                href={condition.href}
                                icon={condition.icon}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#how-we-help"
                className={cn(
                  "nav-sleek group inline-flex h-10 lg:h-12 w-max items-center justify-center rounded-md px-4 lg:px-6 py-2 transition-colors text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                )}
              >
                How We Help
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#our-story"
                className={cn(
                  "nav-sleek group inline-flex h-10 lg:h-12 w-max items-center justify-center rounded-md px-4 lg:px-6 py-2 transition-colors text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                )}
              >
                Our Story
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#connect-with-us"
                className={cn(
                  "nav-sleek group inline-flex h-10 lg:h-12 w-max items-center justify-center rounded-md px-4 lg:px-6 py-2 transition-colors text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                )}
              >
                Connect With Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="btn-mobile-friendly p-2 text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="text-left">Navigation</SheetTitle>
                <SheetDescription className="text-left">
                  Navigate through the website sections and wellness challenges
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {/* Home Link */}
                    <a
                      href="#"
                      className="nav-sleek block py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </a>
                    
                    {/* Wellness Challenges Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="nav-sleek flex items-center justify-between w-full py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        <span>Wellness Challenges</span>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {wellnessCategories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="ml-4">
                            <h4 className="text-xs font-medium text-foreground/70 uppercase tracking-wider py-2 px-2">
                              {category.title}
                            </h4>
                            <div className="space-y-1 ml-2">
                              {category.conditions.map((condition, conditionIndex) => (
                                <a
                                  key={conditionIndex}
                                  href={condition.href}
                                  className="flex items-center py-2 px-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  <condition.icon className="h-4 w-4 mr-3 text-muted-foreground/70" />
                                  {condition.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Other Navigation Links */}
                    <a
                      href="#how-we-help"
                      className="nav-sleek block py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={closeMobileMenu}
                    >
                      How We Help
                    </a>
                    
                    <a
                      href="#our-story"
                      className="nav-sleek block py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Our Story
                    </a>
                    
                    <a
                      href="#connect-with-us"
                      className="nav-sleek block py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Connect With Us
                    </a>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Spacer */}
        <div className="hidden lg:block flex-shrink-0 w-[200px] xl:w-[280px]"></div>
      </div>
    </header>
  )
}

const ConditionItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    icon: React.ComponentType<{ className?: string }>
  }
>(({ className, title, icon: Icon, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "group flex items-center justify-start py-1.5 pl-0 pr-2 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full btn-mobile-friendly",
          className
        )}
        {...props}
      >
        <div className="flex items-center w-full">
          <Icon className="h-3.5 w-3.5 text-muted-foreground/70 group-hover:text-accent-foreground transition-colors flex-shrink-0 mr-2" />
          <span className="text-xs font-normal leading-tight text-left flex-1 text-foreground/80 group-hover:text-foreground">
            {title}
          </span>
        </div>
      </a>
    </NavigationMenuLink>
  )
})
ConditionItem.displayName = "ConditionItem"