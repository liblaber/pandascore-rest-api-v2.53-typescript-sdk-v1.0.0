import { z } from 'zod';

export const loLDrakeName = z.enum([
  'Chemtech Drake',
  'Cloud Drake',
  'Elder Drake',
  'Hextech Drake',
  'Infernal Drake',
  'Mountain Drake',
  'Ocean Drake',
]);

export type LoLDrakeName = z.infer<typeof loLDrakeName>;