import { useState } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from '../router/Link';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Blog = () => {
  const [category, setCategory] = useState('all');

  const categories = ['all', 'seo', 'digital-marketing', 'web-development', 'tips'];

  const posts = [
    {
      id: 1,
      title: '10 SEO Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging SEO trends that will shape the future of search.',
      category: 'seo',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'The Complete Guide to Social Media Marketing',
      excerpt: 'Everything you need to know about building a successful social media presence for your business.',
      category: 'digital-marketing',
      author: 'Jessica Williams',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Building Websites That Convert: Best Practices',
      excerpt: 'Learn the key principles of creating websites that turn visitors into customers.',
      category: 'web-development',
      author: 'David Kim',
      date: '2024-01-10',
      readTime: '10 min read',
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'PPC vs SEO: Which Strategy is Right for You?',
      excerpt: 'Understanding the differences and benefits of paid and organic search strategies.',
      category: 'tips',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'How to Optimize Your Google My Business Profile',
      excerpt: 'A step-by-step guide to maximizing your local search visibility.',
      category: 'seo',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'bg-gradient-to-br from-teal-500 to-blue-500',
    },
    {
      id: 6,
      title: 'The Psychology of Color in Web Design',
      excerpt: 'How color choices impact user behavior and conversion rates on your website.',
      category: 'web-development',
      author: 'Emily Rodriguez',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    },
  ];

  const filteredPosts = category === 'all' ? posts : posts.filter(p => p.category === category);

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100">
              Insights, tips, and strategies to help your business thrive in the digital world
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card hover className="mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className={`h-64 lg:h-full ${featuredPost.image} flex items-center justify-center`}>
                <span className="text-white text-6xl font-bold">Featured</span>
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="text-sm font-semibold text-blue-600 uppercase mb-2">Featured Post</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button>
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? 'primary' : 'outline'}
                onClick={() => setCategory(cat)}
                className="capitalize"
              >
                {cat.replace('-', ' ')}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} hover className="overflow-hidden flex flex-col">
                <div className={`h-48 ${post.image} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold">{post.id}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-semibold text-blue-600 uppercase mb-2">
                    {post.category.replace('-', ' ')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
