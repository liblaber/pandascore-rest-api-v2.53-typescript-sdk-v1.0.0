import { z } from 'zod';

export const incidentType = z.enum(['league', 'match', 'player', 'serie', 'team', 'tournament']);

export type IncidentType = z.infer<typeof incidentType>;
