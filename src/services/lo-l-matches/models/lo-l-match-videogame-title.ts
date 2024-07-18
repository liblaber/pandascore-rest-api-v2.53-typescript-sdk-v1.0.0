import { z } from 'zod';
import { videogameId } from '../../common/videogame-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatchVideogameTitle: any = z.lazy(() => {
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
 * @typedef  {LoLMatchVideogameTitle} loLMatchVideogameTitle
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {VideogameId} - A videogame ID
 */
export type LoLMatchVideogameTitle = z.infer<typeof loLMatchVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchVideogameTitleResponse: any = z.lazy(() => {
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
export const loLMatchVideogameTitleRequest: any = z.lazy(() => {
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