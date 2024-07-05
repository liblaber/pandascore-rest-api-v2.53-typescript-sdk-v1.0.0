import { z } from 'zod';

export const gameStatus = z.enum(['finished', 'not_played', 'not_started', 'running']);

export type GameStatus = z.infer<typeof gameStatus>;
