import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLoLSpells = z.object({
  id: z.array(z.number()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  videogameVersion: z.any().optional(),
});

/**
 *
 * @typedef  {FilterOverLoLSpells} filterOverLoLSpells
 * @property {number[]}
 * @property {string[]}
 * @property {any} - Filter by the names of videogame versions, all versions using `filter[videogame_version]=all`, or by the latest version using `filter[videogame_version]=latest`
 */
export type FilterOverLoLSpells = z.infer<typeof filterOverLoLSpells>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLSpellsResponse = z
  .object({
    id: z.array(z.number()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    videogame_version: z.any().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    videogameVersion: data['videogame_version'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLSpellsRequest = z
  .object({
    id: z.array(z.number()).nullish(),
    name: z.array(z.string()).nullish(),
    videogameVersion: z.any().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    videogame_version: data['videogameVersion'],
  }));
