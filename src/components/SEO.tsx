import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

export const SEO = ({
  title = 'GS TECHT - Professional Web Development, SEO & Digital Marketing Services',
  description = 'Leading digital agency offering expert web development, mobile app development, SEO services, PPC advertising, and digital marketing solutions. Transform your business with data-driven strategies.',
  keywords = 'web development, mobile app development, SEO services, digital marketing, PPC advertising, social media marketing, graphic design',
  ogImage = 'https://gstecht.com/og-image.jpg',
  canonical,
  type = 'website',
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', type, true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Update og:url
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('twitter:url', window.location.href);
  }, [title, description, keywords, ogImage, canonical, type]);

  return null;
};
