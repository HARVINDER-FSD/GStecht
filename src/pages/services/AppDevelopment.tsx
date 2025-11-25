import { Smartphone, Zap, Users, Globe, Lock, CheckCircle, Apple } from 'lucide-react';
import { Link } from '../../router/Link';
import { Button } from '../../components/ui/Button';
import { ServiceFeatures } from '../../components/ServiceFeatures';

export const AppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android apps with Material Design and cutting-edge features.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Apple,
      title: 'iOS Development',
      description: 'Beautiful iOS apps following Apple Human Interface Guidelines.',
      gradient: 'from-gray-700 to-gray-900',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Globe,
      title: 'Cross-Platform Apps',
      description: 'Cost-effective apps that work seamlessly on multiple platforms.',
      gradient: 'from-blue-500 to-indigo-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces that users love and engage with.',
      gradient: 'from-purple-500 to-pink-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamless integration with third-party services and backends.',
      gradient: 'from-yellow-500 to-orange-600',
      link: '/contact',
      linkText: 'Get Started',
    },
    {
      icon: Lock,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security to protect user data and transactions.',
      gradient: 'from-red-500 to-rose-600',
      link: '/contact',
      linkText: 'Get Started',
    },
  ];

  const benefits = [
    'Reach customers on their mobile devices',
    'Improve customer engagement and loyalty',
    'Create new revenue streams',
    'Streamline business processes',
    'Collect valuable user data and insights',
    'Stay competitive in the mobile-first world',
  ];

  const platforms = [
    { name: 'Android', color: 'from-green-500 to-emerald-600', users: '3B+' },
    { name: 'iOS', color: 'from-gray-700 to-gray-900', users: '1.5B+' },
    { name: 'Cross-Platform', color: 'from-blue-500 to-indigo-600', users: '4.5B+' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Android-themed Hero with Material Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        {/* Android Robot Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-green-600">
            <Smartphone className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10 text-green-600">
            <Smartphone className="w-32 h-32" />
          </div>
        </div>

        {/* Material Design Elevation Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Android Badge */}
              <div className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-lg">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">Android & iOS Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] text-gray-900">
                Build Apps{' '}
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your ideas into powerful mobile applications. We specialize in Android, iOS, and cross-platform development with Material Design and modern UI/UX.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 shadow-xl hover:shadow-2xl group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                    Build Your App <Smartphone className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                    View Pricing
                  </Button>
                </Link>
              </div>

              {/* Platform Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-1`}>
                      {platform.users}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{platform.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="relative flex items-center justify-center">
                {/* Main Mobile Phone Emulator - Bouncing */}
                <div className="relative animate-bounce-slow">
                  {/* Phone Frame */}
                  <div className="relative w-72 h-[580px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                    
                    {/* Screen */}
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 flex justify-between items-center text-white text-xs">
                        <span className="font-semibold">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                          <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                          <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="h-3 w-24 bg-gray-300 rounded"></div>
                            <div className="h-2 w-16 bg-gray-200 rounded mt-1"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl"></div>
                          <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl"></div>
                          <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl"></div>
                          <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl"></div>
                        </div>
                        
                        <div className="mt-6 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-2 bg-gray-100 rounded w-1/2 mt-1"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-2 bg-gray-100 rounded w-1/2 mt-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-around">
                        <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Power Button */}
                    <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-l"></div>
                    {/* Volume Buttons */}
                    <div className="absolute left-0 top-28 w-1 h-12 bg-gray-700 rounded-r"></div>
                    <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-r"></div>
                  </div>
                </div>

                {/* Floating Small Phones */}
                <div className="absolute -left-12 top-1/4 hidden xl:block animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <div className="w-20 h-36 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-2 shadow-2xl transform rotate-12">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="absolute -right-12 top-1/3 hidden xl:block animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                  <div className="w-20 h-36 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-2 shadow-2xl transform -rotate-12">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <Apple className="w-8 h-8 text-gray-800" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Rating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-6 shadow-2xl animate-pulse z-20">
                  <div className="text-4xl font-bold">4.8★</div>
                  <div className="text-sm">App Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures
        title="Our Services"
        subtitle="Complete App Development Solutions"
        description="From concept to launch, we build apps that make an impact"
        features={features}
      />

      {/* Android Material Design Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-4">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Build Apps That Matter</h2>
              <p className="text-lg text-gray-600">Create mobile experiences that drive business growth</p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300 shadow-md">
                    <CheckCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors pt-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Android-themed CTA with Material Design */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white overflow-hidden">
        {/* Material Design Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8 shadow-lg">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your App?</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Turn your app idea into reality with our expert Android and iOS development team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-50 shadow-2xl font-semibold">
                Start Your Project
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700 backdrop-blur-sm font-semibold">
                View Packages
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Material Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>App Store Optimization</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
