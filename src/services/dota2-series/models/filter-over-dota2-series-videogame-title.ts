// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2SeriesVideogameTitle = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverDota2SeriesVideogameTitle} filterOverDota2SeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverDota2SeriesVideogameTitle = z.infer<typeof filterOverDota2SeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2SeriesVideogameTitleResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2SeriesVideogameTitleRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
