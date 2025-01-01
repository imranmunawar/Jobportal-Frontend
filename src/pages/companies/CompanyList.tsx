import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Users, Globe, Search } from 'lucide-react';
import type { Company } from '../../types/company';

// Mock data - In a real app, this would come from an API
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Inc.',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=faces',
    description: 'Leading technology company specializing in innovative software solutions.',
    industry: 'Technology',
    location: 'New York, NY',
    size: '1000-5000',
    website: 'https://techcorp.example.com',
    founded: 2010,
    openPositions: 12
  },
  {
    id: '2',
    name: 'DataTech Solutions',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=faces',
    description: 'Data analytics and machine learning solutions provider.',
    industry: 'Data Science',
    location: 'San Francisco, CA',
    size: '500-1000',
    website: 'https://datatech.example.com',
    founded: 2015,
    openPositions: 8
  },
  {
    id: '3',
    name: 'Creative Studios',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=faces',
    description: 'Digital design and creative agency.',
    industry: 'Design',
    location: 'Los Angeles, CA',
    size: '100-500',
    website: 'https://creativestudios.example.com',
    founded: 2018,
    openPositions: 5
  }
];

const industries = ['All Industries', 'Technology', 'Data Science', 'Design', 'Finance', 'Healthcare'];
const sizes = ['All Sizes', '1-50', '51-200', '201-500', '501-1000', '1000+'];
const locations = ['All Locations', 'New York, NY', 'San Francisco, CA', 'Los Angeles, CA', 'Remote'];

export default function CompanyList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedSize, setSelectedSize] = useState('All Sizes');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredCompanies = mockCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All Industries' || company.industry === selectedIndustry;
    const matchesSize = selectedSize === 'All Sizes' || company.size === selectedSize;
    const matchesLocation = selectedLocation === 'All Locations' || company.location === selectedLocation;

    return matchesSearch && matchesIndustry && matchesSize && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Featured Companies</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover great places to work and advance your career
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>

            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.industry}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 line-clamp-2">{company.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1.5 text-gray-400" />
                    {company.size} employees
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Building2 className="h-4 w-4 mr-1.5 text-gray-400" />
                    Founded {company.founded}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="h-4 w-4 mr-1.5 text-gray-400" />
                    {company.openPositions} open positions
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}