// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const matchWinnerType = z.enum(['Player', 'Team']);

export type MatchWinnerType = z.infer<typeof matchWinnerType>;
