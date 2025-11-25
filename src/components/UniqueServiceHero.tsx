import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from './ui/Button';
import { AnimatedCounter } from './ui/AnimatedCounter';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: string;
  percentage: number;
}

interface UniqueServiceHeroProps {
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  highlightText: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: Stat[];
  image?: string;
  imageAlt?: string;
  variant: 'dots' | 'waves' | 'geometric' | 'minimal' | 'split' | 'cards';
  accentColor?: string;
}

export const UniqueServiceHero = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlightText,
  description,
  ctaText = 'Get Started Today',
  ctaLink = '/contact',
  stats,
  image,
  imageAlt = 'Service illustration',
  variant = 'minimal',
  accentColor = 'blue',
}: UniqueServiceHeroProps) => {
  const colorClasses = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700' },
    green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', hover: 'hover:bg-green-700' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', hover: 'hover:bg-purple-700' },
    orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-600', hover: 'hover:bg-cyan-700' },
    pink: { bg: 'bg-pink-600', text: 'text-pink-600', border: 'border-pink-600', hover: 'hover:bg-pink-700' },
  };

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.blue;

  // Dots Pattern Variant
  if (variant === 'dots') {
    return (
      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        {/* Background Layer - z-0 */}
        <div className="absolute inset-0 z-0">
          {/* Dot Pattern Background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          
          {/* Logo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] sm:opacity-[0.05] md:opacity-[0.08] pointer-events-none">
            <img src="/assets/GS TECHT LOGO.png" alt="" className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-contain" />
          </div>
        </div>

        {/* Content Layer - z-10 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 ${colors.bg} text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-lg`}>
                <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">{badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] text-gray-900">
                {title}{' '}
                <span className={`block mt-1 sm:mt-2 ${colors.text}`}>
                  {highlightText}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to={ctaLink} className="w-full sm:w-auto">
                  <Button size="lg" className={`w-full sm:w-auto ${colors.bg} text-white ${colors.hover} shadow-xl hover:shadow-2xl group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold`}>
                    {ctaText} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className={`w-full sm:w-auto border-2 ${colors.border} ${colors.text} hover:${colors.bg} hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold`}>
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              {image ? (
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
                  <img 
                    src={image} 
                    alt={imageAlt} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : stats && stats.length > 0 ? (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border-2 border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Our Results</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3">
                          <span className="font-medium text-gray-700 text-sm sm:text-base">{stat.label}</span>
                          <span className={`font-bold text-xl sm:text-2xl ${stat.color}`}>
                            +<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
                          <div 
                            className={`${colors.bg} h-3 sm:h-4 rounded-full transition-all duration-1000`}
                            style={{ width: `${stat.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Waves Pattern Variant - Side by side layout
  if (variant === 'waves') {
    return (
      <section className="relative overflow-hidden bg-gray-50 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        {/* Background Layer - z-0 */}
        <div className="absolute inset-0 z-0">
          {/* Wave SVG Background */}
          <div className="absolute bottom-0 left-0 right-0 opacity-10">
            <svg viewBox="0 0 1440 320" className="w-full">
              <path fill={colors.bg.replace('bg-', '#')} fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Content Layer - z-10 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 bg-white ${colors.text} border-2 ${colors.border} rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-lg`}>
                <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">{badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] text-gray-900">
                {title}{' '}
                <span className={`block mt-1 sm:mt-2 ${colors.text}`}>
                  {highlightText}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to={ctaLink} className="w-full sm:w-auto">
                  <Button size="lg" className={`w-full sm:w-auto ${colors.bg} text-white ${colors.hover} shadow-xl hover:shadow-2xl group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold`}>
                    {ctaText} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className={`w-full sm:w-auto border-2 ${colors.border} ${colors.text} hover:${colors.bg} hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold`}>
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image/Stats */}
            <div className="mt-8 lg:mt-0">
              {image ? (
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 bg-white">
                  <img 
                    src={image} 
                    alt={imageAlt} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : stats && stats.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                      <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
                        +<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Minimal Clean Variant (default)
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 border-b-4 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 ${colors.bg} text-white rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8`}>
              <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] text-gray-900">
              {title}{' '}
              <span className={`block mt-1 sm:mt-2 ${colors.text}`}>
                {highlightText}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to={ctaLink} className="w-full sm:w-auto">
                <Button size="lg" className={`w-full sm:w-auto ${colors.bg} text-white ${colors.hover} shadow-xl hover:shadow-2xl group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold`}>
                  {ctaText} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className={`w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold`}>
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            {image ? (
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : stats && stats.length > 0 ? (
              <div className={`bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-l-4 ${colors.border}`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900">Our Results</h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-gray-700 text-sm sm:text-base">{stat.label}</span>
                      <span className={`font-bold text-2xl sm:text-3xl ${colors.text}`}>
                        +<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
