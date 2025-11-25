import { DollarSign, Target, BarChart, TrendingUp, Search, MousePointer, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { UniqueServiceHero } from '../../components/UniqueServiceHero';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const PPC = () => {
  const features = [
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Targeted search campaigns that put your business in front of ready-to-buy customers.',
      gradient: 'from-orange-500 to-red-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Target,
      title: 'Display Advertising',
      description: 'Eye-catching banner ads across the Google Display Network.',
      gradient: 'from-blue-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: MousePointer,
      title: 'Remarketing',
      description: 'Re-engage visitors who showed interest in your products or services.',
      gradient: 'from-purple-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: BarChart,
      title: 'Campaign Optimization',
      description: 'Continuous testing and refinement to maximize ROI.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Tracking',
      description: 'Detailed tracking to measure and improve campaign performance.',
      gradient: 'from-cyan-500 to-blue-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: DollarSign,
      title: 'Budget Management',
      description: 'Smart bid strategies that get the most value from your ad spend.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
  ];

  const benefits = [
    'Immediate visibility in search results',
    'Highly targeted traffic to your website',
    'Full control over your advertising budget',
    'Measurable ROI and performance metrics',
    'Quick results compared to organic marketing',
    'Competitive advantage in your market',
  ];

  return (
    <div className="min-h-screen pt-20">
      <UniqueServiceHero
        badge="Instant Results"
        badgeIcon={DollarSign}
        title="PPC Advertising"
        highlightText="Maximum ROI"
        description="Drive instant traffic and generate leads with targeted pay-per-click advertising campaigns. We manage your ads to deliver maximum ROI and sustainable growth."
        ctaText="Launch Campaign"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
        imageAlt="PPC Campaign Analytics Dashboard"
        variant="minimal"
        accentColor="orange"
      />

      <ServiceFeatures
        title="Our Services"
        subtitle="Complete PPC Management"
        description="Expert campaign management across all major advertising platforms"
        features={features}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our PPC Services</h2>
              <p className="text-lg text-gray-600">Get more from every advertising dollar</p>
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

      <section className="relative py-16 sm:py-20 md:py-24 bg-orange-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Start Advertising?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Launch profitable PPC campaigns that deliver immediate results and long-term growth
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
