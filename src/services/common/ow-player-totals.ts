import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerTotals = z.object({
  averageTimeToChargeUltimate: z.number().gte(0),
  damageDone: z.number().gte(0),
  deaths: z.number().gte(0),
  destructions: z.number().gte(0),
  eliminations: z.number().gte(0),
  healingDone: z.number().gte(0),
  kills: z.number().gte(0),
  mapDraw: z.number().gte(0),
  mapLost: z.number().gte(0),
  mapWon: z.number().gte(0),
  resurrections: z.number().gte(0),
  timePlayed: z.number().gte(0),
  ultimates: z.number().gte(0),
});

/**
 *
 * @typedef  {OwPlayerTotals} owPlayerTotals
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
 * @property {number} - Time in seconds
 * @property {number}
 */
export type OwPlayerTotals = z.infer<typeof owPlayerTotals>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerTotalsResponse = z
  .object({
    average_time_to_charge_ultimate: z.number().gte(0),
    damage_done: z.number().gte(0),
    deaths: z.number().gte(0),
    destructions: z.number().gte(0),
    eliminations: z.number().gte(0),
    healing_done: z.number().gte(0),
    kills: z.number().gte(0),
    map_draw: z.number().gte(0),
    map_lost: z.number().gte(0),
    map_won: z.number().gte(0),
    resurrections: z.number().gte(0),
    time_played: z.number().gte(0),
    ultimates: z.number().gte(0),
  })
  .transform((data) => ({
    averageTimeToChargeUltimate: data['average_time_to_charge_ultimate'],
    damageDone: data['damage_done'],
    deaths: data['deaths'],
    destructions: data['destructions'],
    eliminations: data['eliminations'],
    healingDone: data['healing_done'],
    kills: data['kills'],
    mapDraw: data['map_draw'],
    mapLost: data['map_lost'],
    mapWon: data['map_won'],
    resurrections: data['resurrections'],
    timePlayed: data['time_played'],
    ultimates: data['ultimates'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerTotalsRequest = z
  .object({
    averageTimeToChargeUltimate: z.number().nullish(),
    damageDone: z.number().nullish(),
    deaths: z.number().nullish(),
    destructions: z.number().nullish(),
    eliminations: z.number().nullish(),
    healingDone: z.number().nullish(),
    kills: z.number().nullish(),
    mapDraw: z.number().nullish(),
    mapLost: z.number().nullish(),
    mapWon: z.number().nullish(),
    resurrections: z.number().nullish(),
    timePlayed: z.number().nullish(),
    ultimates: z.number().nullish(),
  })
  .transform((data) => ({
    average_time_to_charge_ultimate: data['averageTimeToChargeUltimate'],
    damage_done: data['damageDone'],
    deaths: data['deaths'],
    destructions: data['destructions'],
    eliminations: data['eliminations'],
    healing_done: data['healingDone'],
    kills: data['kills'],
    map_draw: data['mapDraw'],
    map_lost: data['mapLost'],
    map_won: data['mapWon'],
    resurrections: data['resurrections'],
    time_played: data['timePlayed'],
    ultimates: data['ultimates'],
  }));
