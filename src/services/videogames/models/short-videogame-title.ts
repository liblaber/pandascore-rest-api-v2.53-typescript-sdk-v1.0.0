// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const shortVideogameTitle = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  });
});

/**
 *
 * @typedef  {ShortVideogameTitle} shortVideogameTitle
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type ShortVideogameTitle = z.infer<typeof shortVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const shortVideogameTitleResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const shortVideogameTitleRequest = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), name: z.string().nullish(), slug: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      slug: data['slug'],
    }));
});
