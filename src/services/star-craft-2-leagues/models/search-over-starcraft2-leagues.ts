import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverStarcraft2Leagues: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9:_-]+$/)
      .optional(),
    url: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SearchOverStarcraft2Leagues} searchOverStarcraft2Leagues
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SearchOverStarcraft2Leagues = z.infer<typeof searchOverStarcraft2Leagues>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverStarcraft2LeaguesResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9:_-]+$/)
        .optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      slug: data['slug'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverStarcraft2LeaguesRequest: any = z.lazy(() => {
  return z
    .object({ name: z.string().nullish(), slug: z.string().nullish(), url: z.string().nullish() })
    .transform((data) => ({
      name: data['name'],
      slug: data['slug'],
      url: data['url'],
    }));
});