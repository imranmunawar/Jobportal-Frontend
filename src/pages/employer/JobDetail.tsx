import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Users, DollarSign, Building2, Calendar, Mail } from 'lucide-react';
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
  description: 'We are looking for an experienced frontend developer to join our team and help build amazing user experiences. The ideal candidate will have a strong background in React and modern frontend development practices.',
  requirements: '- Minimum 5 years of experience with React\n- Strong understanding of JavaScript/TypeScript\n- Experience with state management (Redux, Context API)\n- Excellent problem-solving skills\n- Good communication skills',
  postedAt: '2024-03-15',
  status: 'active',
  applicationsCount: 12
};

const mockApplications = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    appliedAt: '2024-03-16',
    status: 'new'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    appliedAt: '2024-03-15',
    status: 'reviewed'
  }
];

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/employer/jobs"
            className="text-green-600 hover:text-green-900"
          >
            ← Back to Jobs
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{mockJob.title}</h1>
                <div className="mt-1 flex items-center">
                  <Building2 className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{mockJob.company}</span>
                </div>
              </div>
              <span className={`px-2 py-1 text-sm font-semibold rounded-full ${
                mockJob.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {mockJob.status === 'active' ? 'Active' : 'Closed'}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{mockJob.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{mockJob.type}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{mockJob.experience}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{mockJob.salary}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {mockJob.description}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Requirements</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                  {mockJob.requirements}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Applications ({mockApplications.length})</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {mockApplications.map((application) => (
                <li key={application.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 font-medium">
                            {application.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{application.name}</h3>
                        <div className="flex items-center mt-1">
                          <Mail className="h-4 w-4 text-gray-400 mr-1" />
                          <p className="text-sm text-gray-500">{application.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        Applied on {new Date(application.appliedAt).toLocaleDateString()}
                      </span>
                      <span className={`ml-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        application.status === 'new' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {application.status === 'new' ? 'New' : 'Reviewed'}
                      </span>
                      <Link
                        to={`/employer/jobs/${id}/applications/${application.id}`}
                        className="ml-4 text-sm text-green-600 hover:text-green-900"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}