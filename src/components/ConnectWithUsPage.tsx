import svgPaths from "../imports/svg-494zffibmk";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

function TheZenAxisLogo() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 scale-75 sm:scale-90 md:scale-100 origin-left">
        <div className="absolute bottom-[93.162%] left-[5.556%] overflow-clip right-[77.578%] top-[1.962%]">
          <div className="absolute bottom-[78.347%] left-[61.335%] right-[34.082%] top-[6.467%]">
            <div className="absolute bottom-[-2.301%] left-[-2.879%] right-[-2.741%] top-[-1.678%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 17">
                <path d={svgPaths.p2768f00} fill="#4FC8ED" stroke="#030303" strokeMiterlimit="10" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[71.443%] left-[61.302%] right-[34.189%] top-[18.405%]">
            <div className="absolute bottom-[-2.477%] left-[-5.695%] right-[-3.151%] top-[-4.543%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
                <path d={svgPaths.p4d8b500} fill="#0D90B3" stroke="#0D0E0E" strokeMiterlimit="10" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[64.075%] left-[57.638%] right-[35.569%] top-[19.129%]">
            <div className="absolute bottom-[-1.578%] left-[-1.683%] right-[-2.117%] top-[-2.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p26564272} fill="#4FC8ED" stroke="#030303" strokeMiterlimit="10" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[15.921%] font-['Lato:Regular',_sans-serif] leading-[0] left-[15.979%] not-italic right-[2.911%] text-[#094e91] text-[clamp(24px,5vw,48px)] text-left text-nowrap top-[25.747%]">
            <p className="block leading-[normal] whitespace-pre">ZENAXIS</p>
          </div>
          <div className="absolute bottom-[43.528%] font-['Lato:Regular',_sans-serif] leading-[0] left-[1.235%] not-italic right-[84.354%] text-[#0d8fb2] text-[clamp(12px,2.5vw,18px)] text-left text-nowrap top-[34.346%]">
            <p className="block leading-[normal] whitespace-pre">THE</p>
          </div>
          <div className="absolute bottom-[0.764%] font-['Lato:Italic',_sans-serif] italic leading-[0] left-[14.032%] right-[34.914%] text-[#0d8fb2] text-[clamp(10px,2vw,14px)] text-left text-nowrap top-[82.138%]">
            <p className="leading-[normal] whitespace-pre">
              <span className="text-[#094e91]">Feel Light,</span>
              <span>{` Live Bright`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConnectWithUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      
      // Add Web3Forms access key
      formData.append('access_key', 'b570ccbc-ea8c-4806-9de3-45f172bc6cde')
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        // Reset form
        ;(e.target as HTMLFormElement).reset()
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        console.log('Error', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Show success message if form submitted successfully
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white relative flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-black mb-2">Thank You!</h1>
            <p className="text-gray-600">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
          </div>
          <Button 
            onClick={() => window.location.hash = 'contact'}
            className="bg-gray-800 text-white hover:bg-gray-900"
          >
            Return to Contact
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header Logo */}
      <div className="container-responsive pt-4 sm:pt-6 md:pt-8 lg:pt-12">
        <div className="relative h-16 sm:h-20 md:h-24 w-full max-w-xs sm:max-w-sm md:max-w-md">
          <TheZenAxisLogo />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive space-responsive-y">
        {/* Main Headline */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="hero-eternal-joy text-black mb-4 sm:mb-6 px-4">
            Take the First Step Toward <span className="energy-blue italic font-medium">True Wellness</span>
          </h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      There was an error sending your message. Please try again.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Primary Concern Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="primaryConcern" className="text-responsive-sm font-normal text-black">
                Primary Concern*
              </Label>
              <Select name="primaryConcern" required>
                <SelectTrigger className="input-mobile-friendly border-gray-600 bg-white text-gray-900">
                  <SelectValue placeholder="Select your primary concern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-management">Weight Management</SelectItem>
                  <SelectItem value="digestive-health">Digestive Health</SelectItem>
                  <SelectItem value="energy-fatigue">Energy & Fatigue</SelectItem>
                  <SelectItem value="hormonal-balance">Hormonal Balance</SelectItem>
                  <SelectItem value="skin-health">Skin Health</SelectItem>
                  <SelectItem value="stress-anxiety">Stress & Anxiety</SelectItem>
                  <SelectItem value="sleep-issues">Sleep Issues</SelectItem>
                  <SelectItem value="chronic-pain">Chronic Pain</SelectItem>
                  <SelectItem value="immune-support">Immune Support</SelectItem>
                  <SelectItem value="heart-health">Heart Health</SelectItem>
                  <SelectItem value="mental-clarity">Mental Clarity & Focus</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name Fields Row */}
            <div className="responsive-grid responsive-grid-sm-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-responsive-sm font-normal text-black">
                  First Name*
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="input-mobile-friendly border-gray-600 bg-white text-gray-900 placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondName" className="text-responsive-sm font-normal text-black">
                  Second Name
                </Label>
                <Input
                  id="secondName"
                  name="secondName"
                  type="text"
                  placeholder="Enter your second name"
                  className="input-mobile-friendly border-gray-600 bg-white text-gray-900 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Contact Fields Row */}
            <div className="responsive-grid responsive-grid-sm-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-responsive-sm font-normal text-black">
                  Mobile*
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="input-mobile-friendly border-gray-600 bg-white text-gray-900 placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-responsive-sm font-normal text-black">
                  Email*
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input-mobile-friendly border-gray-600 bg-white text-gray-900 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-responsive-sm font-normal text-black">
                Message*
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what you'd like to achieve with your health."
                className="input-mobile-friendly border-gray-600 bg-white text-gray-900 placeholder:text-gray-500 min-h-[120px] sm:min-h-[140px] resize-none"
                required
              />
            </div>

            {/* Disclaimer */}
            <div className="text-responsive-sm text-gray-600 leading-relaxed p-4 bg-gray-50 rounded-md">
              <p>
                By submitting this form, you authorize us to contact you via phone or SMS, irrespective of your DND status, 
                in accordance with applicable regulations.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4 sm:pt-6">
              <Button 
                type="submit" 
                size="lg" 
                className="btn-mobile-friendly bg-gray-800 text-white hover:bg-gray-900 px-8 sm:px-12 md:px-20 py-3 sm:py-4 text-responsive-base font-semibold w-full sm:w-auto max-w-xs transition-all duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}