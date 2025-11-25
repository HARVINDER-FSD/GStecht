import { Code, Smartphone, Zap, Lock, Search, Globe, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { UniqueServiceHero } from '../../components/UniqueServiceHero';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored websites built with cutting-edge technologies to meet your unique requirements.',
      gradient: 'from-purple-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices and screen sizes.',
      gradient: 'from-blue-500 to-cyan-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast loading speeds for better user experience and SEO.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Built-in security features to protect your site and user data.',
      gradient: 'from-red-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Search,
      title: 'SEO-Friendly',
      description: 'Clean code and structure optimized for search engines.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Globe,
      title: 'Content Management',
      description: 'Easy-to-use CMS for updating content without technical knowledge.',
      gradient: 'from-cyan-500 to-blue-600',
      link: '/contact',
      linkText: 'Get Started',
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
      <UniqueServiceHero
        badge="Modern Web Solutions"
        badgeIcon={Code}
        title="Website Development"
        highlightText="Built for Success"
        description="Build powerful, scalable websites that drive business growth. From simple landing pages to complex web applications, we create digital experiences that users love."
        ctaText="Build Your Website"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80"
        imageAlt="Modern Website Development"
        variant="minimal"
        accentColor="purple"
      />

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

      <section className="relative py-16 sm:py-20 md:py-24 bg-purple-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Let's create a stunning website that represents your brand and drives business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-50 shadow-xl">
                Start Your Project
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
