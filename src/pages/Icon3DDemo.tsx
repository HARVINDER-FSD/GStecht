import { 
  WebDevIcon3D, 
  MobileAppIcon3D, 
  SEOIcon3D, 
  DigitalMarketingIcon3D,
  GraphicDesignIcon3D,
  SocialMediaIcon3D,
  GoogleBusinessIcon3D,
  PPCIcon3D,
  EmailMarketingIcon3D
} from '../components/icons/Icon3DSVG';
import { Mobile3D } from '../components/3D/Mobile3D';

export function Icon3DDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          3D Style SVG Icons
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Beautiful gradient-based 3D style icons for your services
        </p>

        {/* Service Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <WebDevIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">Web Development</h3>
            <p className="text-gray-300 text-sm mt-2">Code editor with terminal</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <MobileAppIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">App Development</h3>
            <p className="text-gray-300 text-sm mt-2">Mobile device design</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <SEOIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">SEO Services</h3>
            <p className="text-gray-300 text-sm mt-2">Search optimization</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <DigitalMarketingIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">Digital Marketing</h3>
            <p className="text-gray-300 text-sm mt-2">Growth analytics chart</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <GraphicDesignIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">Graphic Design</h3>
            <p className="text-gray-300 text-sm mt-2">Creative shapes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <SocialMediaIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">Social Media</h3>
            <p className="text-gray-300 text-sm mt-2">Network connections</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <GoogleBusinessIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">Google My Business</h3>
            <p className="text-gray-300 text-sm mt-2">Business location</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <PPCIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">PPC Advertising</h3>
            <p className="text-gray-300 text-sm mt-2">Time-based campaigns</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <EmailMarketingIcon3D size={80} />
            </div>
            <h3 className="text-xl font-semibold text-white">Email Marketing</h3>
            <p className="text-gray-300 text-sm mt-2">Email campaigns</p>
          </div>
        </div>

        {/* Size Variations */}
        <h2 className="text-3xl font-bold text-white text-center mb-8 mt-16">
          Different Sizes
        </h2>
        <div className="flex items-end justify-center gap-8 flex-wrap">
          <div className="text-center">
            <WebDevIcon3D size={48} />
            <p className="mt-2 text-white text-sm">Small (48px)</p>
          </div>
          <div className="text-center">
            <WebDevIcon3D size={64} />
            <p className="mt-2 text-white text-sm">Medium (64px)</p>
          </div>
          <div className="text-center">
            <WebDevIcon3D size={96} />
            <p className="mt-2 text-white text-sm">Large (96px)</p>
          </div>
          <div className="text-center">
            <WebDevIcon3D size={128} />
            <p className="mt-2 text-white text-sm">XL (128px)</p>
          </div>
        </div>

        {/* 3D Rendered Mobile Phone */}
        <h2 className="text-3xl font-bold text-white text-center mb-8 mt-16">
          Real 3D Rendered Mobile
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Interactive 3D mobile phone - drag to rotate, auto-rotates
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <div className="flex justify-center">
            <Mobile3D size={500} autoRotate={true} />
          </div>
          <p className="text-center text-gray-300 mt-6">
            This is a real 3D model rendered with React Three Fiber. You can drag to rotate it!
          </p>
        </div>

        {/* Usage Info */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">How to Use</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p className="font-semibold text-white mb-2">✨ SVG Icons Features</p>
              <ul className="text-sm space-y-1">
                <li>• Beautiful gradient colors</li>
                <li>• Scalable SVG format</li>
                <li>• Lightweight & fast</li>
                <li>• No external dependencies</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">🎮 3D Mobile Features</p>
              <ul className="text-sm space-y-1">
                <li>• Real 3D rendering</li>
                <li>• Interactive rotation</li>
                <li>• Auto-rotate animation</li>
                <li>• Realistic materials & lighting</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-white mb-2 text-center">📝 Example Code</p>
            <div className="grid md:grid-cols-2 gap-4">
              <pre className="text-xs bg-black/30 p-3 rounded overflow-x-auto">
{`// SVG Icon
import { WebDevIcon3D } from './icons/Icon3DSVG';

<WebDevIcon3D size={64} />`}
              </pre>
              <pre className="text-xs bg-black/30 p-3 rounded overflow-x-auto">
{`// 3D Mobile
import { Mobile3D } from './3D/Mobile3D';

<Mobile3D size={400} autoRotate={true} />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
