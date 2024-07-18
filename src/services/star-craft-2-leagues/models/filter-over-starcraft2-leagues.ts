import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraft2Leagues: any = z.lazy(() => {
  return z.object({
    id: z.array(z.number()).min(1).optional(),
    modifiedAt: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    url: z.array(z.string()).min(1).optional(),
  });
});

/**
 *
 * @typedef  {FilterOverStarcraft2Leagues} filterOverStarcraft2Leagues
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 */
export type FilterOverStarcraft2Leagues = z.infer<typeof filterOverStarcraft2Leagues>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2LeaguesResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(z.number()).min(1).optional(),
      modified_at: z.array(z.string()).min(1).optional(),
      name: z.array(z.string()).min(1).optional(),
      slug: z.array(z.string()).min(1).optional(),
      url: z.array(z.string()).min(1).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      slug: data['slug'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2LeaguesRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.array(z.number()).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
      url: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      slug: data['slug'],
      url: data['url'],
    }));
});
