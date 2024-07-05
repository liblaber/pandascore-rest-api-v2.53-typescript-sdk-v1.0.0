import { z } from 'zod';
import {
  videogameLeague,
  videogameLeagueRequest,
  videogameLeagueResponse,
} from './videogame-league';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogameStarcraftBroodWar = z.object({
  currentVersion: z.string().regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/),
  id: z.any(),
  leagues: z.array(videogameLeague),
  name: z.any(),
  slug: z.any(),
});

/**
 *
 * @typedef  {VideogameStarcraftBroodWar} videogameStarcraftBroodWar
 * @property {string}
 * @property {any}
 * @property {VideogameLeague[]}
 * @property {any}
 * @property {any}
 */
export type VideogameStarcraftBroodWar = z.infer<typeof videogameStarcraftBroodWar>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameStarcraftBroodWarResponse = z
  .object({
    current_version: z.string().regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/),
    id: z.any(),
    leagues: z.array(videogameLeagueResponse),
    name: z.any(),
    slug: z.any(),
  })
  .transform((data) => ({
    currentVersion: data['current_version'],
    id: data['id'],
    leagues: data['leagues'],
    name: data['name'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameStarcraftBroodWarRequest = z
  .object({
    currentVersion: z.string().nullish(),
    id: z.any().nullish(),
    leagues: z.array(videogameLeagueRequest).nullish(),
    name: z.any().nullish(),
    slug: z.any().nullish(),
  })
  .transform((data) => ({
    current_version: data['currentVersion'],
    id: data['id'],
    leagues: data['leagues'],
    name: data['name'],
    slug: data['slug'],
  }));
