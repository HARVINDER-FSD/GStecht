import { useState } from 'react';
import { ArrowRight, TrendingUp, Target, CheckCircle, Star } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { ModernHeroSection } from '../components/ModernHeroSection';
import { SEO } from '../components/SEO';
import { SEOIcon3D, DigitalMarketingIcon3D, SocialMediaIcon3D } from '../components/icons/Icon3DSVG';
import { BookingForm } from '../components/BookingForm';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const services = [
    {
      Icon3D: SEOIcon3D,
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
      path: '/services/seo',
    },
    {
      Icon3D: DigitalMarketingIcon3D,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to grow your online presence.',
      path: '/services/digital-marketing',
    },
    {
      Icon3D: SocialMediaIcon3D,
      title: 'Social Media Ads',
      description: 'Targeted advertising campaigns that convert on all major social platforms.',
      path: '/services/social-media-ads',
    },
  ];



  return (
    <div className="min-h-screen">
      <SEO 
        title="GS TECHT - Professional Web Development, SEO & Digital Marketing Services"
        description="Leading digital agency offering expert web development, mobile app development, SEO services, PPC advertising, and digital marketing solutions. Transform your business with data-driven strategies and cutting-edge technology."
        keywords="web development, mobile app development, SEO services, digital marketing, PPC advertising, social media marketing, graphic design, website design, app development, search engine optimization, local SEO, global SEO"
        canonical="https://gstecht.com/"
      />
      {/* Modern Professional Hero Section */}
      <ModernHeroSection />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">What We Offer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive digital solutions tailored to your business needs, designed to drive growth and maximize ROI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
            {services.map((service, index) => {
              const Icon3D = service.Icon3D;
              return (
                <ScrollReveal key={index} delay={index * 120}>
                  <Card hover className="text-center group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-all duration-300">
                        <Icon3D size={80} className="drop-shadow-lg" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">{service.description}</p>
                      <Link to={service.path} className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group-hover:gap-3 transition-all text-sm sm:text-base">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/services/seo">
              <Button size="lg" className="w-full sm:w-auto">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Particles Background */}
      <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-white">
        {/* Particles.js Background */}
        <ParticlesBackground />
        
        {/* Robot Hand Background - Responsive positioning */}
        <div 
          className="absolute inset-0 bg-no-repeat hidden lg:block opacity-30"
          style={{
            backgroundImage: 'url(/assets/2272466-removebg-preview1.png)',
            backgroundSize: 'auto 70%',
            backgroundPosition: 'left bottom',
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Ready to Grow Your Business?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals and drive measurable results
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg"
              onClick={() => setIsBookingOpen(true)}
            >
              Schedule a Consultation
            </Button>
            
            <Link to="/services/seo">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg border-2 border-blue-600"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        serviceType="General Consultation"
      />
    </div>
  );
};
