import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 49,
    description: 'Perfect for small businesses just getting started',
    features: [
      'Post up to 3 jobs',
      'Basic candidate filtering',
      'Email support',
      'Standard job listing',
      '30-day job posting'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing companies with regular hiring needs',
    features: [
      'Post up to 10 jobs',
      'Advanced candidate filtering',
      'Priority email & chat support',
      'Featured job listings',
      '60-day job posting',
      'Company profile customization',
      'Basic analytics'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with high-volume recruiting',
    features: [
      'Unlimited job posts',
      'Advanced candidate filtering & scoring',
      '24/7 priority support',
      'Premium job listings',
      '90-day job posting',
      'Enhanced company branding',
      'Advanced analytics & reporting',
      'API access',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function PricingPlans() {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    // Here you would typically handle the plan selection and payment
    console.log(`Selected plan: ${planName}`);
    navigate('/employer/signup');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Right Plan for Your Business
          </h1>
          <p className="text-xl text-gray-600">
            Get access to top talent and powerful hiring tools with our flexible pricing plans
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.popular ? 'ring-2 ring-green-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <p className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="ml-2 text-gray-500">/month</span>
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`mt-8 w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  Get Started with {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Is there a contract or commitment?
              </h3>
              <p className="text-gray-600">
                No, all plans are month-to-month with no long-term commitment. You can cancel anytime.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Do you offer custom plans?
              </h3>
              <p className="text-gray-600">
                Yes, we offer custom enterprise solutions for large organizations. Contact us to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}