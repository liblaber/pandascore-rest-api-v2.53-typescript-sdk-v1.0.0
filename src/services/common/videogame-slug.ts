import { z } from 'zod';

export const videogameSlug = z.enum([
  'cod-mw',
  'cs-go',
  'dota-2',
  'e-basketball',
  'e-cricket',
  'e-soccer',
  'fifa',
  'kog',
  'league-of-legends',
  'lol-wild-rift',
  'ow',
  'pubg',
  'r6-siege',
  'rl',
  'starcraft-2',
  'starcraft-brood-war',
  'valorant',
]);

export type VideogameSlug = z.infer<typeof videogameSlug>;
