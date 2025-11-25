import { ArrowRight } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from './ui/Button';
import { TypingAnimation } from './TypingAnimation';

export const ModernHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 lg:pb-40">
      {/* Background Layer - z-0 */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content Layer - z-10 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-10 md:mb-12 leading-[1.1] tracking-tight animate-slide-up px-4 text-center">
          <span className="text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">Grow your business</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-gray-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
            <TypingAnimation 
              words={['faster', 'smarter', 'better', 'stronger']}
              typingSpeed={150}
              deletingSpeed={100}
              delayBetweenWords={2000}
            />
          </span>
        </h1>

        {/* Logo Watermark - In content flow */}
        <div className="mb-8 sm:mb-10 md:mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <img 
            src="/assets/GS TECHT LOGO.png" 
            alt="GS Tech Logo" 
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain opacity-20 grayscale"
          />
        </div>

        {/* Description */}
        <div className="mb-8 sm:mb-10 animate-slide-up mx-4 max-w-3xl text-center" style={{ animationDelay: '0.2s' }}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed">
            We help businesses scale with data-driven digital marketing, cutting-edge technology, and proven strategies that deliver real results.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center animate-slide-up px-4" style={{ animationDelay: '0.3s' }}>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
              Start your project <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/services/seo" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-gray-900 bg-white/40 backdrop-blur-sm text-gray-900 hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg">
              Explore services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
