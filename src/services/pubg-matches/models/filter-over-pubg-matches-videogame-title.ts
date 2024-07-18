import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverPubgMatchesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverPubgMatchesVideogameTitle} filterOverPubgMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverPubgMatchesVideogameTitle = z.infer<typeof filterOverPubgMatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgMatchesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgMatchesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});