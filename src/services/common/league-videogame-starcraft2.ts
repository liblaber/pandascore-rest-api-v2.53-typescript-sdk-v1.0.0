import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const leagueVideogameStarcraft2: any = z.lazy(() => {
  return z.object({
    currentVersion: z
      .string()
      .regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/)
      .nullable(),
    id: z.any(),
    name: z.any(),
    slug: z.any(),
  });
});

/**
 *
 * @typedef  {LeagueVideogameStarcraft2} leagueVideogameStarcraft2
 * @property {string}
 * @property {any}
 * @property {any}
 * @property {any}
 */
export type LeagueVideogameStarcraft2 = z.infer<typeof leagueVideogameStarcraft2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const leagueVideogameStarcraft2Response: any = z.lazy(() => {
  return z
    .object({
      current_version: z
        .string()
        .regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/)
        .nullable(),
      id: z.any(),
      name: z.any(),
      slug: z.any(),
    })
    .transform((data) => ({
      currentVersion: data['current_version'],
      id: data['id'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const leagueVideogameStarcraft2Request: any = z.lazy(() => {
  return z
    .object({
      currentVersion: z.string().nullish(),
      id: z.any().nullish(),
      name: z.any().nullish(),
      slug: z.any().nullish(),
    })
    .transform((data) => ({
      current_version: data['currentVersion'],
      id: data['id'],
      name: data['name'],
      slug: data['slug'],
    }));
});
