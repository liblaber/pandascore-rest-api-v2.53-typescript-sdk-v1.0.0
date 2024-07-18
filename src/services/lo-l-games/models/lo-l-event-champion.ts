import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventChampion: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
  });
});

/**
 *
 * @typedef  {LoLEventChampion} loLEventChampion
 * @property {number}
 * @property {string}
 */
export type LoLEventChampion = z.infer<typeof loLEventChampion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventChampionResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventChampionRequest: any = z.lazy(() => {
  return z.object({ id: z.number().nullish(), name: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
});
