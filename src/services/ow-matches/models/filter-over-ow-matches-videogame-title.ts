// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverOwMatchesVideogameTitle = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverOwMatchesVideogameTitle} filterOverOwMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverOwMatchesVideogameTitle = z.infer<typeof filterOverOwMatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwMatchesVideogameTitleResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwMatchesVideogameTitleRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
