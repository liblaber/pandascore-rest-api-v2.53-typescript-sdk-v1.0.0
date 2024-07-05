import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCsgoLeagues = z.object({
  id: z.array(z.number()).min(1).optional(),
  modifiedAt: z.array(z.string()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  slug: z.array(z.string()).min(1).optional(),
  url: z.array(z.string()).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverCsgoLeagues} filterOverCsgoLeagues
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 */
export type FilterOverCsgoLeagues = z.infer<typeof filterOverCsgoLeagues>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoLeaguesResponse = z
  .object({
    id: z.array(z.number()).min(1).optional(),
    modified_at: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    url: z.array(z.string()).min(1).optional(),
  })
  .transform((data) => ({
    id: data['id'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    slug: data['slug'],
    url: data['url'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoLeaguesRequest = z
  .object({
    id: z.array(z.number()).nullish(),
    modifiedAt: z.array(z.string()).nullish(),
    name: z.array(z.string()).nullish(),
    slug: z.array(z.string()).nullish(),
    url: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    slug: data['slug'],
    url: data['url'],
  }));
