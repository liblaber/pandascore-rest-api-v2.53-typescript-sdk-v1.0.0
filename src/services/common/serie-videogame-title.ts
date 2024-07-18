import { z } from 'zod';
import { videogameId } from './videogame-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const serieVideogameTitle: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    videogameId: videogameId,
  });
});

/**
 *
 * @typedef  {SerieVideogameTitle} serieVideogameTitle
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {VideogameId} - A videogame ID
 */
export type SerieVideogameTitle = z.infer<typeof serieVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const serieVideogameTitleResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
      videogame_id: videogameId,
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      slug: data['slug'],
      videogameId: data['videogame_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const serieVideogameTitleRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
      videogameId: videogameId.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      slug: data['slug'],
      videogame_id: data['videogameId'],
    }));
});
