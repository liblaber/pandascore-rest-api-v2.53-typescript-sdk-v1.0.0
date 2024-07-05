import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2Heroes = z.object({
  id: z.array(z.number()).min(1).optional(),
  localizedName: z.array(z.string()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverDota2Heroes} filterOverDota2Heroes
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 */
export type FilterOverDota2Heroes = z.infer<typeof filterOverDota2Heroes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2HeroesResponse = z
  .object({
    id: z.array(z.number()).min(1).optional(),
    localized_name: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
  })
  .transform((data) => ({
    id: data['id'],
    localizedName: data['localized_name'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2HeroesRequest = z
  .object({
    id: z.array(z.number()).nullish(),
    localizedName: z.array(z.string()).nullish(),
    name: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    localized_name: data['localizedName'],
    name: data['name'],
  }));
