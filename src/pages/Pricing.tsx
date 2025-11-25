import { Check, ArrowRight } from 'lucide-react';
import { Link } from '../router/Link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'SEO Optimization',
        'Social Media Management (2 platforms)',
        'Monthly Performance Report',
        'Email Support',
        'Content Calendar',
        'Basic Analytics',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced SEO & Link Building',
        'Social Media Management (4 platforms)',
        'PPC Campaign Management',
        'Weekly Performance Reports',
        'Priority Support',
        'A/B Testing',
        'Custom Landing Pages',
        'Conversion Optimization',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Custom Strategy Development',
        'Unlimited Social Platforms',
        'Advanced Analytics & BI',
        '24/7 Priority Support',
        'Custom Integrations',
        'Team Training',
        'White-label Reporting',
      ],
      highlighted: false,
    },
  ];

  const addons = [
    { name: 'Website Development', price: 'From $5,000' },
    { name: 'Mobile App Development', price: 'From $15,000' },
    { name: 'Graphic Design Package', price: '$500/month' },
    { name: 'Video Production', price: 'From $2,000' },
    { name: 'Email Marketing Campaigns', price: '$300/month' },
    { name: 'Reputation Management', price: '$800/month' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Pricing Plans</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Choose the perfect plan for your business needs. All plans include our commitment to your success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                hover
                className={`relative ${
                  plan.highlighted ? 'ring-4 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2 mb-1 sm:mb-2 text-sm sm:text-base">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">Add-On Services</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{addon.name}</h3>
                  <p className="text-blue-600 font-bold text-sm sm:text-base">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Not Sure Which Plan Is Right?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Schedule a free consultation and we'll help you choose the perfect solution for your business
          </p>
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">Schedule Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
