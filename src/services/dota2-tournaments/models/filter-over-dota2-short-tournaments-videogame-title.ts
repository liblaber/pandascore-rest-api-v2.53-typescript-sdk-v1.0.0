// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2ShortTournamentsVideogameTitle = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverDota2ShortTournamentsVideogameTitle} filterOverDota2ShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverDota2ShortTournamentsVideogameTitle = z.infer<
  typeof filterOverDota2ShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2ShortTournamentsVideogameTitleResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2ShortTournamentsVideogameTitleRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
