import { Offer } from '@/types';
import { mockCompanies } from './companies.mock';
import { mockSkills } from './skills.mock';

export const mockOffers: Offer[] = [
  {
    id: 'of_1',
    title: 'Développeur Fullstack React/Node.js',
    companyId: mockCompanies[0].id,
    company: mockCompanies[0],
    contractType: 'ALTERNANCE',
    location: 'Paris, France',
    remote: 'HYBRID',
    salary: '1200€ - 1500€ / mois',
    description: 'Nous recherchons un développeur fullstack passionné pour rejoindre notre équipe produit...',
    requirements: [
      'Bonne connaissance de React et Node.js',
      'Esprit d\'équipe et autonomie',
      'Première expérience avec TypeScript appréciée'
    ],
    skills: [mockSkills[0], mockSkills[2], mockSkills[3]],
    postedAt: '2024-06-10T10:00:00.000Z',
  },
  {
    id: 'of_2',
    title: 'UX/UI Designer Junior',
    companyId: mockCompanies[1].id,
    company: mockCompanies[1],
    contractType: 'STAGE',
    location: 'Lyon, France',
    remote: 'FULL',
    salary: 'Gratification légale + bonus',
    description: 'Rejoignez GreenData pour concevoir les interfaces de notre nouvelle plateforme B2B...',
    requirements: [
      'Maîtrise de Figma',
      'Portfolio avec des projets web/mobile',
      'Sensibilité à l\'écoconception'
    ],
    skills: [mockSkills[4], mockSkills[6]],
    postedAt: '2024-06-07T10:00:00.000Z',
  }
];
