import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCodmwMatchesVideogameVersion: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 *
 * @typedef  {FilterOverCodmwMatchesVideogameVersion} filterOverCodmwMatchesVideogameVersion
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type FilterOverCodmwMatchesVideogameVersion = z.infer<typeof filterOverCodmwMatchesVideogameVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwMatchesVideogameVersionResponse: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwMatchesVideogameVersionRequest: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});
