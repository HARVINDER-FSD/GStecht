import { useState } from 'react';
import { Search, TrendingUp, BarChart, FileText, Target, CheckCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ServiceFeatures } from '../../components/ServiceFeatures';
import { SEOIcon3D } from '../../components/icons/Icon3DSVG';
import { BookingForm } from '../../components/BookingForm';

export const SEO = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const features = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'In-depth analysis to identify high-value keywords that drive qualified traffic.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: FileText,
      title: 'On-Page Optimization',
      description: 'Optimize your content, meta tags, and site structure for maximum visibility.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Link Building',
      description: 'Build high-quality backlinks that boost your domain authority and rankings.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: BarChart,
      title: 'Technical SEO',
      description: 'Ensure your site is technically sound with proper indexing and site speed.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Target,
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: CheckCircle,
      title: 'SEO Audits',
      description: 'Comprehensive analysis of your site\'s SEO health with actionable recommendations.',
      gradient: 'from-teal-500 to-green-600',
    },
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings for target keywords',
    'Higher conversion rates from qualified leads',
    'Long-term sustainable growth',
    'Better user experience and site performance',
    'Competitive advantage in your industry',
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">Rank #1 on Google</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                SEO Services That <span className="text-blue-600">Drive Results</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Dominate search results and drive organic traffic with our proven SEO strategies. We help businesses rank higher, attract more visitors, and convert them into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Get Free SEO Audit
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <SEOIcon3D size={300} className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceFeatures
        title="Our Services"
        subtitle="Comprehensive SEO Services"
        description="Everything you need to dominate search engine results and drive sustainable organic growth"
        features={features}
      />

      <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why SEO Matters</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Search Engine Optimization is one of the most cost-effective ways to drive qualified traffic to your website. When done right, SEO delivers long-term results that compound over time.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our data-driven approach combines technical expertise with creative content strategies to help you rank for the keywords that matter most to your business.
              </p>
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
            <div>
              <Card className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white shadow-2xl border-0">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Our SEO Process</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">1</div>
                          <h4 className="font-bold text-xl">Research & Analysis</h4>
                        </div>
                        <p className="text-blue-100 ml-14 leading-relaxed">Comprehensive audit and competitor analysis to identify opportunities</p>
                      </div>
                      <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">2</div>
                          <h4 className="font-bold text-xl">Strategy Development</h4>
                        </div>
                        <p className="text-blue-100 ml-14 leading-relaxed">Custom roadmap tailored to your business goals and target audience</p>
                      </div>
                      <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">3</div>
                          <h4 className="font-bold text-xl">Implementation</h4>
                        </div>
                        <p className="text-blue-100 ml-14 leading-relaxed">Execute on-page, off-page, and technical SEO optimizations</p>
                      </div>
                      <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">4</div>
                          <h4 className="font-bold text-xl">Monitor & Optimize</h4>
                        </div>
                        <p className="text-blue-100 ml-14 leading-relaxed">Continuous tracking, testing, and improvement for maximum results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Boost Your Rankings?</h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Get a free SEO audit and discover opportunities to improve your search visibility and drive more organic traffic
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-50 shadow-2xl hover:shadow-glow group"
              onClick={() => setIsBookingOpen(true)}
            >
              Claim Your Free Audit <Search className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Expert Analysis</span>
            </div>
          </div>
        </div>
      </section>

      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        serviceType="SEO Services"
      />
    </div>
  );
};
