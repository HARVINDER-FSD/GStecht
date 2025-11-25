import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouteContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const useRouter = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
};

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <RouteContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouteContext.Provider>
  );
};

interface RouteProps {
  path: string;
  component: ReactNode;
}

export const Route = ({ path, component }: RouteProps) => {
  const { currentPath } = useRouter();
  return currentPath === path ? <>{component}</> : null;
};
