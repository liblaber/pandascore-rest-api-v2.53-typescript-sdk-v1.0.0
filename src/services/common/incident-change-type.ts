import { z } from 'zod';

export const incidentChangeType = z.enum(['creation', 'deletion', 'update']);

export type IncidentChangeType = z.infer<typeof incidentChangeType>;
