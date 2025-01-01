import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building2, Calendar, Send } from 'lucide-react';
import JobApplicationForm from '../../components/JobApplicationForm';
import type { Job } from '../../types/job';

// Mock data - In a real app, this would come from an API
const mockJob: Job = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'TechCorp Inc.',
  location: 'New York, NY',
  type: 'full-time',
  experience: 'senior',
  salary: '$120,000 - $150,000',
  description: `We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences. The ideal candidate will have a strong background in React and modern frontend development practices.

Key Responsibilities:
- Develop and maintain responsive web applications
- Collaborate with designers and backend developers
- Optimize applications for maximum speed and scalability
- Write clean, maintainable code following best practices
- Participate in code reviews and mentor junior developers`,
  requirements: `- Minimum 5 years of experience with React
- Strong understanding of JavaScript/TypeScript
- Experience with state management (Redux, Context API)
- Familiarity with modern frontend build tools
- Experience with responsive design and cross-browser compatibility
- Strong problem-solving skills
- Excellent communication abilities
- Bachelor's degree in Computer Science or related field`,
  postedAt: '2024-03-15',
  status: 'active',
  applicationsCount: 12
};

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApplicationSubmit = (data: any) => {
    // Here you would typically make an API call to submit the application
    console.log('Application submitted:', data);
    setShowApplyModal(false);
    setApplicationSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        {applicationSubmitted && (
          <div className="mb-6 rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Application Submitted Successfully</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Thank you for your application. We will review it and get back to you soon.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Job Header */}
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{mockJob.title}</h1>
              <div className="mt-2 flex items-center text-lg text-gray-600">
                <Building2 className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400" />
                {mockJob.company}
              </div>
            </div>
            <button
              onClick={() => setShowApplyModal(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Send className="h-5 w-5 mr-2" />
              Apply Now
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center text-gray-500">
              <MapPin className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
              {mockJob.location}
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
              {mockJob.type}
            </div>
            <div className="flex items-center text-gray-500">
              <DollarSign className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
              {mockJob.salary}
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
              Posted {new Date(mockJob.postedAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                <div className="prose max-w-none text-gray-500 whitespace-pre-line">
                  {mockJob.description}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                <div className="prose max-w-none text-gray-500 whitespace-pre-line">
                  {mockJob.requirements}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Overview</h2>
              <div className="prose max-w-none text-gray-500">
                <p>
                  TechCorp Inc. is a leading technology company specializing in innovative software solutions.
                  We're committed to creating a diverse and inclusive workplace where everyone can thrive.
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Company Benefits</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Competitive salary and equity
                    </li>
                    <li className="flex items-center text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Health, dental, and vision insurance
                    </li>
                    <li className="flex items-center text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Flexible work hours and remote options
                    </li>
                    <li className="flex items-center text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Professional development budget
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Apply for {mockJob.title}
                  </h3>
                  <div className="mt-4">
                    <JobApplicationForm
                      jobId={id || ''}
                      jobTitle={mockJob.title}
                      onClose={() => setShowApplyModal(false)}
                      onSubmit={handleApplicationSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}