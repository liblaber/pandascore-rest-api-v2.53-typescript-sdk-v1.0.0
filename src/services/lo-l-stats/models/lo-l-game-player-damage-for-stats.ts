import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGamePlayerDamageForStats: any = z.lazy(() => {
  return z.object({
    dealt: z.number().gte(0).nullable(),
    dealtToChampions: z.number().gte(0).nullable(),
    taken: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLGamePlayerDamageForStats} loLGamePlayerDamageForStats
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type LoLGamePlayerDamageForStats = z.infer<typeof loLGamePlayerDamageForStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerDamageForStatsResponse: any = z.lazy(() => {
  return z
    .object({
      dealt: z.number().gte(0).nullable(),
      dealt_to_champions: z.number().gte(0).nullable(),
      taken: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      dealt: data['dealt'],
      dealtToChampions: data['dealt_to_champions'],
      taken: data['taken'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerDamageForStatsRequest: any = z.lazy(() => {
  return z
    .object({ dealt: z.number().nullish(), dealtToChampions: z.number().nullish(), taken: z.number().nullish() })
    .transform((data) => ({
      dealt: data['dealt'],
      dealt_to_champions: data['dealtToChampions'],
      taken: data['taken'],
    }));
});