import { TrendingUp, Users, Target, Zap, Award, BarChart } from 'lucide-react';

export const FloatingElements = () => {
  const elements = [
    { Icon: TrendingUp, delay: '0s', position: 'top-20 right-20', duration: '6s' },
    { Icon: Users, delay: '1s', position: 'top-40 right-40', duration: '7s' },
    { Icon: Target, delay: '2s', position: 'bottom-40 right-32', duration: '8s' },
    { Icon: Zap, delay: '0.5s', position: 'top-32 right-60', duration: '6.5s' },
    { Icon: Award, delay: '1.5s', position: 'bottom-32 right-52', duration: '7.5s' },
    { Icon: BarChart, delay: '2.5s', position: 'top-52 right-44', duration: '8.5s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {elements.map((element, index) => {
        const Icon = element.Icon;
        return (
          <div
            key={index}
            className={`absolute ${element.position} animate-float-slow opacity-20 hover:opacity-40 transition-opacity`}
            style={{
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
