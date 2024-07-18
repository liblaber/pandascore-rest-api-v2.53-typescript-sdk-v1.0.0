import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverFifaMatchesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverFifaMatchesVideogameTitle} filterOverFifaMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverFifaMatchesVideogameTitle = z.infer<typeof filterOverFifaMatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverFifaMatchesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverFifaMatchesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
