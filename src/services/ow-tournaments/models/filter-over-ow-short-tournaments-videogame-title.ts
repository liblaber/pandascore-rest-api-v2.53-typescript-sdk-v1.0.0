import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverOwShortTournamentsVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverOwShortTournamentsVideogameTitle} filterOverOwShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverOwShortTournamentsVideogameTitle = z.infer<typeof filterOverOwShortTournamentsVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwShortTournamentsVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwShortTournamentsVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});