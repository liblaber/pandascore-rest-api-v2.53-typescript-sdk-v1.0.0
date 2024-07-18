import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCodmwShortTournamentsVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverCodmwShortTournamentsVideogameTitle} filterOverCodmwShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverCodmwShortTournamentsVideogameTitle = z.infer<
  typeof filterOverCodmwShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwShortTournamentsVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwShortTournamentsVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
