import React from 'react';
import { Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-white">GlobalCareer</span>
            </div>
            <p className="text-sm">
              Connecting talent with opportunities worldwide. Your next career move starts here.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-green-400">Career Resources</a></li>
              <li><a href="#" className="hover:text-green-400">Resume Builder</a></li>
              <li><a href="#" className="hover:text-green-400">Job Alerts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Post a Job</a></li>
              <li><a href="#" className="hover:text-green-400">Browse Candidates</a></li>
              <li><a href="#" className="hover:text-green-400">Recruitment Solutions</a></li>
              <li><a href="#" className="hover:text-green-400">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-green-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-400"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-400"><Instagram className="h-5 w-5" /></a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for job updates and career tips.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} GlobalCareer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}