// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const loLTeamLastGameWinnerType = z.enum(['Player', 'Team']);

export type LoLTeamLastGameWinnerType = z.infer<typeof loLTeamLastGameWinnerType>;
