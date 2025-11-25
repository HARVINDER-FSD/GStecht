import { ReactNode, MouseEvent } from 'react';
import { useRouter } from './Router';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export const Link = ({ to, children, className = '' }: LinkProps) => {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
