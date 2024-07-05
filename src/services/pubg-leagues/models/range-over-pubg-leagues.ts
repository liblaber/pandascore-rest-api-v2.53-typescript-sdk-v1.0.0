import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverPubgLeagues = z.object({
  id: z.array(z.number()).min(2).max(2).optional(),
  modifiedAt: z.array(z.string()).min(2).max(2).optional(),
  name: z.array(z.string()).min(2).max(2).optional(),
  slug: z.array(z.string()).min(2).max(2).optional(),
  url: z.array(z.string()).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverPubgLeagues} rangeOverPubgLeagues
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 */
export type RangeOverPubgLeagues = z.infer<typeof rangeOverPubgLeagues>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverPubgLeaguesResponse = z
  .object({
    id: z.array(z.number()).min(2).max(2).optional(),
    modified_at: z.array(z.string()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
    url: z.array(z.string()).min(2).max(2).optional(),
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
export const rangeOverPubgLeaguesRequest = z
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
