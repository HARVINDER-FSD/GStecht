import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  prefix = '',
  duration = 2.5,
  decimals = 0,
  className = ''
}: AnimatedCounterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <span ref={ref} className={className}>
      {inView && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator=","
          useEasing={true}
          easingFn={(t, b, c, d) => {
            // easeOutExpo
            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
          }}
        />
      )}
    </span>
  );
};
