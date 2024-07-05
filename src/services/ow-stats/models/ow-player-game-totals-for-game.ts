import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerGameTotalsForGame = z.object({
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
  ultimates: z.number().gte(0),
});

/**
 *
 * @typedef  {OwPlayerGameTotalsForGame} owPlayerGameTotalsForGame
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
export type OwPlayerGameTotalsForGame = z.infer<typeof owPlayerGameTotalsForGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerGameTotalsForGameResponse = z
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
    ultimates: data['ultimates'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerGameTotalsForGameRequest = z
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
    ultimates: data['ultimates'],
  }));
