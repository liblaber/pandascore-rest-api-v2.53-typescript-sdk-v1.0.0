import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseLeague = z.object({
  id: z.number().gte(1),
  imageUrl: z.string(),
  modifiedAt: z.string().min(1),
  name: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9:_-]+$/),
  url: z.string(),
});

/**
 *
 * @typedef  {BaseLeague} baseLeague
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BaseLeague = z.infer<typeof baseLeague>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseLeagueResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    modified_at: z.string().min(1),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9:_-]+$/),
    url: z.string(),
  })
  .transform((data) => ({
    id: data['id'],
    imageUrl: data['image_url'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    slug: data['slug'],
    url: data['url'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseLeagueRequest = z
  .object({
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    slug: z.string().nullish(),
    url: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    image_url: data['imageUrl'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    slug: data['slug'],
    url: data['url'],
  }));
