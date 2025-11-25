import { Palette, Image, Layout, FileText, Package, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { UniqueServiceHero } from '../../components/UniqueServiceHero';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const GraphicDesign = () => {
  const features = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Create memorable logos, color schemes, and visual identities that represent your brand.',
      gradient: 'from-pink-500 to-rose-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Image,
      title: 'Marketing Materials',
      description: 'Eye-catching designs for brochures, flyers, banners, and promotional materials.',
      gradient: 'from-purple-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Layout,
      title: 'Web Graphics',
      description: 'Custom graphics, icons, and visual elements for websites and apps.',
      gradient: 'from-blue-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: FileText,
      title: 'Social Media Graphics',
      description: 'Engaging visuals optimized for all social media platforms.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Product packaging that stands out on shelves and online.',
      gradient: 'from-orange-500 to-red-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Sparkles,
      title: 'Infographics',
      description: 'Data visualization that makes complex information easy to understand.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
  ];

  const benefits = [
    'Professional designs that elevate your brand',
    'Consistent visual identity across all platforms',
    'Increased engagement with compelling visuals',
    'Stand out from competitors',
    'Fast turnaround times without compromising quality',
    'Unlimited revisions until you\'re satisfied',
  ];

  return (
    <div className="min-h-screen pt-20">
      <UniqueServiceHero
        badge="Creative Excellence"
        badgeIcon={Palette}
        title="Graphic Design"
        highlightText="That Captivates"
        description="Bring your vision to life with stunning graphic designs that capture attention and communicate your message effectively. Our creative team delivers exceptional designs for all your needs."
        ctaText="Start Your Design"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80"
        imageAlt="Creative Graphic Design Work"
        variant="dots"
        accentColor="pink"
      />

      <ServiceFeatures
        title="Our Services"
        subtitle="Complete Graphic Design Solutions"
        description="From brand identity to marketing materials, we design it all"
        features={features}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Design Services</h2>
              <p className="text-lg text-gray-600">Create visuals that make a lasting impression</p>
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

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-pink-600 to-purple-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Let's create stunning designs that capture attention and drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-50 shadow-xl">
                Start Your Project
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
