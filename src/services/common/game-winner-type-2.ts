// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const gameWinnerType2 = z.enum(['Player', 'Team']);

export type GameWinnerType2 = z.infer<typeof gameWinnerType2>;
