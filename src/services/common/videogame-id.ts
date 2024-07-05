import { z } from 'zod';

export const videogameId = z.enum([
  '1',
  '3',
  '4',
  '14',
  '20',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
]);

export type VideogameId = z.infer<typeof videogameId>;
