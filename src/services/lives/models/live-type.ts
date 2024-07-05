import { z } from 'zod';

export const liveType = z.enum(['events', 'frames']);

export type LiveType = z.infer<typeof liveType>;
