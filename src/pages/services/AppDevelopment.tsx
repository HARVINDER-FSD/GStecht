import { useState } from 'react';
import { Smartphone, Zap, Users, Globe, Lock, CheckCircle, Apple } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ServiceFeatures } from '../../components/ServiceFeatures';
import { BookingForm } from '../../components/BookingForm';

export const AppDevelopment = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const features = [
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android apps with Material Design and cutting-edge features.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Apple,
      title: 'iOS Development',
      description: 'Beautiful iOS apps following Apple Human Interface Guidelines.',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Globe,
      title: 'Cross-Platform Apps',
      description: 'Cost-effective apps that work seamlessly on multiple platforms.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces that drive user engagement and retention.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamless integration with third-party services and backends.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Lock,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security to protect user data and transactions.',
      gradient: 'from-red-500 to-rose-600',
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
      {/* Hero with Image */}
      <div className="py-20" style={{ backgroundColor: '#020207' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-900/30 px-4 py-2 rounded-full">Android & iOS Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Build Apps <span className="text-cyan-400">That Perform</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Transform your ideas into powerful mobile applications. We specialize in Android, iOS, and cross-platform development with Material Design and modern UI/UX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-cyan-600 hover:bg-cyan-700"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Start Your App Project
                </Button>
              </div>
              {/* Platform Stats */}
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-gray-900 rounded-xl p-4 shadow-lg border-2 border-gray-800">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-1`}>
                      {platform.users}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">{platform.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 px-4 sm:px-0">
              <div 
                className="w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl rounded-3xl p-8"
                style={{ backgroundColor: '#020207' }}
              >
                <img 
                  src="/assets/R.png" 
                  alt="Mobile App Development" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <ServiceFeatures
          title="Our Services"
          subtitle="Complete App Development Solutions"
          description="From concept to launch, we build apps that make an impact"
          features={features}
        />
      </div>

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
            <ul className="space-y-5 justify-center">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300 shadow-md">
                    <CheckCircle className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors pt-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* App Development Process Timeline */}
      <section className="relative py-16 sm:py-20 md:py-24 text-white overflow-hidden" style={{ backgroundColor: '#020207' }}>
        {/* Material Design Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 shadow-lg">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              From idea to app store in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { step: '1', title: 'Discovery', desc: 'Define requirements and create wireframes' },
              { step: '2', title: 'Design', desc: 'Craft beautiful UI/UX that converts' },
              { step: '3', title: 'Development', desc: 'Build with latest technologies' },
              { step: '4', title: 'Launch', desc: 'Deploy and optimize for success' }
            ].map((item) => (
              <div key={item.step} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold mb-3 text-green-200">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-50 shadow-2xl font-semibold"
              onClick={() => setIsBookingOpen(true)}
            >
              Let's Build Your App
            </Button>
          </div>
        </div>
      </section>

      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        serviceType="App Development"
      />
    </div>
  );
};
