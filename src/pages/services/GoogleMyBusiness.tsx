import { MapPin, Star, Users, TrendingUp, Search, Image, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { UniqueServiceHero } from '../../components/UniqueServiceHero';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const GoogleMyBusiness = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Profile Optimization',
      description: 'Complete setup and optimization of your Google Business Profile for maximum visibility.',
      gradient: 'from-red-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Monitor, respond to, and generate more positive reviews from satisfied customers.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Engage with customers through posts, Q&A, and messaging features.',
      gradient: 'from-blue-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Detailed insights on how customers find and interact with your listing.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Search,
      title: 'Local SEO Integration',
      description: 'Boost your local search rankings and attract nearby customers.',
      gradient: 'from-purple-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Professional photos and regular updates to showcase your business.',
      gradient: 'from-cyan-500 to-blue-600',
      link: '/contact',
      linkText: 'Get Started',
    },
  ];

  const benefits = [
    'Appear in local search results and Google Maps',
    'Build trust with customer reviews and ratings',
    'Provide accurate business information to customers',
    'Increase foot traffic to physical locations',
    'Gain insights into customer behavior',
    'Free marketing that drives real results',
  ];

  return (
    <div className="min-h-screen pt-20">
      <UniqueServiceHero
        badge="Local Visibility"
        badgeIcon={MapPin}
        title="Google My Business"
        highlightText="Optimization"
        description="Dominate local search results with a fully optimized Google Business Profile. We help you attract more local customers and build a strong online reputation."
        ctaText="Optimize Your Listing"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
        imageAlt="Google My Business Local Search"
        variant="minimal"
        accentColor="orange"
      />

      <ServiceFeatures
        title="Our Services"
        subtitle="Complete GMB Management"
        description="Everything you need to dominate local search and attract more customers"
        features={features}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Google My Business Matters</h2>
              <p className="text-lg text-gray-600">Connect with local customers searching for your services</p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Local Search?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Get found by more local customers with a fully optimized Google Business Profile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-50 shadow-xl">
                Get Free Audit
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-700">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
