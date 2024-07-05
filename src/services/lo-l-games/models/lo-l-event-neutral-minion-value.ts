import { z } from 'zod';

export const loLEventNeutralMinionValue = z.enum([
  'Big Corbin',
  'Big Golem',
  'Big Wolf',
  'Blue Buff',
  'Gromp',
  'Red Buff',
  'Small Corbin',
  'Small Golem',
  'Small Wolf',
]);

export type LoLEventNeutralMinionValue = z.infer<typeof loLEventNeutralMinionValue>;
