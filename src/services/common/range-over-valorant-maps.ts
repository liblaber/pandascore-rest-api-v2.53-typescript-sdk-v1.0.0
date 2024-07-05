import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverValorantMaps = z.object({
  id: z.array(z.number()).min(2).max(2).optional(),
  name: z.array(z.string()).min(2).max(2).optional(),
  slug: z.array(z.string()).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverValorantMaps} rangeOverValorantMaps
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 */
export type RangeOverValorantMaps = z.infer<typeof rangeOverValorantMaps>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantMapsResponse = z
  .object({
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantMapsRequest = z
  .object({
    id: z.array(z.number()).nullish(),
    name: z.array(z.string()).nullish(),
    slug: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    slug: data['slug'],
  }));
