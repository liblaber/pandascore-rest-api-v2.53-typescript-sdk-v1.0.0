import { z } from 'zod';

export const loLEventType = z.enum([
  'baron_nashor_kill',
  'drake_kill',
  'inhibitor_kill',
  'other',
  'player_kill',
  'rift_herald_kill',
  'suicide',
  'tower_kill',
  'voidgrub_kill',
]);

export type LoLEventType = z.infer<typeof loLEventType>;
