import { z } from 'zod';
import { baseSerie, baseSerieRequest, baseSerieResponse } from './base-serie';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogameLeague = z.object({
  id: z.number().gte(1),
  imageUrl: z.string(),
  modifiedAt: z.string().min(1),
  name: z.string(),
  series: z.array(baseSerie),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9:_-]+$/),
  url: z.string(),
});

/**
 *
 * @typedef  {VideogameLeague} videogameLeague
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {BaseSerie[]}
 * @property {string}
 * @property {string}
 */
export type VideogameLeague = z.infer<typeof videogameLeague>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameLeagueResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    modified_at: z.string().min(1),
    name: z.string(),
    series: z.array(baseSerieResponse),
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
    series: data['series'],
    slug: data['slug'],
    url: data['url'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameLeagueRequest = z
  .object({
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    series: z.array(baseSerieRequest).nullish(),
    slug: z.string().nullish(),
    url: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    image_url: data['imageUrl'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    series: data['series'],
    slug: data['slug'],
    url: data['url'],
  }));
