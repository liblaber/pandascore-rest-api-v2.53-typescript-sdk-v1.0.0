import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2MatchesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverDota2MatchesVideogameTitle} filterOverDota2MatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverDota2MatchesVideogameTitle = z.infer<typeof filterOverDota2MatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2MatchesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2MatchesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});