import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantPlayerStreaks: any = z.lazy(() => {
  return z.object({
    _2Kills: z.number().gte(0).nullable(),
    _3Kills: z.number().gte(0).nullable(),
    _4Kills: z.number().gte(0).nullable(),
    _5Kills: z.number().gte(0).nullable(),
  });
});

/**
 * Streaks done by the player (in a given round)
 * @typedef  {ValorantPlayerStreaks} valorantPlayerStreaks - Streaks done by the player (in a given round) - Streaks done by the player (in a given round)
 * @property {number} - Number of 2-player kill streaks
 * @property {number} - Number of 3-player kill streaks
 * @property {number} - Number of 4-player kill streaks
 * @property {number} - Number of 3-player kill streaks
 */
export type ValorantPlayerStreaks = z.infer<typeof valorantPlayerStreaks>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantPlayerStreaksResponse: any = z.lazy(() => {
  return z
    .object({
      '2_kills': z.number().gte(0).nullable(),
      '3_kills': z.number().gte(0).nullable(),
      '4_kills': z.number().gte(0).nullable(),
      '5_kills': z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      _2Kills: data['2_kills'],
      _3Kills: data['3_kills'],
      _4Kills: data['4_kills'],
      _5Kills: data['5_kills'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantPlayerStreaksRequest: any = z.lazy(() => {
  return z
    .object({
      _2Kills: z.number().nullish(),
      _3Kills: z.number().nullish(),
      _4Kills: z.number().nullish(),
      _5Kills: z.number().nullish(),
    })
    .transform((data) => ({
      '2_kills': data['_2Kills'],
      '3_kills': data['_3Kills'],
      '4_kills': data['_4Kills'],
      '5_kills': data['_5Kills'],
    }));
});