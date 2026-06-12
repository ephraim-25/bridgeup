export type ContractType = 'STAGE' | 'ALTERNANCE' | 'CDI' | 'CDD';

export interface Company {
  id: string;
  name: string;
  logoUrl?: string;
  industry: string;
  location: string;
  description: string;
  employeeCount: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'TECH' | 'SOFT' | 'LANGUAGE' | 'OTHER';
}

export interface Offer {
  id: string;
  title: string;
  companyId: string;
  company?: Company;
  contractType: ContractType;
  location: string;
  remote: 'FULL' | 'HYBRID' | 'NO';
  salary?: string;
  description: string;
  requirements: string[];
  skills: Skill[];
  postedAt: string; // ISO date string
  expiresAt?: string;
}

export type ApplicationStatus = 'PENDING' | 'REVIEWING' | 'INTERVIEW' | 'ACCEPTED' | 'REJECTED';

export interface Application {
  id: string;
  offerId: string;
  offer?: Offer;
  studentId: string;
  status: ApplicationStatus;
  appliedAt: string;
  lastUpdateAt: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  headline: string;
  location: string;
  profileCompletion: number; // 0 to 100
  skills: Skill[];
  lookingFor: ContractType[];
}
