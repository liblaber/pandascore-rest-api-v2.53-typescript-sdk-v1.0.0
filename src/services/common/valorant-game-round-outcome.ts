import { z } from 'zod';

export const valorantGameRoundOutcome = z.enum([
  'attack_timeout',
  'attackers_eliminated',
  'defenders_eliminated',
  'spike_defused',
  'spike_exploded',
]);

export type ValorantGameRoundOutcome = z.infer<typeof valorantGameRoundOutcome>;