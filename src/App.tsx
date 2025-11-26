import { RouterProvider, Route } from './router/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { SEO } from './pages/services/SEO';
import { DigitalMarketing } from './pages/services/DigitalMarketing';
import { GoogleMyBusiness } from './pages/services/GoogleMyBusiness';
import { GraphicDesign } from './pages/services/GraphicDesign';
import { WebsiteDevelopment } from './pages/services/WebsiteDevelopment';
import { PPC } from './pages/services/PPC';
import { SocialMediaAds } from './pages/services/SocialMediaAds';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';
import { Team } from './pages/Team';
import { FAQ } from './pages/FAQ';
import { Icon3DDemo } from './pages/Icon3DDemo';

function App() {
  // Enable smooth scrolling throughout the app
  useSmoothScroll();
  return (
    <RouterProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Route path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/services/seo" component={<SEO />} />
          <Route path="/services/digital-marketing" component={<DigitalMarketing />} />
          <Route path="/services/google-my-business" component={<GoogleMyBusiness />} />
          <Route path="/services/graphic-design" component={<GraphicDesign />} />
          <Route path="/services/website-development" component={<WebsiteDevelopment />} />
          <Route path="/services/ppc" component={<PPC />} />
          <Route path="/services/social-media-ads" component={<SocialMediaAds />} />
          <Route path="/services/app-development" component={<AppDevelopment />} />
          <Route path="/blog" component={<Blog />} />
          <Route path="/blog/1" component={<BlogPost />} />
          <Route path="/contact" component={<Contact />} />
          <Route path="/pricing" component={<Pricing />} />
          <Route path="/team" component={<Team />} />
          <Route path="/faq" component={<FAQ />} />
          <Route path="/3d-demo" component={<Icon3DDemo />} />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </RouterProvider>
  );
}

export default App;
