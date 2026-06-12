import { Student } from '@/types';
import { mockSkills } from './skills.mock';

export const mockStudents: Student[] = [
  {
    id: 'st_1',
    firstName: 'Alexandre',
    lastName: 'Dubois',
    avatarUrl: 'https://ui-avatars.com/api/?name=Alexandre+Dubois&background=e2e8f0&color=475569',
    headline: 'Étudiant en M1 Ingénierie Web',
    location: 'Paris, France',
    profileCompletion: 85,
    skills: [mockSkills[0], mockSkills[1], mockSkills[2], mockSkills[7]],
    lookingFor: ['ALTERNANCE', 'STAGE']
  }
];
