import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseLoLChampion: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string(),
    name: z.string(),
  });
});

/**
 *
 * @typedef  {BaseLoLChampion} baseLoLChampion
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type BaseLoLChampion = z.infer<typeof baseLoLChampion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseLoLChampionResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string(),
      name: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseLoLChampionRequest: any = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), imageUrl: z.string().nullish(), name: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      name: data['name'],
    }));
});