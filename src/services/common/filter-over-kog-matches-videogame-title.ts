import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverKogMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverKogMatchesVideogameTitle} filterOverKogMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverKogMatchesVideogameTitle = z.infer<typeof filterOverKogMatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverKogMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverKogMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
