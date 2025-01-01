import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  User, Mail, Phone, MapPin, GraduationCap, 
  Briefcase, Award, Code, Languages, Download,
  Plus, Trash2, ArrowLeft, ArrowRight
} from 'lucide-react';

type ResumeData = {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  education: Array<{
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  skills: Array<{
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  languages: Array<{
    language: string;
    proficiency: 'Basic' | 'Intermediate' | 'Fluent' | 'Native';
  }>;
};

const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  },
  education: [],
  experience: [],
  skills: [],
  certifications: [],
  languages: []
};

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState<keyof ResumeData>('personalInfo');
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const sections: Array<{ key: keyof ResumeData; title: string; icon: any }> = [
    { key: 'personalInfo', title: 'Personal Information', icon: User },
    { key: 'education', title: 'Education', icon: GraduationCap },
    { key: 'experience', title: 'Experience', icon: Briefcase },
    { key: 'skills', title: 'Skills', icon: Code },
    { key: 'certifications', title: 'Certifications', icon: Award },
    { key: 'languages', title: 'Languages', icon: Languages }
  ];

  const handleSectionSubmit = (data: any) => {
    setResumeData(prev => ({
      ...prev,
      [activeSection]: Array.isArray(prev[activeSection]) 
        ? [...prev[activeSection], data]
        : data
    }));
    reset();
  };

  const handleRemoveItem = (section: keyof ResumeData, index: number) => {
    setResumeData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).filter((_, i) => i !== index)
    }));
  };

  const handleGenerateResume = () => {
    console.log('Generating resume with data:', resumeData);
    // Here you would typically generate a PDF or other format
  };

  const renderPersonalInfo = () => (
    <form onSubmit={handleSubmit(handleSectionSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('fullName', { required: 'Full name is required' })}
            className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('phone', { required: 'Phone is required' })}
            className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('location', { required: 'Location is required' })}
            className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
        <div className="mt-1">
          <textarea
            {...register('summary', { required: 'Summary is required' })}
            rows={4}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
        >
          Save and Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );

  const renderEducation = () => (
    <div>
      <form onSubmit={handleSubmit(handleSectionSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Degree</label>
          <input
            {...register('degree', { required: 'Degree is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">School</label>
          <input
            {...register('school', { required: 'School is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              {...register('startDate', { required: 'Start date is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              {...register('endDate')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </button>
        </div>
      </form>

      {/* List of added education entries */}
      <div className="mt-6 space-y-4">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.school}</p>
                <p className="text-sm text-gray-500">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </p>
              </div>
              <button
                onClick={() => handleRemoveItem('education', index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExperience = () => (
    <div>
      <form onSubmit={handleSubmit(handleSectionSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            {...register('title', { required: 'Job title is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            {...register('company', { required: 'Company is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            {...register('location')}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              {...register('startDate', { required: 'Start date is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              {...register('endDate')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              disabled={watch('current')}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('current')}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            I currently work here
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Describe your responsibilities and achievements..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </button>
        </div>
      </form>

      {/* List of added experiences */}
      <div className="mt-6 space-y-4">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{exp.title}</h4>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
              </div>
              <button
                onClick={() => handleRemoveItem('experience', index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkills = () => (
    <div>
      <form onSubmit={handleSubmit(handleSectionSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Skill Name</label>
          <input
            {...register('name', { required: 'Skill name is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Proficiency Level</label>
          <select
            {...register('level', { required: 'Proficiency level is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
          </button>
        </div>
      </form>

      {/* List of added skills */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1"
            >
              <span className="text-sm font-medium text-gray-900">{skill.name}</span>
              <span className="ml-2 text-xs text-gray-500">{skill.level}</span>
              <button
                onClick={() => handleRemoveItem('skills', index)}
                className="ml-2 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCertifications = () => (
    <div>
      <form onSubmit={handleSubmit(handleSectionSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Certification Name</label>
          <input
            {...register('name', { required: 'Certification name is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Issuing Organization</label>
          <input
            {...register('issuer', { required: 'Issuer is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date Earned</label>
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Certification
          </button>
        </div>
      </form>

      {/* List of added certifications */}
      <div className="mt-6 space-y-4">
        {resumeData.certifications.map((cert, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
              <button
                onClick={() => handleRemoveItem('certifications', index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLanguages = () => (
    <div>
      <form onSubmit={handleSubmit(handleSectionSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <input
            {...register('language', { required: 'Language is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Proficiency</label>
          <select
            {...register('proficiency', { required: 'Proficiency is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Fluent">Fluent</option>
            <option value="Native">Native</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Language
          </button>
        </div>
      </form>

      {/* List of added languages */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {resumeData.languages.map((lang, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1"
            >
              <span className="text-sm font-medium text-gray-900">{lang.language}</span>
              <span className="ml-2 text-xs text-gray-500">{lang.proficiency}</span>
              <button
                onClick={() => handleRemoveItem('languages', index)}
                className="ml-2 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personalInfo':
        return renderPersonalInfo();
      case 'education':
        return renderEducation();
      case 'experience':
        return renderExperience();
      case 'skills':
        return renderSkills();
      case 'certifications':
        return renderCertifications();
      case 'languages':
        return renderLanguages();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg">
            {/* Header */}
            <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
              <h1 className="text-lg font-medium text-gray-900">Resume Builder</h1>
              <p className="mt-1 text-sm text-gray-600">
                Create a professional resume step by step
              </p>
            </div>

            {/* Progress Steps */}
            <div className="border-b border-gray-200">
              <nav className="px-4 flex space-x-8 sm:px-6 overflow-x-auto" aria-label="Progress">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.key}
                      onClick={() => setActiveSection(section.key)}
                      className={`
                        whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                        ${activeSection === section.key
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }
                      `}
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 mr-2" />
                        {section.title}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Form Section */}
            <div className="px-4 py-5 sm:p-6">
              {renderActiveSection()}
            </div>

            {/* Footer */}
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  onClick={handleGenerateResume}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Generate Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}