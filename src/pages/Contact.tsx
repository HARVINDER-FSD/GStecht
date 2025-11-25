import { useState, FormEvent, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again or contact us directly.');
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get In Touch</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Ready to grow your business? Let's discuss how we can help you achieve your goals
            </p>
          </div> */}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Two Column Layout: Contact Info + Form */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Contact Info Cards */}
            <div className="w-full lg:w-2/5 space-y-4 sm:space-y-6">
              <div className="hidden lg:block">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">We'd love to hear from you. Choose your preferred way to reach us.</p>
              </div>

              <div className="space-y-3 sm:space-y-4 hidden lg:block">
                <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">+1 (555) 123-4567</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">info@digitalpro.com</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">24/7 support available</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Office</h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">123 Business Street</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 hidden lg:block">
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Quick Response</h3>
                <p className="text-xs sm:text-sm text-gray-600">We typically respond within 2-4 hours during business hours.</p>
              </div>
            </div>

            {/* Right Column - 3D Mobile Emulator Style Form */}
            <div className="w-full lg:w-3/5">
              <div className="relative">
              {/* Mobile Frame - 3D Effect */}
              <div className="relative mx-auto max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px]">
                {/* Phone Shadow/Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] transform rotate-1 scale-105 opacity-20 blur-xl"></div>
                
                {/* Phone Body */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border-4 sm:border-6 border-gray-800">
                  {/* Phone Notch with Camera */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-36 h-6 sm:h-7 bg-gray-900 rounded-b-3xl z-20 flex items-center justify-center gap-2 px-4">
                    {/* Speaker Grill */}
                    <div className="w-12 h-1 bg-gray-700 rounded-full opacity-60"></div>
                    
                    {/* Front Camera - Realistic */}
                    <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3">
                      {/* Camera outer ring */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full"></div>
                      {/* Camera lens */}
                      <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 to-black rounded-full"></div>
                      {/* Lens reflection */}
                      <div className="absolute top-[2px] left-[2px] w-1 h-1 bg-blue-400 rounded-full opacity-40 blur-[0.5px]"></div>
                      {/* Glass shine */}
                      <div className="absolute top-[1px] right-[1px] w-[3px] h-[3px] bg-white rounded-full opacity-30"></div>
                    </div>
                  </div>
                  
                  {/* Screen - Full height to fill phone */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-inner min-h-[680px] sm:min-h-[720px] flex flex-col">
                    {/* Status Bar with Icons */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 flex items-center justify-between text-white text-xs flex-shrink-0">
                      {/* Left: Time */}
                      <span className="font-semibold">9:41</span>
                      
                      {/* Center: Title */}
                      <span className="font-semibold">Contact Form</span>
                      
                      {/* Right: Status Icons */}
                      <div className="flex items-center gap-1.5">
                        {/* Network Signal */}
                        <div className="flex items-end gap-[1px]">
                          <div className="w-[2px] h-1 bg-white rounded-full"></div>
                          <div className="w-[2px] h-1.5 bg-white rounded-full"></div>
                          <div className="w-[2px] h-2 bg-white rounded-full"></div>
                          <div className="w-[2px] h-2.5 bg-white rounded-full"></div>
                        </div>
                        
                        {/* WiFi */}
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        
                        {/* Battery */}
                        <div className="flex items-center gap-[1px]">
                          <div className="w-5 h-2.5 border border-white rounded-sm flex items-center px-[1px]">
                            <div className="w-full h-1.5 bg-white rounded-[1px]"></div>
                          </div>
                          <div className="w-[1px] h-1 bg-white rounded-r-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Form Content - Flex grow to fill remaining space */}
                    <div 
                      ref={formContainerRef}
                      className="p-4 sm:p-5 pb-16 sm:pb-20 lg:max-h-[600px] lg:overflow-y-auto scrollbar-hide flex-grow"
                    >
                      {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                      <p className="text-sm text-gray-600 mb-6">We'll get back to you within 24 hours</p> */}

                      {submitted && (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 animate-slide-up">
                          <p className="text-green-800 font-semibold text-sm">Thank you for your message!</p>
                          <p className="text-green-700 text-xs mt-1">We'll get back to you as soon as possible.</p>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        <Input
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Name"
                        />
                        
                        <Input
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Email"
                        />

                        <Input
                          label="Phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                        />
                        
                        <Input
                          label="Company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company"
                        />

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Service Interested In
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors text-sm"
                            required
                          >
                            <option value="">Select a service</option>
                            <option value="seo">SEO Services</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="google-my-business">Google My Business</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="website-development">Website Development</option>
                            <option value="ppc">PPC Advertising</option>
                            <option value="social-media-ads">Social Media Ads</option>
                            <option value="app-development">App Development</option>
                          </select>
                        </div>

                        <Textarea
                          label="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="Your message..."
                        />

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <Send className="ml-2 w-5 h-5" />
                        </Button>
                      </form>
                    </div>
                    
                    {/* Bottom Navigation Bar - iPhone Style (Decorative) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 flex items-center justify-around pointer-events-none">
                      <div className="flex flex-col items-center gap-1 text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-[10px] font-medium">Home</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1 text-blue-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[10px] font-medium">Contact</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1 text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-[10px] font-medium">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
