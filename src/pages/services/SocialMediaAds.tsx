import { Users, Target, TrendingUp, Image, BarChart, Zap, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { UniqueServiceHero } from '../../components/UniqueServiceHero';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const SocialMediaAds = () => {
  const features = [
    {
      icon: Users,
      title: 'Multi-Platform Campaigns',
      description: 'Facebook, Instagram, LinkedIn, Twitter, and TikTok advertising expertise.',
      gradient: 'from-pink-500 to-rose-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Precision targeting based on demographics, interests, and behaviors.',
      gradient: 'from-purple-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Image,
      title: 'Creative Development',
      description: 'Compelling ad creatives that stop scrolls and drive action.',
      gradient: 'from-blue-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: BarChart,
      title: 'A/B Testing',
      description: 'Systematic testing to identify the best performing ads.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Optimizing campaigns for maximum conversions and ROI.',
      gradient: 'from-orange-500 to-red-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Zap,
      title: 'Real-Time Management',
      description: 'Active monitoring and adjustments for optimal performance.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
  ];

  const benefits = [
    'Reach your exact target audience',
    'Increase brand awareness and engagement',
    'Generate qualified leads at scale',
    'Drive website traffic and conversions',
    'Retarget interested prospects',
    'Detailed analytics and reporting',
  ];

  return (
    <div className="min-h-screen pt-20">
      <UniqueServiceHero
        badge="Social Advertising"
        badgeIcon={Users}
        title="Social Media Ads"
        highlightText="That Convert"
        description="Harness the power of social media advertising to reach millions of potential customers. Our targeted campaigns deliver results across all major social platforms."
        ctaText="Start Advertising"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80"
        imageAlt="Social Media Marketing Engagement"
        variant="dots"
        accentColor="pink"
      />

      <ServiceFeatures
        title="Our Services"
        subtitle="Social Media Advertising Excellence"
        description="Reach and engage your audience across all major social platforms"
        features={features}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Social Media Ads Work</h2>
              <p className="text-lg text-gray-600">Connect with your audience where they spend their time</p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-pink-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Amplify Your Social Presence?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Launch high-performing social media campaigns that drive engagement and conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-50 shadow-xl">
                Get Started Now
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pink-700">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
