import { z } from 'zod';

export const deletionIncidentChangeType = z.enum(['deletion']);

export type DeletionIncidentChangeType = z.infer<typeof deletionIncidentChangeType>;
