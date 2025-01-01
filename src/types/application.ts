export interface Application {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  appliedAt: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
  resume: string;
  coverLetter: string;
  experience: string;
  education: string;
  skills: string[];
  portfolio?: string;
  linkedIn?: string;
  github?: string;
}