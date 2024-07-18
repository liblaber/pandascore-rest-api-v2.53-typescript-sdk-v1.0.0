import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverMatchesVideogameVersion: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 *
 * @typedef  {FilterOverMatchesVideogameVersion} filterOverMatchesVideogameVersion
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type FilterOverMatchesVideogameVersion = z.infer<typeof filterOverMatchesVideogameVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverMatchesVideogameVersionResponse: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverMatchesVideogameVersionRequest: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});