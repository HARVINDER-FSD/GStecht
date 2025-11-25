import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, TrendingUp, Globe, Palette, Code, MousePointer, Share2, Smartphone } from 'lucide-react';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/Router';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 20);
      
      // Show/hide navbar based on scroll direction (only on mobile)
      // On desktop (lg and above), always show the header
      const isDesktop = window.innerWidth >= 1024;
      
      if (isDesktop) {
        // Always visible on desktop
        setIsVisible(true);
      } else {
        // Mobile behavior: hide on scroll down
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setActiveDropdown(null);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [currentPath]);

  const services = [
    { 
      name: 'SEO Services', 
      path: '/services/seo',
      icon: Search,
      description: 'Boost your rankings',
      gradient: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'Digital Marketing', 
      path: '/services/digital-marketing',
      icon: TrendingUp,
      description: 'Grow your presence',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Google My Business', 
      path: '/services/google-my-business',
      icon: Globe,
      description: 'Local visibility',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Graphic Design', 
      path: '/services/graphic-design',
      icon: Palette,
      description: 'Creative designs',
      gradient: 'from-pink-500 to-rose-600'
    },
    { 
      name: 'Website Development', 
      path: '/services/website-development',
      icon: Code,
      description: 'Custom websites',
      gradient: 'from-purple-500 to-indigo-600'
    },
    { 
      name: 'PPC Advertising', 
      path: '/services/ppc',
      icon: MousePointer,
      description: 'Instant traffic',
      gradient: 'from-yellow-500 to-orange-600'
    },
    { 
      name: 'Social Media Ads', 
      path: '/services/social-media-ads',
      icon: Share2,
      description: 'Social engagement',
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      name: 'App Development', 
      path: '/services/app-development',
      icon: Smartphone,
      description: 'Mobile solutions',
      gradient: 'from-teal-500 to-green-600'
    },
  ];

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? 'top-0' : '-top-24'
      } ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/assets/GS TECHT LOGO.png" 
              alt="GS Tech IT Solutions" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 group ${
                currentPath === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                currentPath === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center space-x-1 font-medium transition-all duration-300 relative py-2 ${
                  currentPath.includes('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                  currentPath.includes('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[900px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden animate-slide-down"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 pointer-events-none"></div>
                  
                  {/* Header */}
                  <div className="relative px-8 py-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-50/30 to-indigo-50/30">
                    <h3 className="text-lg font-bold text-gray-900">Our Services</h3>
                    <p className="text-sm text-gray-600 mt-1">Comprehensive digital solutions for your business</p>
                  </div>

                  {/* Services Grid */}
                  <div className="relative grid grid-cols-2 gap-2 p-4">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.path}
                          className="animate-fade-in-up"
                          style={{
                            animationDelay: `${index * 0.05}s`
                          }}
                        >
                          <Link
                            to={service.path}
                            className="group relative flex items-center gap-4 px-6 py-5 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-gray-200/50"
                          >
                            {/* Icon container with gradient */}
                            <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                              {/* Glow effect */}
                              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}></div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                                {service.name}
                                <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {service.description}
                              </div>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-blue-500/20 transition-all duration-300"></div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="relative px-8 py-5 border-t border-gray-200/50 bg-gradient-to-r from-blue-50/30 to-indigo-50/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Need help choosing?</p>
                        <p className="text-xs text-gray-600 mt-0.5">Talk to our experts</p>
                      </div>
                      <Link to="/contact">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 group ${
                currentPath === '/about' ? 'text-blue-600' : ''
              }`}
            >
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                currentPath === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>

            <Link to="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl active:scale-95">
                Get Started
              </button>
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown('mobile-services')}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'mobile-services' && (
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-gray-600 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link to="/contact">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
