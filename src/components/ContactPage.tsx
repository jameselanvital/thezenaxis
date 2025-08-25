import womanImage from 'figma:asset/9f0a041971af18611cf56c84a1ddf406c4c03226.png';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users, Heart } from "lucide-react"
import { useState } from "react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // You would integrate with your backend/email service here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center pt-8 sm:pt-10 lg:pt-12 xl:pt-16 pb-0">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1">
              <h1 className="hero-eternal-joy text-black mb-4 sm:mb-6">
                Connect with<br /><span className="energy-blue italic">The Zen Axis</span>
              </h1>
              <p className="hero-subtitle-18pt text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Your journey to optimal wellness starts with a conversation. Reach out to discover how functional medicine can transform your health.
              </p>

              {/* Quick Contact Info */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-energy-blue" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base text-black font-medium">+91 8825630815</p>
                    <p className="text-xs sm:text-sm text-gray-600">Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-energy-blue" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base text-black font-medium">info@thezenaxis.com</p>
                    <p className="text-xs sm:text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-energy-blue" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base text-black font-medium">Online Services</p>
                    <p className="text-xs sm:text-sm text-gray-600">Our services are delivered entirely online</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto min-h-[48px] text-base"
                  onClick={() => {
                    const element = document.getElementById('wellness-journey-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-7 order-1 lg:order-2 mb-4 lg:mb-0 lg:-mb-[35px]">
              <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                <img
                  src={womanImage}
                  alt="Wellness consultant ready to help you"
                  className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section id="wellness-journey-form" className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="wellness-heading-main text-black mb-3 sm:mb-4 px-2">
              Start Your <span className="wellness-heading-emphasis energy-blue">Wellness Journey</span>
            </h2>
            <p className="wellness-content-text text-gray-700 max-w-3xl mx-auto px-2 sm:px-4 lg:px-0">
              Fill out the form below and our wellness experts will get back to you within 24 hours to discuss your health goals and create a personalized plan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl text-black">Send us a Message</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    Share your health concerns and we'll guide you towards optimal wellness.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-black">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-white border-gray-300 focus:border-energy-blue"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-black">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-white border-gray-300 focus:border-energy-blue"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-black">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white border-gray-300 focus:border-energy-blue"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-black">Health Concern</Label>
                        <Select onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger className="bg-white border-gray-300 focus:border-energy-blue">
                            <SelectValue placeholder="Select your primary concern" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diabetes">Diabetes</SelectItem>
                            <SelectItem value="obesity">Weight Management</SelectItem>
                            <SelectItem value="autoimmune">Autoimmune Disorders</SelectItem>
                            <SelectItem value="digestive">Digestive Issues</SelectItem>
                            <SelectItem value="thyroid">Thyroid Problems</SelectItem>
                            <SelectItem value="hormonal">Hormonal Imbalances</SelectItem>
                            <SelectItem value="skin">Skin Conditions</SelectItem>
                            <SelectItem value="fatigue">Chronic Fatigue</SelectItem>
                            <SelectItem value="pain">Chronic Pain</SelectItem>
                            <SelectItem value="other">Other Health Concerns</SelectItem>
                            <SelectItem value="general">General Wellness</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-preference" className="text-sm font-medium text-black">Preferred Contact</Label>
                        <Select onValueChange={(value) => handleInputChange('preferredContact', value)}>
                          <SelectTrigger className="bg-white border-gray-300 focus:border-energy-blue">
                            <SelectValue placeholder="How should we reach you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="video">Video Call</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-black">Tell us about your health journey</Label>
                      <Textarea
                        id="message"
                        placeholder="Share your symptoms, previous treatments, health goals, or any specific questions you have..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-white border-gray-300 focus:border-energy-blue min-h-[120px] resize-none"
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="button" 
                      size="lg" 
                      className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto min-h-[48px] text-base"
                      onClick={(e) => {
                        e.preventDefault();
                        const subject = encodeURIComponent('Wellness Consultation Inquiry');
                        const body = encodeURIComponent(`Hello,

I'm interested in learning more about your wellness services. Here are my details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Health Concern: ${formData.subject}
Preferred Contact: ${formData.preferredContact}

Message:
${formData.message}

Please get back to me to schedule a consultation.

Best regards,
${formData.name}`);
                        window.location.href = `mailto:info@thezenaxis.com?subject=${subject}&body=${body}`;
                      }}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-6">
              {/* Online Services */}
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-black flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-energy-blue" />
                    Our Service Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-black">100% Online Consultations</h4>
                    <p className="text-xs text-gray-600">Our services are delivered entirely online</p>
                    <p className="text-xs text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-black">Global Reach</h4>
                    <p className="text-xs text-gray-600">Accessible from anywhere in the world</p>
                    <p className="text-xs text-gray-600">Same quality care, delivered digitally</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-black">Personalized Approach</h4>
                    <p className="text-xs text-gray-600">One-on-one video consultations</p>
                    <p className="text-xs text-gray-600">Comprehensive virtual health assessments</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-black flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-energy-blue" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-gray-300 hover:border-energy-blue">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-300 hover:border-energy-blue">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-300 hover:border-energy-blue">
                    <Users className="w-4 h-4 mr-2" />
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-energy-blue/5 border border-energy-blue/20 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-black flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-energy-blue" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    For urgent health concerns or existing patient support.
                  </p>
                  <Button className="bg-energy-blue text-white hover:bg-energy-blue/90 w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +91 8825630815
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="wellness-heading-main text-black mb-3 sm:mb-4 px-2">
              Frequently Asked <span className="wellness-heading-emphasis energy-blue">Questions</span>
            </h2>
            <p className="text-sleek-sm text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our functional medicine approach and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base font-medium text-black mb-2">What is functional medicine?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Functional medicine addresses the root causes of illness by looking at the body as an interconnected system, rather than treating isolated symptoms.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base font-medium text-black mb-2">How long does treatment take?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most patients see improvements within 2-6 months, though this varies based on individual health conditions and compliance with treatment protocols.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base font-medium text-black mb-2">Do you accept insurance?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We provide detailed receipts for insurance reimbursement. Many insurance plans cover functional medicine consultations and lab tests.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base font-medium text-black mb-2">What's included in the consultation?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A comprehensive health history review, physical assessment, personalized treatment plan, and ongoing support throughout your wellness journey.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base font-medium text-black mb-2">Can you treat multiple conditions?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, our holistic approach often addresses multiple health issues simultaneously by targeting underlying imbalances and systemic dysfunction.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base font-medium text-black mb-2">Is online consultation available?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, we offer comprehensive online consultations for patients who cannot visit our physical locations, with the same quality of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-10 lg:py-12 bg-black">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="hero-eternal-joy text-white mb-3 sm:mb-4 px-2">
            Ready to Transform Your <span className="text-white italic">Health?</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4 lg:px-0">
            Join thousands who have discovered optimal wellness through functional medicine. Your journey to vibrant health starts with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto min-h-[48px] text-base">
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto min-h-[48px] text-base">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}