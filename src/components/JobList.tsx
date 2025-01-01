import React from 'react';
import { MapPin, Clock, DollarSign, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Job } from '../types/job';

// Mock data - In a real app, this would come from an API
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'New York, NY',
    type: 'full-time',
    experience: 'senior',
    salary: '$120,000 - $150,000',
    description: 'We are looking for an experienced frontend developer...',
    requirements: 'Minimum 5 years of experience with React...',
    postedAt: '2024-03-15',
    status: 'active',
    applicationsCount: 12
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataTech Solutions',
    location: 'Remote',
    type: 'full-time',
    experience: 'mid',
    salary: '$100,000 - $130,000',
    description: 'Join our backend team to build scalable services...',
    requirements: 'Strong experience with Node.js and databases...',
    postedAt: '2024-03-14',
    status: 'active',
    applicationsCount: 8
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Creative Studios',
    location: 'San Francisco, CA',
    type: 'full-time',
    experience: 'mid',
    salary: '$90,000 - $120,000',
    description: 'Design beautiful and intuitive user interfaces...',
    requirements: 'Portfolio showcasing web and mobile designs...',
    postedAt: '2024-03-13',
    status: 'active',
    applicationsCount: 15
  }
];

interface JobListProps {
  keyword?: string;
  location?: string;
}

export default function JobList({ keyword, location }: JobListProps) {
  // Filter jobs based on search criteria
  const filteredJobs = mockJobs.filter(job => {
    const matchesKeyword = !keyword || 
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(keyword.toLowerCase()) ||
      job.description.toLowerCase().includes(keyword.toLowerCase());
    
    const matchesLocation = !location ||
      job.location.toLowerCase().includes(location.toLowerCase());

    return matchesKeyword && matchesLocation;
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
        <p className="mt-2 text-sm text-gray-500">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      {filteredJobs.map((job) => (
        <div key={job.id} className="p-6 hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Link to={`/jobs/${job.id}`} className="block">
                  <h3 className="text-xl font-semibold text-green-600 hover:text-green-700">
                    {job.title}
                  </h3>
                </Link>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              </div>
              
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Building2 className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                {job.company}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  {job.salary}
                </div>
                <div className="text-sm text-gray-500">
                  Posted {new Date(job.postedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-500 line-clamp-2">
              {job.description}
            </p>
            <Link
              to={`/jobs/${job.id}`}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}