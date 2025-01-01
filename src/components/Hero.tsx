import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

interface HeroProps {
  onSearch: (keyword: string, location: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location);
  };

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Your Dream Job Awaits Globally
        </h1>
        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
          Connect with top employers worldwide. Find opportunities that match your skills and aspirations across borders.
        </p>

        <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 flex items-center justify-center"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Find Jobs
              </button>
            </div>
          </div>
        </form>

        <div className="mt-8 text-green-100">
          <p>Popular: Software Engineer, Data Scientist, Product Manager, Remote Jobs</p>
        </div>
      </div>
    </div>
  );
}