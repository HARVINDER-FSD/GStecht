import { useState } from 'react';
import { TrendingUp, Target, Users, BarChart, Mail, Zap, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { ServiceFeatures } from '../../components/ServiceFeatures';
import { DigitalMarketingIcon3D } from '../../components/icons/Icon3DSVG';
import { BookingForm } from '../../components/BookingForm';

export const DigitalMarketing = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const features = [
    {
      icon: TrendingUp,
      title: 'Strategy Development',
      description: 'Comprehensive digital marketing strategies aligned with your business goals.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Target,
      title: 'Content Marketing',
      description: 'Engaging content that attracts, educates, and converts your target audience.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Build and engage your community across all major social platforms.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to measure and optimize campaign performance.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes and scale your efforts efficiently.',
      gradient: 'from-yellow-500 to-orange-600',
    },
  ];

  const benefits = [
    'Increase brand awareness and online visibility',
    'Generate high-quality leads consistently',
    'Improve customer engagement and loyalty',
    'Maximize ROI across all marketing channels',
    'Data-driven decision making and optimization',
    'Integrated campaigns that work together',
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider bg-green-100 px-4 py-2 rounded-full">Full-Service Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Marketing <span className="text-green-600">That Delivers Results</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your online presence with comprehensive digital marketing strategies that drive real results. From content creation to campaign management, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Get Free Strategy Call
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-green-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <DigitalMarketingIcon3D size={300} className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceFeatures
        title="Our Services"
        subtitle="Complete Digital Marketing Solutions"
        description="Everything you need to succeed online, from strategy to execution"
        features={features}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-lg text-gray-600">Partner with experts who deliver measurable results</p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section id="case-studies" className="relative py-16 sm:py-20 md:py-24 bg-green-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Results That Speak</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              Real numbers from real campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: '300%', label: 'Average Traffic Increase' },
              { metric: '5x', label: 'ROI for Our Clients' },
              { metric: '85%', label: 'Lead Generation Growth' }
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl font-bold mb-3 text-green-200">{stat.metric}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-50 shadow-xl"
              onClick={() => setIsBookingOpen(true)}
            >
              Schedule Your Strategy Session
            </Button>
          </div>
        </div>
      </section>

      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        serviceType="Digital Marketing"
      />
    </div>
  );
};
