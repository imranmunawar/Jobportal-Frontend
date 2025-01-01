export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string;
  postedAt: string;
  status: 'active' | 'closed';
  applicationsCount: number;
}