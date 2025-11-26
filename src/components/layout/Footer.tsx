import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from '../../router/Link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/assets/GS TECHT LOGO.png" 
                alt="GS Tech IT Solutions" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Your trusted partner for digital marketing, web development, and innovative IT solutions that drive business growth.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link to="/services/seo" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">SEO Services</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">Digital Marketing</Link></li>
              <li><Link to="/services/website-development" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">Website Development</Link></li>
              <li><Link to="/services/app-development" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">App Development</Link></li>
              <li><Link to="/services/ppc" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">PPC Advertising</Link></li>
              <li><Link to="/services/social-media-ads" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">Social Media Ads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">Our Team</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">Portfolio</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">FAQ</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start space-x-2 sm:space-x-3 group">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="group-hover:text-white transition-colors">F/F7, Nakshatra Arcade, IOC Road, Chandkheda, Ahmedabad - 382424</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+918320023540" className="group-hover:text-white transition-colors">+91 83200 23540</a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:gstecht7@gmail.com" className="group-hover:text-white transition-colors break-all">gstecht7@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
          <p className="text-center md:text-left">&copy; {currentYear} GS Tech IT Solutions. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
