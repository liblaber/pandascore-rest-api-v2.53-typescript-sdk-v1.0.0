import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLAverageKillCounters: any = z.lazy(() => {
  return z.object({
    inhibitors: z.number().gte(0).nullable(),
    neutralMinions: z.number().gte(0).nullable(),
    neutralMinionsEnemyJungle: z.number().gte(0).nullable(),
    neutralMinionsTeamJungle: z.number().gte(0).nullable(),
    players: z.number().gte(0).nullable(),
    turrets: z.number().gte(0).nullable(),
    wards: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLAverageKillCounters} loLAverageKillCounters
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type LoLAverageKillCounters = z.infer<typeof loLAverageKillCounters>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLAverageKillCountersResponse: any = z.lazy(() => {
  return z
    .object({
      inhibitors: z.number().gte(0).nullable(),
      neutral_minions: z.number().gte(0).nullable(),
      neutral_minions_enemy_jungle: z.number().gte(0).nullable(),
      neutral_minions_team_jungle: z.number().gte(0).nullable(),
      players: z.number().gte(0).nullable(),
      turrets: z.number().gte(0).nullable(),
      wards: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      inhibitors: data['inhibitors'],
      neutralMinions: data['neutral_minions'],
      neutralMinionsEnemyJungle: data['neutral_minions_enemy_jungle'],
      neutralMinionsTeamJungle: data['neutral_minions_team_jungle'],
      players: data['players'],
      turrets: data['turrets'],
      wards: data['wards'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLAverageKillCountersRequest: any = z.lazy(() => {
  return z
    .object({
      inhibitors: z.number().nullish(),
      neutralMinions: z.number().nullish(),
      neutralMinionsEnemyJungle: z.number().nullish(),
      neutralMinionsTeamJungle: z.number().nullish(),
      players: z.number().nullish(),
      turrets: z.number().nullish(),
      wards: z.number().nullish(),
    })
    .transform((data) => ({
      inhibitors: data['inhibitors'],
      neutral_minions: data['neutralMinions'],
      neutral_minions_enemy_jungle: data['neutralMinionsEnemyJungle'],
      neutral_minions_team_jungle: data['neutralMinionsTeamJungle'],
      players: data['players'],
      turrets: data['turrets'],
      wards: data['wards'],
    }));
});
