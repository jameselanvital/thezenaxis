import svgPaths from "../imports/svg-494zffibmk";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const firstName = formData.get('firstName') as string;
      const secondName = formData.get('secondName') as string;
      const mobile = formData.get('mobile') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      // Validate required fields
      if (!firstName || !mobile || !email || !message) {
        toast.error("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      // Simulate form submission delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to thank you page
      window.location.hash = 'thank-you';
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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