import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLKillsSeries: any = z.lazy(() => {
  return z.object({
    doubleKills: z.number().gte(0).nullable(),
    pentaKills: z.number().gte(0).nullable(),
    quadraKills: z.number().gte(0).nullable(),
    tripleKills: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLKillsSeries} loLKillsSeries
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type LoLKillsSeries = z.infer<typeof loLKillsSeries>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLKillsSeriesResponse: any = z.lazy(() => {
  return z
    .object({
      double_kills: z.number().gte(0).nullable(),
      penta_kills: z.number().gte(0).nullable(),
      quadra_kills: z.number().gte(0).nullable(),
      triple_kills: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      doubleKills: data['double_kills'],
      pentaKills: data['penta_kills'],
      quadraKills: data['quadra_kills'],
      tripleKills: data['triple_kills'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLKillsSeriesRequest: any = z.lazy(() => {
  return z
    .object({
      doubleKills: z.number().nullish(),
      pentaKills: z.number().nullish(),
      quadraKills: z.number().nullish(),
      tripleKills: z.number().nullish(),
    })
    .transform((data) => ({
      double_kills: data['doubleKills'],
      penta_kills: data['pentaKills'],
      quadra_kills: data['quadraKills'],
      triple_kills: data['tripleKills'],
    }));
});
