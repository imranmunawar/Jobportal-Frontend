import React from 'react';
import { 
  Users, Target, Briefcase, Award, 
  LineChart, UserCheck, Building2, Mail,
  Phone, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Talent Sourcing',
    icon: Users,
    description: 'Access our vast talent pool and let our experts find the perfect candidates for your roles.',
    features: [
      'Access to pre-screened candidate database',
      'Custom talent sourcing strategies',
      'Passive candidate outreach',
      'Social media recruitment'
    ]
  },
  {
    title: 'Recruitment Process Outsourcing',
    icon: Briefcase,
    description: 'Streamline your hiring process with our end-to-end recruitment outsourcing services.',
    features: [
      'Full-cycle recruitment management',
      'Employer branding support',
      'Interview scheduling and coordination',
      'Offer management and negotiation'
    ]
  },
  {
    title: 'Assessment Services',
    icon: Target,
    description: 'Evaluate candidates effectively with our comprehensive assessment tools and services.',
    features: [
      'Skills assessment tests',
      'Personality profiling',
      'Technical evaluations',
      'Cultural fit assessment'
    ]
  },
  {
    title: 'Executive Search',
    icon: Award,
    description: 'Find top-tier leadership talent with our specialized executive search services.',
    features: [
      'C-level recruitment',
      'Industry-specific expertise',
      'Confidential searches',
      'Leadership assessment'
    ]
  }
];

const benefits = [
  {
    title: 'Data-Driven Insights',
    icon: LineChart,
    description: 'Make informed decisions with detailed analytics and recruitment metrics.'
  },
  {
    title: 'Quality Candidates',
    icon: UserCheck,
    description: 'Access pre-screened, qualified candidates matched to your requirements.'
  },
  {
    title: 'Industry Expertise',
    icon: Building2,
    description: 'Benefit from our deep understanding of various industry sectors.'
  }
];

export default function RecruitmentSolutions() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Recruitment Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Transform your hiring process with our comprehensive recruitment solutions tailored to your needs
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.title} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">{solution.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-green-900 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Why Choose Our Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex p-3 bg-green-800 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-green-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-green-200">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get Started with Our Solutions
            </h2>
            <p className="text-gray-600 mb-8">
              Contact our team to discuss how we can help optimize your recruitment process
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:solutions@example.com"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                Call Us
              </a>
              <Link
                to="#"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <MessageSquare className="h-5 w-5 mr-2 text-gray-400" />
                Live Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}