import { Users, Award, Shield, Zap, Code, Rocket, CheckCircle2, Globe } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SEO } from '../components/SEO';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and confidentiality in every project we undertake.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technologies and methodologies to stay ahead of the curve.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising quality standards backed by industry certifications and best practices.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships through transparency, communication, and shared success.',
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Advanced Development',
      description: 'Full-stack development with modern frameworks, scalable architectures, and clean code principles.',
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Data-driven marketing strategies that combine SEO, PPC, and content for maximum impact.',
    },
    {
      icon: Rocket,
      title: 'Growth Engineering',
      description: 'Performance optimization, conversion rate optimization, and growth hacking techniques.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="About GS TECHT - Expert Digital Solutions Team | Web Development & Marketing"
        description="Learn about GS TECHT, a leading digital agency with 10+ years of experience. Our certified team of developers and marketers delivers enterprise-grade solutions for businesses worldwide."
        keywords="about us, digital agency, web development team, marketing experts, certified developers, enterprise solutions, professional services"
        canonical="https://gstecht.com/about"
      />
      {/* Hero Section */}
      <section className="relative text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)',
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/85 to-gray-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Digital Excellence
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're not just developers and marketers—we're strategic partners who architect digital solutions that drive measurable business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services/seo">
                <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining technical expertise with strategic thinking to deliver solutions that scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Engineered for Success
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2013, GS TECHT emerged from a vision to bridge the gap between cutting-edge technology and business growth. We're a team of certified developers, digital strategists, and growth engineers who believe in the power of data-driven solutions.
                </p>
                <p>
                  Our approach combines technical excellence with strategic insight. Every line of code, every campaign, and every strategy is crafted with precision, backed by analytics, and optimized for performance.
                </p>
                <p>
                  We don't just build websites or run ads—we architect digital ecosystems that drive sustainable growth, enhance user experiences, and deliver measurable ROI.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Industry Leaders Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Enterprise-Grade Solutions</h4>
                      <p className="text-blue-100 text-sm">Scalable architectures built for growth and performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Certified Professionals</h4>
                      <p className="text-blue-100 text-sm">Team of experts with industry-recognized certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Proven Methodologies</h4>
                      <p className="text-blue-100 text-sm">Agile development and data-driven marketing strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-blue-100 text-sm">Dedicated support team ensuring your success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">The principles that drive our commitment to excellence</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden min-h-[400px]">
        {/* Particles.js Background */}
        <ParticlesBackground />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your digital transformation and drive measurable results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services/seo">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg border-2 border-blue-600">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
