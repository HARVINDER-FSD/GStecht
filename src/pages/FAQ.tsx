import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does DigitalPro offer?',
          answer: 'We offer a comprehensive suite of digital services including SEO, digital marketing, Google My Business optimization, graphic design, website development, PPC advertising, social media ads, and app development.',
        },
        {
          question: 'How long does it take to see results?',
          answer: 'Results vary by service. SEO typically shows improvements in 3-6 months, while PPC and social media ads can generate results within days. We provide regular reports to track progress.',
        },
        {
          question: 'Do you work with businesses in my industry?',
          answer: 'Yes! We have experience across virtually all industries including e-commerce, healthcare, finance, technology, real estate, and more. Our strategies are customized to your specific industry needs.',
        },
      ],
    },
    {
      category: 'Pricing & Contracts',
      questions: [
        {
          question: 'What are your payment terms?',
          answer: 'We offer flexible payment options including monthly subscriptions. Most services require a minimum 3-month commitment to see meaningful results, though this varies by service.',
        },
        {
          question: 'Can I cancel my service anytime?',
          answer: 'After your initial commitment period, services can be cancelled with 30 days notice. We are confident in our results and aim to build long-term partnerships.',
        },
        {
          question: 'Do you offer custom packages?',
          answer: 'Absolutely! While we have standard packages, we frequently create custom solutions tailored to specific business needs and budgets.',
        },
      ],
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'What is the onboarding process?',
          answer: 'After signing up, we schedule a kickoff call to discuss goals and strategy. Then we conduct research, develop a custom plan, and begin implementation. The entire onboarding typically takes 1-2 weeks.',
        },
        {
          question: 'How often will I receive reports?',
          answer: 'Standard packages include monthly reports. Professional and Enterprise plans receive weekly updates. All clients have 24/7 access to a real-time dashboard.',
        },
        {
          question: 'Who will I be working with?',
          answer: 'You will have a dedicated account manager as your primary contact, supported by a team of specialists in each relevant area (SEO, design, development, etc.).',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Do I need to provide access to my website?',
          answer: 'For SEO and web development services, yes. We require appropriate access levels to implement changes. We follow strict security protocols and never make changes without approval.',
        },
        {
          question: 'What platforms and technologies do you work with?',
          answer: 'We work with all major platforms including WordPress, Shopify, Wix, custom solutions, and more. Our development team is proficient in modern technologies like React, Node.js, and cloud platforms.',
        },
        {
          question: 'Will I own the work you create?',
          answer: 'Yes! Upon project completion and final payment, you own all deliverables including designs, code, and content created for your business.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our services, pricing, and process
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card key={qIndex} className="cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : globalIndex)}>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                        <ChevronDown
                          className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {isOpen && (
                        <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
