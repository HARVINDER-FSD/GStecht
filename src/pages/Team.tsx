import { Linkedin, Mail } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Team = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in digital marketing with a passion for helping businesses grow.',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      name: 'Michael Chen',
      role: 'Head of SEO',
      bio: 'SEO expert who has helped over 200 businesses rank on page 1.',
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer with a keen eye for beautiful, functional design.',
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in scalable web applications.',
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      name: 'Jessica Williams',
      role: 'Social Media Strategist',
      bio: 'Social media expert who creates viral campaigns that convert.',
      image: 'bg-gradient-to-br from-teal-500 to-blue-500',
    },
    {
      name: 'Alex Thompson',
      role: 'PPC Specialist',
      bio: 'Certified Google Ads expert managing millions in ad spend.',
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100">
              Talented professionals dedicated to your success. Our diverse team brings together expertise across all areas of digital marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="text-center">
                <div className={`w-32 h-32 ${member.image} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. Check out our open positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Senior SEO Specialist', 'React Developer', 'Content Writer', 'PPC Manager', 'UX Designer', 'Account Manager'].map((position, index) => (
              <Card key={index} hover className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{position}</h3>
                <p className="text-gray-600 text-sm mb-4">Full-time • Remote</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Details →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
