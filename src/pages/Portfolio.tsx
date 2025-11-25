import { useState } from 'react';
import { ExternalLink, TrendingUp, Users, Award } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'seo', 'web-development', 'app-development', 'digital-marketing'];

  const projects = [
    {
      title: 'E-Commerce Fashion Store',
      category: 'web-development',
      description: 'Complete e-commerce solution with custom CMS and payment integration',
      results: ['300% increase in sales', '5x faster page load', '98% uptime'],
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      title: 'Tech Startup SEO Campaign',
      category: 'seo',
      description: 'Comprehensive SEO strategy for a SaaS platform',
      results: ['450% organic traffic growth', 'Page 1 rankings for 50+ keywords', '200% lead increase'],
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      title: 'Fitness Mobile App',
      category: 'app-development',
      description: 'Cross-platform fitness tracking and workout planning app',
      results: ['100K+ downloads', '4.8 star rating', '70% daily active users'],
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
    },
    {
      title: 'Restaurant Chain Marketing',
      category: 'digital-marketing',
      description: 'Multi-channel digital marketing campaign',
      results: ['500% social media growth', '250% online orders', '12x ROI'],
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      title: 'Healthcare Portal',
      category: 'web-development',
      description: 'Patient management system with appointment booking',
      results: ['50% reduction in admin time', '10K+ registered patients', 'HIPAA compliant'],
      image: 'bg-gradient-to-br from-teal-500 to-blue-500',
    },
    {
      title: 'Real Estate SEO Success',
      category: 'seo',
      description: 'Local SEO campaign for real estate agency',
      results: ['380% increase in inquiries', 'Dominating local search', '95% of leads from organic'],
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100">
              Explore our successful projects and see how we've helped businesses achieve remarkable growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">350+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? 'primary' : 'outline'}
                onClick={() => setFilter(cat)}
                className="capitalize"
              >
                {cat.replace('-', ' ')}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <ExternalLink className="w-12 h-12 text-white opacity-75" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-blue-600 uppercase mb-2">{project.category.replace('-', ' ')}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-800 text-sm">Key Results:</div>
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
