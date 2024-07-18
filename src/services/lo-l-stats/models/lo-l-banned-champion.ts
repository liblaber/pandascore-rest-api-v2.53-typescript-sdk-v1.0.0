import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLBannedChampion: any = z.lazy(() => {
  return z.object({
    count: z.number().gte(0),
    name: z.string(),
  });
});

/**
 * A team's banned champion
 * @typedef  {LoLBannedChampion} loLBannedChampion - A team's banned champion - A team's banned champion
 * @property {number}
 * @property {string}
 */
export type LoLBannedChampion = z.infer<typeof loLBannedChampion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLBannedChampionResponse: any = z.lazy(() => {
  return z
    .object({
      count: z.number().gte(0),
      name: z.string(),
    })
    .transform((data) => ({
      count: data['count'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLBannedChampionRequest: any = z.lazy(() => {
  return z.object({ count: z.number().nullish(), name: z.string().nullish() }).transform((data) => ({
    count: data['count'],
    name: data['name'],
  }));
});
