import { TrendingUp, Target, Users, BarChart, Mail, Zap, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { UniqueServiceHero } from '../../components/UniqueServiceHero';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const DigitalMarketing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Strategy Development',
      description: 'Comprehensive digital marketing strategies aligned with your business goals.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Target,
      title: 'Content Marketing',
      description: 'Engaging content that attracts, educates, and converts your target audience.',
      gradient: 'from-blue-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Build and engage your community across all major social platforms.',
      gradient: 'from-purple-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to measure and optimize campaign performance.',
      gradient: 'from-orange-500 to-red-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions.',
      gradient: 'from-cyan-500 to-blue-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes and scale your efforts efficiently.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
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
      <UniqueServiceHero
        badge="Full-Service Marketing"
        badgeIcon={TrendingUp}
        title="Digital Marketing"
        highlightText="That Delivers Results"
        description="Transform your online presence with comprehensive digital marketing strategies that drive real results. From content creation to campaign management, we handle it all."
        ctaText="Grow Your Business"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80"
        imageAlt="Digital Marketing Team Collaboration"
        variant="waves"
        accentColor="green"
      />

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

      <section className="relative py-16 sm:py-20 md:py-24 bg-green-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Let's create a digital marketing strategy that drives growth and delivers measurable results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-50 shadow-xl">
                Get Started Today
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
