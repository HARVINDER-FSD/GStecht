import { ArrowRight, TrendingUp, Users, Target, CheckCircle, Star } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { ModernHeroSection } from '../components/ModernHeroSection';
import { SEO } from '../components/SEO';

export const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
      path: '/services/seo',
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to grow your online presence.',
      path: '/services/digital-marketing',
    },
    {
      icon: Users,
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

      {/* Overlapping Stats Cards */}
      <section className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 z-20 pb-8 sm:pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                {v:350, s:'%', l:'Website Traffic', icon: TrendingUp, color: 'from-green-500 to-emerald-600'},
                {v:180, s:'%', l:'Conversion Rate', icon: Target, color: 'from-blue-500 to-cyan-600'},
                {v:5, s:'x', l:'Average ROI', icon: CheckCircle, color: 'from-purple-500 to-pink-600'},
                {v:98, s:'%', l:'Satisfaction', icon: Star, color: 'from-orange-500 to-yellow-600'}
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={i} 
                    className="group bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100 hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1 sm:mb-2">
                      <AnimatedCounter end={stat.v} suffix={stat.s} />
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{stat.l}</div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

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
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} delay={index * 120}>
                  <Card hover className="text-center group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
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

      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 text-black overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Robot Hand Background Image - Responsive positioning */}
        {/* Mobile: smaller and positioned lower */}
        <div 
          className="absolute inset-0 bg-no-repeat lg:hidden"
          style={{
            backgroundImage: 'url(/assets/2272466-removebg-preview.png)',
            backgroundSize: 'auto 50%',
            backgroundPosition: 'left 120%',
          }}
        ></div>
        
        {/* Desktop: larger and positioned at bottom */}
        <div 
          className="absolute inset-0 bg-no-repeat hidden lg:block"
          style={{
            backgroundImage: 'url(/assets/2272466-removebg-preview.png)',
            backgroundSize: 'auto 70%',
            backgroundPosition: 'left bottom',
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto lg:ml-auto lg:mr-0 max-w-2xl lg:max-w-3xl text-center lg:text-right">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight text-gray-900">
              Ready to Grow Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-7 md:mb-8 text-gray-700 leading-relaxed max-w-xl lg:max-w-2xl mx-auto lg:ml-auto lg:mr-0">
              Let's discuss how we can help you achieve your digital marketing goals and drive measurable results
            </p>
            <div className="flex justify-center lg:justify-end mb-6 sm:mb-8">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-glow group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                  Schedule a Free Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center lg:items-end justify-center lg:justify-end gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="font-semibold">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="font-semibold">Free 30-Min Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
