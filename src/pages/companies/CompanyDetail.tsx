import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Globe, Building2, Calendar, Briefcase, Mail, Phone, ExternalLink } from 'lucide-react';
import type { Company } from '../../types/company';
import type { Job } from '../../types/job';

// Mock company data - In a real app, this would come from an API
const mockCompany: Company & {
  about: string;
  culture: string;
  benefits: string[];
  socialLinks: { [key: string]: string };
  contact: { email: string; phone: string; address: string };
} = {
  id: '1',
  name: 'TechCorp Inc.',
  logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop&crop=faces',
  description: 'Leading technology company specializing in innovative software solutions.',
  about: `TechCorp Inc. is a leading technology company at the forefront of digital innovation. Founded in 2010, we've grown from a small startup to a global technology leader with over 1000 employees worldwide.

Our mission is to create technology that makes the world work better for everyone. We specialize in developing cutting-edge software solutions that help businesses transform their operations and achieve their digital goals.

We're proud to be recognized as one of the fastest-growing technology companies, with a track record of delivering exceptional value to our clients and maintaining long-term partnerships.`,
  culture: `At TechCorp, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our workplace is built on the following principles:

• Open Communication: We maintain transparent dialogue across all levels of the organization
• Innovation First: We encourage creative thinking and novel approaches to problem-solving
• Work-Life Balance: We support flexible working arrangements and respect personal time
• Diversity & Inclusion: We celebrate diversity and create an inclusive environment for all
• Professional Growth: We invest in our employees' development and career progression`,
  industry: 'Technology',
  location: 'New York, NY',
  size: '1000-5000',
  website: 'https://techcorp.example.com',
  founded: 2010,
  openPositions: 12,
  benefits: [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and unlimited PTO',
    'Professional development budget',
    '401(k) matching',
    'Gym membership reimbursement',
    'Mental health and wellness programs',
    'Parental leave',
    'Regular team events and activities'
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/company/techcorp',
    twitter: 'https://twitter.com/techcorp',
    facebook: 'https://facebook.com/techcorp'
  },
  contact: {
    email: 'careers@techcorp.example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Avenue, New York, NY 10001'
  }
};

// Mock jobs data
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
    company: 'TechCorp Inc.',
    location: 'Remote',
    type: 'full-time',
    experience: 'mid',
    salary: '$100,000 - $130,000',
    description: 'Join our backend team to build scalable services...',
    requirements: 'Strong experience with Node.js and databases...',
    postedAt: '2024-03-14',
    status: 'active',
    applicationsCount: 8
  }
];

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Company Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={mockCompany.logo}
                alt={mockCompany.name}
                className="h-24 w-24 rounded-lg object-cover"
              />
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-gray-900">{mockCompany.name}</h1>
                <p className="mt-2 text-lg text-gray-600">{mockCompany.description}</p>
              </div>
            </div>
            <a
              href={mockCompany.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center text-gray-500">
              <MapPin className="h-5 w-5 mr-2 text-gray-400" />
              {mockCompany.location}
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="h-5 w-5 mr-2 text-gray-400" />
              {mockCompany.size} employees
            </div>
            <div className="flex items-center text-gray-500">
              <Building2 className="h-5 w-5 mr-2 text-gray-400" />
              {mockCompany.industry}
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="h-5 w-5 mr-2 text-gray-400" />
              Founded {mockCompany.founded}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About {mockCompany.name}</h2>
              <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                {mockCompany.about}
              </div>
            </div>

            {/* Culture Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Culture</h2>
              <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                {mockCompany.culture}
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Open Positions</h2>
                <span className="text-gray-500">{mockJobs.length} openings</span>
              </div>
              <div className="space-y-4">
                {mockJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-green-600">{job.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <a href={`mailto:${mockCompany.contact.email}`} className="hover:text-green-600">
                    {mockCompany.contact.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <a href={`tel:${mockCompany.contact.phone}`} className="hover:text-green-600">
                    {mockCompany.contact.phone}
                  </a>
                </div>
                <div className="flex items-start text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                  <span>{mockCompany.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
              <ul className="space-y-3">
                {mockCompany.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                {Object.entries(mockCompany.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="h-6 w-6">
                      {platform === 'linkedin' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                      {platform === 'twitter' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      )}
                      {platform === 'facebook' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}