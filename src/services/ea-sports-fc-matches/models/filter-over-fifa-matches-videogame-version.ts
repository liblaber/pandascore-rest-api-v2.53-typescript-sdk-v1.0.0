import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverFifaMatchesVideogameVersion: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 *
 * @typedef  {FilterOverFifaMatchesVideogameVersion} filterOverFifaMatchesVideogameVersion
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type FilterOverFifaMatchesVideogameVersion = z.infer<typeof filterOverFifaMatchesVideogameVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverFifaMatchesVideogameVersionResponse: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverFifaMatchesVideogameVersionRequest: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});