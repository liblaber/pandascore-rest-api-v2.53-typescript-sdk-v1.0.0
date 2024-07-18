// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const csgoEventType = z.enum(['kill', 'round_end', 'round_start']);

export type CsgoEventType = z.infer<typeof csgoEventType>;
