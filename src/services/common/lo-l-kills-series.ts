import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLKillsSeries = z.object({
  doubleKills: z.number().gte(0),
  pentaKills: z.number().gte(0),
  quadraKills: z.number().gte(0),
  tripleKills: z.number().gte(0),
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
export const loLKillsSeriesResponse = z
  .object({
    double_kills: z.number().gte(0),
    penta_kills: z.number().gte(0),
    quadra_kills: z.number().gte(0),
    triple_kills: z.number().gte(0),
  })
  .transform((data) => ({
    doubleKills: data['double_kills'],
    pentaKills: data['penta_kills'],
    quadraKills: data['quadra_kills'],
    tripleKills: data['triple_kills'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLKillsSeriesRequest = z
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
