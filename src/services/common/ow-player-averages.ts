import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerAverages = z.object({
  averageTimeToChargeUltimate: z.number().gte(0),
  deathsCount: z.number().gte(0),
  deathsPer10Minutes: z.number().gte(0),
  destructionsCount: z.number().gte(0),
  destructionsPer10Minutes: z.number().gte(0),
  killsCount: z.number().gte(0),
  killsPer10Minutes: z.number().gte(0),
  mapDraw: z.number().gte(0),
  mapLost: z.number().gte(0),
  mapWon: z.number().gte(0),
  resurrectionsCount: z.number().gte(0),
  resurrectionsPer10Minutes: z.number().gte(0),
  ultimatesCount: z.number().gte(0),
  ultimatesPer10Minutes: z.number().gte(0),
});

/**
 *
 * @typedef  {OwPlayerAverages} owPlayerAverages
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type OwPlayerAverages = z.infer<typeof owPlayerAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerAveragesResponse = z
  .object({
    average_time_to_charge_ultimate: z.number().gte(0),
    deaths_count: z.number().gte(0),
    deaths_per_10_minutes: z.number().gte(0),
    destructions_count: z.number().gte(0),
    destructions_per_10_minutes: z.number().gte(0),
    kills_count: z.number().gte(0),
    kills_per_10_minutes: z.number().gte(0),
    map_draw: z.number().gte(0),
    map_lost: z.number().gte(0),
    map_won: z.number().gte(0),
    resurrections_count: z.number().gte(0),
    resurrections_per_10_minutes: z.number().gte(0),
    ultimates_count: z.number().gte(0),
    ultimates_per_10_minutes: z.number().gte(0),
  })
  .transform((data) => ({
    averageTimeToChargeUltimate: data['average_time_to_charge_ultimate'],
    deathsCount: data['deaths_count'],
    deathsPer10Minutes: data['deaths_per_10_minutes'],
    destructionsCount: data['destructions_count'],
    destructionsPer10Minutes: data['destructions_per_10_minutes'],
    killsCount: data['kills_count'],
    killsPer10Minutes: data['kills_per_10_minutes'],
    mapDraw: data['map_draw'],
    mapLost: data['map_lost'],
    mapWon: data['map_won'],
    resurrectionsCount: data['resurrections_count'],
    resurrectionsPer10Minutes: data['resurrections_per_10_minutes'],
    ultimatesCount: data['ultimates_count'],
    ultimatesPer10Minutes: data['ultimates_per_10_minutes'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerAveragesRequest = z
  .object({
    averageTimeToChargeUltimate: z.number().nullish(),
    deathsCount: z.number().nullish(),
    deathsPer10Minutes: z.number().nullish(),
    destructionsCount: z.number().nullish(),
    destructionsPer10Minutes: z.number().nullish(),
    killsCount: z.number().nullish(),
    killsPer10Minutes: z.number().nullish(),
    mapDraw: z.number().nullish(),
    mapLost: z.number().nullish(),
    mapWon: z.number().nullish(),
    resurrectionsCount: z.number().nullish(),
    resurrectionsPer10Minutes: z.number().nullish(),
    ultimatesCount: z.number().nullish(),
    ultimatesPer10Minutes: z.number().nullish(),
  })
  .transform((data) => ({
    average_time_to_charge_ultimate: data['averageTimeToChargeUltimate'],
    deaths_count: data['deathsCount'],
    deaths_per_10_minutes: data['deathsPer10Minutes'],
    destructions_count: data['destructionsCount'],
    destructions_per_10_minutes: data['destructionsPer10Minutes'],
    kills_count: data['killsCount'],
    kills_per_10_minutes: data['killsPer10Minutes'],
    map_draw: data['mapDraw'],
    map_lost: data['mapLost'],
    map_won: data['mapWon'],
    resurrections_count: data['resurrectionsCount'],
    resurrections_per_10_minutes: data['resurrectionsPer10Minutes'],
    ultimates_count: data['ultimatesCount'],
    ultimates_per_10_minutes: data['ultimatesPer10Minutes'],
  }));
