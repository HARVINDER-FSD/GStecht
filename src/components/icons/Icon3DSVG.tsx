interface Icon3DProps {
  size?: number;
  className?: string;
}

// Web Development Icon
export function WebDevIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <rect x="8" y="12" width="48" height="40" rx="4" fill="url(#grad1)" />
      <rect x="8" y="12" width="48" height="8" rx="4" fill="url(#grad2)" />
      <circle cx="14" cy="16" r="1.5" fill="#fff" opacity="0.8" />
      <circle cx="19" cy="16" r="1.5" fill="#fff" opacity="0.8" />
      <circle cx="24" cy="16" r="1.5" fill="#fff" opacity="0.8" />
      <path d="M20 30L26 36L20 42" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="30" y1="42" x2="38" y2="30" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="grad1" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea" />
          <stop offset="1" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="grad2" x1="32" y1="12" x2="32" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#764ba2" />
          <stop offset="1" stopColor="#667eea" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Mobile App Icon
export function MobileAppIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <rect x="18" y="8" width="28" height="48" rx="4" fill="url(#mobileGrad1)" />
      <rect x="18" y="8" width="28" height="6" rx="2" fill="url(#mobileGrad2)" />
      <rect x="18" y="50" width="28" height="6" rx="2" fill="url(#mobileGrad2)" />
      <circle cx="32" cy="53" r="2" fill="#fff" opacity="0.9" />
      <rect x="22" y="18" width="20" height="28" rx="2" fill="#fff" opacity="0.2" />
      <defs>
        <linearGradient id="mobileGrad1" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f093fb" />
          <stop offset="1" stopColor="#f5576c" />
        </linearGradient>
        <linearGradient id="mobileGrad2" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5576c" />
          <stop offset="1" stopColor="#f093fb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// SEO Icon
export function SEOIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <circle cx="28" cy="28" r="16" fill="url(#seoGrad1)" />
      <circle cx="28" cy="28" r="12" fill="none" stroke="#fff" strokeWidth="2" opacity="0.6" />
      <path d="M40 40L52 52" stroke="url(#seoGrad2)" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 40L52 52" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <text x="28" y="33" fontSize="14" fill="#fff" fontWeight="bold" textAnchor="middle">SEO</text>
      <defs>
        <linearGradient id="seoGrad1" x1="28" y1="12" x2="28" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4facfe" />
          <stop offset="1" stopColor="#00f2fe" />
        </linearGradient>
        <linearGradient id="seoGrad2" x1="40" y1="40" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4facfe" />
          <stop offset="1" stopColor="#00f2fe" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Digital Marketing Icon
export function DigitalMarketingIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M12 48L20 32L28 40L36 24L44 32L52 16" stroke="url(#dmGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="32" r="3" fill="#43e97b" />
      <circle cx="28" cy="40" r="3" fill="#38f9d7" />
      <circle cx="36" cy="24" r="3" fill="#43e97b" />
      <circle cx="44" cy="32" r="3" fill="#38f9d7" />
      <rect x="8" y="50" width="48" height="2" fill="url(#dmGrad)" opacity="0.3" />
      <defs>
        <linearGradient id="dmGrad" x1="12" y1="16" x2="52" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#43e97b" />
          <stop offset="1" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Graphic Design Icon
export function GraphicDesignIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M32 8L44 28H20L32 8Z" fill="url(#gdGrad1)" />
      <circle cx="20" cy="44" r="12" fill="url(#gdGrad2)" />
      <rect x="36" y="32" width="16" height="16" rx="2" fill="url(#gdGrad3)" />
      <defs>
        <linearGradient id="gdGrad1" x1="32" y1="8" x2="32" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fa709a" />
          <stop offset="1" stopColor="#fee140" />
        </linearGradient>
        <linearGradient id="gdGrad2" x1="20" y1="32" x2="20" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#30cfd0" />
          <stop offset="1" stopColor="#330867" />
        </linearGradient>
        <linearGradient id="gdGrad3" x1="44" y1="32" x2="44" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a8edea" />
          <stop offset="1" stopColor="#fed6e3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Social Media Icon
export function SocialMediaIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <circle cx="32" cy="32" r="20" fill="url(#smGrad1)" />
      <circle cx="20" cy="20" r="8" fill="url(#smGrad2)" />
      <circle cx="44" cy="20" r="8" fill="url(#smGrad3)" />
      <circle cx="44" cy="44" r="8" fill="url(#smGrad4)" />
      <path d="M26 26L38 38M38 26L26 38" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="smGrad1" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea" />
          <stop offset="1" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="smGrad2" x1="20" y1="12" x2="20" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f093fb" />
          <stop offset="1" stopColor="#f5576c" />
        </linearGradient>
        <linearGradient id="smGrad3" x1="44" y1="12" x2="44" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4facfe" />
          <stop offset="1" stopColor="#00f2fe" />
        </linearGradient>
        <linearGradient id="smGrad4" x1="44" y1="36" x2="44" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#43e97b" />
          <stop offset="1" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Google My Business Icon
export function GoogleBusinessIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M32 8L52 24V52H12V24L32 8Z" fill="url(#gbGrad1)" />
      <rect x="24" y="36" width="16" height="16" fill="url(#gbGrad2)" />
      <rect x="16" y="28" width="8" height="8" fill="#fff" opacity="0.3" />
      <rect x="40" y="28" width="8" height="8" fill="#fff" opacity="0.3" />
      <path d="M32 8L52 24H12L32 8Z" fill="url(#gbGrad3)" />
      <defs>
        <linearGradient id="gbGrad1" x1="32" y1="8" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f093fb" />
          <stop offset="1" stopColor="#f5576c" />
        </linearGradient>
        <linearGradient id="gbGrad2" x1="32" y1="36" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4facfe" />
          <stop offset="1" stopColor="#00f2fe" />
        </linearGradient>
        <linearGradient id="gbGrad3" x1="32" y1="8" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fa709a" />
          <stop offset="1" stopColor="#fee140" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// PPC Icon
export function PPCIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <circle cx="32" cy="32" r="24" fill="url(#ppcGrad1)" />
      <path d="M32 16V32L44 38" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="3" fill="#fff" />
      <path d="M48 32C48 40.8366 40.8366 48 32 48" stroke="url(#ppcGrad2)" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" />
      <defs>
        <linearGradient id="ppcGrad1" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fa709a" />
          <stop offset="1" stopColor="#fee140" />
        </linearGradient>
        <linearGradient id="ppcGrad2" x1="48" y1="32" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" opacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Email Marketing Icon
export function EmailMarketingIcon3D({ size = 64, className = '' }: Icon3DProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <rect x="8" y="16" width="48" height="32" rx="4" fill="url(#emailGrad1)" />
      <path d="M8 20L32 36L56 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20L32 36L56 20" fill="url(#emailGrad2)" opacity="0.3" />
      <defs>
        <linearGradient id="emailGrad1" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea" />
          <stop offset="1" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="emailGrad2" x1="32" y1="20" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
