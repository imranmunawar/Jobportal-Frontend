import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobDetail from './pages/jobs/JobDetail';
import CompanyList from './pages/companies/CompanyList';
import CompanyDetail from './pages/companies/CompanyDetail';
import EmployerLogin from './pages/employer/Login';
import EmployerSignup from './pages/employer/Signup';
import EmployerDashboard from './pages/employer/Dashboard';
import PricingPlans from './pages/employer/PricingPlans';
import RecruitmentSolutions from './pages/employer/RecruitmentSolutions';
import PostJob from './pages/employer/PostJob';
import JobListing from './pages/employer/JobListing';
import EmployerJobDetail from './pages/employer/JobDetail';
import EditJob from './pages/employer/EditJob';
import ApplicationDetail from './pages/employer/ApplicationDetail';
import JobSeekerLogin from './pages/jobseeker/Login';
import JobSeekerSignup from './pages/jobseeker/Signup';
import JobSeekerDashboard from './pages/jobseeker/Dashboard';
import Resources from './pages/resources/Resources';
import ResumeBuilder from './pages/jobseeker/ResumeBuilder';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/employer/pricing" element={<PricingPlans />} />
            <Route path="/employer/solutions" element={<RecruitmentSolutions />} />
            <Route path="/employer/login" element={<EmployerLogin />} />
            <Route path="/employer/signup" element={<EmployerSignup />} />
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/employer/post-job" element={<PostJob />} />
            <Route path="/employer/jobs" element={<JobListing />} />
            <Route path="/employer/jobs/:id" element={<EmployerJobDetail />} />
            <Route path="/employer/jobs/:id/edit" element={<EditJob />} />
            <Route path="/employer/jobs/:jobId/applications/:applicationId" element={<ApplicationDetail />} />
            <Route path="/jobseeker/login" element={<JobSeekerLogin />} />
            <Route path="/jobseeker/signup" element={<JobSeekerSignup />} />
            <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
            <Route path="/jobseeker/resume-builder" element={<ResumeBuilder />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}