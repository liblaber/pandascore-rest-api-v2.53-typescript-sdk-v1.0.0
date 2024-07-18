import { z } from 'zod';
import { videogameLeague, videogameLeagueRequest, videogameLeagueResponse } from './videogame-league';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogameR6siege: any = z.lazy(() => {
  return z.object({
    currentVersion: z
      .string()
      .regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/)
      .nullable(),
    id: z.any(),
    leagues: z.array(videogameLeague),
    name: z.any(),
    slug: z.any(),
  });
});

/**
 *
 * @typedef  {VideogameR6siege} videogameR6siege
 * @property {string}
 * @property {any}
 * @property {VideogameLeague[]}
 * @property {any}
 * @property {any}
 */
export type VideogameR6siege = z.infer<typeof videogameR6siege>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameR6siegeResponse: any = z.lazy(() => {
  return z
    .object({
      current_version: z
        .string()
        .regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/)
        .nullable(),
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
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameR6siegeRequest: any = z.lazy(() => {
  return z
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
});