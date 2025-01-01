import React from 'react';
import { Globe, Building2, UserCircle, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <Globe className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GlobalCareer</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Find Jobs</Link>
            <Link to="/companies" className="text-gray-700 hover:text-green-600">Companies</Link>
            <Link to="/resources" className="text-gray-700 hover:text-green-600">Resources</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Link to="/employer/pricing" className="flex items-center text-gray-700 hover:text-green-600">
                <Building2 className="h-5 w-5 mr-1" />
                For Employers
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/employer/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Pricing Plans
                  </Link>
                  <Link to="/employer/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Recruitment Solutions
                  </Link>
                  <Link to="/employer/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Employer Login
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/jobseeker/login" className="flex items-center px-4 py-2 rounded-full text-white bg-green-600 hover:bg-green-700">
              <UserCircle className="h-5 w-5 mr-1" />
              Sign In
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600">Find Jobs</Link>
              <Link to="/companies" className="text-gray-700 hover:text-green-600">Companies</Link>
              <Link to="/resources" className="text-gray-700 hover:text-green-600">Resources</Link>
              <Link to="/employer/pricing" className="text-gray-700 hover:text-green-600">Pricing Plans</Link>
              <Link to="/employer/solutions" className="text-gray-700 hover:text-green-600">Recruitment Solutions</Link>
              <Link to="/jobseeker/login" className="flex items-center justify-center px-4 py-2 rounded-full text-white bg-green-600 hover:bg-green-700">
                <UserCircle className="h-5 w-5 mr-1" />
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}