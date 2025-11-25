import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
import { ScrollReveal } from './animations/ScrollReveal';
import { Link } from '../router/Link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  gradient?: string;
  link?: string;
  linkText?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index = 0,
  gradient = 'from-blue-500 to-indigo-600',
  link,
  linkText = 'Learn More'
}: ServiceCardProps) => {
  const CardContent = (
    <Card hover className="text-center group relative overflow-hidden h-full cursor-pointer">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{description}</p>
        
        {/* Link */}
        {link && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <span className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
              {linkText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <ScrollReveal delay={index * 100}>
      {link ? (
        <Link to={link} className="block h-full">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </ScrollReveal>
  );
};
