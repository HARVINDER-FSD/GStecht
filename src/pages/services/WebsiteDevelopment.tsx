import { useState } from 'react';
import { Code, Smartphone, Zap, Lock, Search, Globe, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { ServiceFeatures } from '../../components/ServiceFeatures';
import { WebDevIcon3D } from '../../components/icons/Icon3DSVG';
import { BookingForm } from '../../components/BookingForm';

export const WebsiteDevelopment = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored websites built with cutting-edge technologies to meet your unique requirements.',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices and screen sizes.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast loading speeds for better user experience and SEO.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Built-in security features to protect your site and user data.',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      icon: Search,
      title: 'SEO-Friendly',
      description: 'Clean code and structure optimized for search engines.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Globe,
      title: 'Content Management',
      description: 'Easy-to-use CMS for updating content without technical knowledge.',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const benefits = [
    'Professional websites that convert visitors into customers',
    'Scalable solutions that grow with your business',
    'Modern, user-friendly interfaces',
    'Cross-browser compatibility',
    'Ongoing support and maintenance',
    'Integration with third-party tools and services',
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider bg-purple-100 px-4 py-2 rounded-full">Modern Web Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Website Development <span className="text-purple-600">Built for Success</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Build powerful, scalable websites that drive business growth. From simple landing pages to complex web applications, we create digital experiences that users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <WebDevIcon3D size={300} className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceFeatures
        title="Our Services"
        subtitle="Complete Web Development Solutions"
        description="Everything you need to build a powerful online presence"
        features={features}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Development Services</h2>
              <p className="text-lg text-gray-600">Build websites that drive real business results</p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section id="portfolio" className="relative py-16 sm:py-20 md:py-24 bg-purple-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Technologies We Master</h2>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            We use cutting-edge technologies to build fast, secure, and scalable websites
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
              <div key={tech} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-xl font-bold">{tech}</div>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-gray-50 shadow-xl"
            onClick={() => setIsBookingOpen(true)}
          >
            Discuss Your Project
          </Button>
        </div>
      </section>

      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        serviceType="Website Development"
      />
    </div>
  );
};
