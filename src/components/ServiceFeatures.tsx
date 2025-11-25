import { LucideIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  link?: string;
  linkText?: string;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
}

export const ServiceFeatures = ({ 
  title, 
  subtitle, 
  description, 
  features 
}: ServiceFeaturesProps) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              {title}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            {subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {description}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              gradient={feature.gradient || 'from-blue-500 to-indigo-600'}
              link={feature.link}
              linkText={feature.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
