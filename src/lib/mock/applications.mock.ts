import { Application } from '@/types';
import { mockOffers } from './offers.mock';
import { mockStudents } from './students.mock';

export const mockApplications: Application[] = [
  {
    id: 'app_1',
    offerId: mockOffers[0].id,
    offer: mockOffers[0],
    studentId: mockStudents[0].id,
    status: 'INTERVIEW',
    appliedAt: '2024-06-02T10:00:00.000Z',
    lastUpdateAt: '2024-06-10T10:00:00.000Z',
  },
  {
    id: 'app_2',
    offerId: mockOffers[1].id,
    offer: mockOffers[1],
    studentId: mockStudents[0].id,
    status: 'REVIEWING',
    appliedAt: '2024-06-09T10:00:00.000Z',
    lastUpdateAt: '2024-06-09T10:00:00.000Z',
  }
];
