import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Mail, Phone, Calendar, FileText, Globe, 
  Briefcase, GraduationCap, Code, Github, Linkedin,
  CheckCircle, XCircle, User, AlertCircle
} from 'lucide-react';
import type { Application } from '../../types/application';

// Mock data - In a real app, this would come from an API
const mockApplication: Application = {
  id: '1',
  jobId: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  appliedAt: '2024-03-16',
  status: 'new',
  resume: 'https://example.com/resume.pdf',
  coverLetter: 'Dear Hiring Manager,\n\nI am writing to express my strong interest in the Senior Frontend Developer position at TechCorp Inc. With over 5 years of experience in React and modern frontend development, I believe I would be a valuable addition to your team.\n\nThroughout my career, I have demonstrated expertise in building scalable web applications, implementing state management solutions, and mentoring junior developers. I am particularly excited about the opportunity to contribute to innovative projects at TechCorp Inc.\n\nThank you for considering my application.\n\nBest regards,\nJohn Doe',
  experience: '- Senior Frontend Developer at WebTech (2020-Present)\n- Frontend Developer at StartupCo (2018-2020)\n- Junior Developer at TechStart (2016-2018)',
  education: '- Master of Computer Science, Tech University (2016)\n- Bachelor of Computer Science, State University (2014)',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'],
  portfolio: 'https://johndoe.dev',
  linkedIn: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe'
};

const statusColors = {
  new: 'bg-yellow-100 text-yellow-800',
  reviewed: 'bg-blue-100 text-blue-800',
  shortlisted: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800'
};

export default function ApplicationDetail() {
  const { jobId, applicationId } = useParams<{ jobId: string; applicationId: string }>();
  const [application, setApplication] = useState<Application>(mockApplication);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Application['status'] | null>(null);
  const [statusNote, setStatusNote] = useState('');

  const handleStatusChange = (newStatus: Application['status']) => {
    setSelectedStatus(newStatus);
    setShowStatusModal(true);
  };

  const confirmStatusChange = () => {
    if (selectedStatus) {
      // Here you would make an API call to update the status
      setApplication({
        ...application,
        status: selectedStatus
      });
      setShowStatusModal(false);
      setStatusNote('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to={`/employer/jobs/${jobId}`}
            className="text-green-600 hover:text-green-900"
          >
            ← Back to Job Applications
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Header */}
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">{application.name}</h1>
                  <p className="text-sm text-gray-500">Applied for: Senior Frontend Developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  statusColors[application.status]
                }`}>
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </span>
                {application.status !== 'shortlisted' && application.status !== 'rejected' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleStatusChange('shortlisted')}
                      className="inline-flex items-center px-3 py-1.5 border border-green-300 rounded-md text-sm font-medium text-green-700 bg-white hover:bg-green-50"
                    >
                      <CheckCircle className="h-4 w-4 mr-1.5" />
                      Shortlist
                    </button>
                    <button
                      onClick={() => handleStatusChange('rejected')}
                      className="inline-flex items-center px-3 py-1.5 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50"
                    >
                      <XCircle className="h-4 w-4 mr-1.5" />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href={`mailto:${application.email}`} className="text-gray-600 hover:text-green-600">
                  {application.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href={`tel:${application.phone}`} className="text-gray-600 hover:text-green-600">
                  {application.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">
                  Applied on {new Date(application.appliedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <a
                href={application.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                <FileText className="h-5 w-5 mr-2" />
                View Resume
              </a>
              {application.portfolio && (
                <a
                  href={application.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Portfolio
                </a>
              )}
              {application.linkedIn && (
                <a
                  href={application.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              )}
              {application.github && (
                <a
                  href={application.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="border-t border-gray-200">
            <dl>
              {/* Cover Letter */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Cover Letter
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                  {application.coverLetter}
                </dd>
              </div>

              {/* Experience */}
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Experience
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                  {application.experience}
                </dd>
              </div>

              {/* Education */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Education
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                  {application.education}
                </dd>
              </div>

              {/* Skills */}
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Skills
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {application.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Status Change Modal */}
      {showStatusModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {selectedStatus === 'shortlisted' ? 'Shortlist Candidate' : 'Reject Application'}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {selectedStatus === 'shortlisted'
                        ? 'Are you sure you want to shortlist this candidate? This will notify them of their selection for the next round.'
                        : 'Are you sure you want to reject this application? This will notify the candidate of the decision.'}
                    </p>
                    <div className="mt-4">
                      <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                        Add a note (optional)
                      </label>
                      <textarea
                        id="note"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        value={statusNote}
                        onChange={(e) => setStatusNote(e.target.value)}
                        placeholder={selectedStatus === 'shortlisted'
                          ? "Add any specific instructions or next steps..."
                          : "Add feedback or reason for rejection..."}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={confirmStatusChange}
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm ${
                    selectedStatus === 'shortlisted'
                      ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                      : 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                  }`}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowStatusModal(false);
                    setStatusNote('');
                  }}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}