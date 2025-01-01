import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FileText, Video, Users, 
  Briefcase, GraduationCap, Target, 
  Award, Download, ArrowRight 
} from 'lucide-react';

const categories = [
  {
    title: 'Career Guides',
    icon: BookOpen,
    resources: [
      { title: 'How to Write a Winning Resume', type: 'Article', time: '10 min read' },
      { title: 'Mastering the Job Interview', type: 'Guide', time: '15 min read' },
      { title: 'Negotiating Your Salary', type: 'Guide', time: '12 min read' }
    ]
  },
  {
    title: 'Resume Templates',
    icon: FileText,
    resources: [
      { title: 'Professional Resume Template', type: 'Template', time: 'DOCX, PDF' },
      { title: 'Creative Resume Template', type: 'Template', time: 'DOCX, PDF' },
      { title: 'Technical Resume Template', type: 'Template', time: 'DOCX, PDF' }
    ]
  },
  {
    title: 'Video Tutorials',
    icon: Video,
    resources: [
      { title: 'Personal Branding Tips', type: 'Video', time: '8 min' },
      { title: 'LinkedIn Profile Optimization', type: 'Video', time: '12 min' },
      { title: 'Remote Work Best Practices', type: 'Video', time: '10 min' }
    ]
  },
  {
    title: 'Networking',
    icon: Users,
    resources: [
      { title: 'Building Professional Relationships', type: 'Article', time: '8 min read' },
      { title: 'Networking Event Tips', type: 'Guide', time: '10 min read' },
      { title: 'Social Media for Job Seekers', type: 'Article', time: '7 min read' }
    ]
  }
];

const featuredResources = [
  {
    title: 'Career Development',
    icon: Target,
    description: 'Plan your career path and set achievable goals',
    color: 'bg-blue-500'
  },
  {
    title: 'Industry Insights',
    icon: Briefcase,
    description: 'Stay updated with the latest industry trends',
    color: 'bg-green-500'
  },
  {
    title: 'Skill Development',
    icon: GraduationCap,
    description: 'Enhance your professional skills',
    color: 'bg-purple-500'
  },
  {
    title: 'Certifications',
    icon: Award,
    description: 'Recommended certifications for your field',
    color: 'bg-orange-500'
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Career Resources</h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to succeed in your job search and career development
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {featuredResources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className={`inline-flex p-3 rounded-lg ${resource.color} bg-opacity-10 mb-4`}>
                <resource.icon className={`h-6 w-6 ${resource.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <Link
                to="#"
                className="inline-flex items-center mt-4 text-sm font-medium text-green-600 hover:text-green-500"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="h-6 w-6 text-green-600" />
                  <h2 className="ml-2 text-xl font-semibold text-gray-900">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div
                      key={resourceIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{resource.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500">{resource.type}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{resource.time}</span>
                        </div>
                      </div>
                      {resource.type === 'Template' ? (
                        <button className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </button>
                      ) : (
                        <Link
                          to="#"
                          className="text-sm font-medium text-green-600 hover:text-green-500"
                        >
                          View
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 bg-green-700 rounded-lg shadow-lg">
          <div className="px-6 py-12 sm:px-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Get career tips in your inbox
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-green-100">
                  Subscribe to our newsletter for weekly career advice, job search tips, and industry insights.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-3 text-sm text-green-100">
                  We care about your data. Read our{' '}
                  <Link to="#" className="font-medium text-white underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}