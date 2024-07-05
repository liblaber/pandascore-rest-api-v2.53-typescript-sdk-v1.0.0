import { z } from 'zod';

export const incidentDeletionReasonDeleted = z.enum(['Model deleted']);

export type IncidentDeletionReasonDeleted = z.infer<typeof incidentDeletionReasonDeleted>;
