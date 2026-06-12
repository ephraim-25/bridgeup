import { Company } from '@/types';

export const mockCompanies: Company[] = [
  {
    id: 'co_1',
    name: 'TechFlow',
    logoUrl: 'https://ui-avatars.com/api/?name=TechFlow&background=4F46E5&color=fff',
    industry: 'Éditeur de logiciels',
    location: 'Paris, France',
    description: 'TechFlow développe des solutions SaaS innovantes pour la gestion de la supply chain.',
    employeeCount: '50-200'
  },
  {
    id: 'co_2',
    name: 'GreenData',
    logoUrl: 'https://ui-avatars.com/api/?name=GreenData&background=10B981&color=fff',
    industry: 'Greentech',
    location: 'Lyon, France',
    description: 'Une startup utilisant l\'IA pour optimiser la consommation énergétique des bâtiments.',
    employeeCount: '10-50'
  }
];
