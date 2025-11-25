import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from '../components/ui/Button';

export const BlogPost = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="text-sm font-semibold text-blue-600 uppercase mb-4">SEO</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              10 SEO Trends to Watch in 2024
            </h1>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl h-96 mb-12 flex items-center justify-center">
            <span className="text-white text-6xl font-bold">Featured Image</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              As we move into 2024, the SEO landscape continues to evolve at a rapid pace. Search engines are becoming smarter, user expectations are higher, and competition is fiercer than ever. In this comprehensive guide, we'll explore the top SEO trends that will shape the future of search.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">1. AI-Powered Search Experience</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Artificial Intelligence is revolutionizing how search engines understand and deliver content. Google's AI algorithms are now better at understanding user intent and context, which means your content needs to be more comprehensive and user-focused than ever before.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">2. Core Web Vitals Remain Crucial</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Page experience continues to be a significant ranking factor. Ensuring your website loads quickly, is interactive, and visually stable is no longer optional. Sites that prioritize Core Web Vitals will have a competitive advantage in search results.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">3. Voice Search Optimization</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              With the increasing popularity of voice assistants, optimizing for voice search is becoming essential. This means focusing on natural language, question-based queries, and featured snippets that voice assistants can easily read.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">4. Video Content Dominance</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Video content continues to grow in importance for SEO. Search engines are giving more prominence to video results, and users increasingly prefer video content. Incorporating video into your content strategy is no longer optional.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">5. E-A-T and Content Quality</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Expertise, Authoritativeness, and Trustworthiness (E-A-T) remain critical factors. Google is placing more emphasis on content created by credible authors and sources. Building your brand's authority and demonstrating expertise is essential.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <p className="text-lg text-gray-800 font-semibold mb-2">Key Takeaway</p>
              <p className="text-gray-700">
                Staying ahead in SEO requires constant adaptation. Focus on creating high-quality, user-focused content while keeping up with technical best practices.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The SEO landscape in 2024 is more complex and competitive than ever. By staying informed about these trends and adapting your strategy accordingly, you can maintain and improve your search rankings. Remember, successful SEO is about providing value to users while following best practices.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help with SEO?</h3>
              <p className="text-gray-600 mb-6">
                Our team of SEO experts can help you implement these strategies and improve your search rankings.
              </p>
              <Link to="/contact">
                <Button size="lg">Get Started Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
