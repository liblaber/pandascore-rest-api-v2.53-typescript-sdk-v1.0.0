import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverShortTournamentsVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverShortTournamentsVideogameTitle} filterOverShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverShortTournamentsVideogameTitle = z.infer<typeof filterOverShortTournamentsVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverShortTournamentsVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverShortTournamentsVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
