import { z } from 'zod';

export const matchStatus = z.enum(['canceled', 'finished', 'not_started', 'postponed', 'running']);

export type MatchStatus = z.infer<typeof matchStatus>;
