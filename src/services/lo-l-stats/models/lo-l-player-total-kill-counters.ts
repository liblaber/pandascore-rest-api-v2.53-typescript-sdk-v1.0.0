import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerTotalKillCounters: any = z.lazy(() => {
  return z.object({
    inhibitors: z.number().gte(0).nullable(),
    turrets: z.number().gte(0).nullable(),
    wards: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLPlayerTotalKillCounters} loLPlayerTotalKillCounters
 * @property {number} - Number of inhibitors killed by the player
 * @property {number} - Number of turrets killed
 * @property {number} - Number of wards killed by the player
 */
export type LoLPlayerTotalKillCounters = z.infer<typeof loLPlayerTotalKillCounters>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerTotalKillCountersResponse: any = z.lazy(() => {
  return z
    .object({
      inhibitors: z.number().gte(0).nullable(),
      turrets: z.number().gte(0).nullable(),
      wards: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      inhibitors: data['inhibitors'],
      turrets: data['turrets'],
      wards: data['wards'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerTotalKillCountersRequest: any = z.lazy(() => {
  return z
    .object({ inhibitors: z.number().nullish(), turrets: z.number().nullish(), wards: z.number().nullish() })
    .transform((data) => ({
      inhibitors: data['inhibitors'],
      turrets: data['turrets'],
      wards: data['wards'],
    }));
});
