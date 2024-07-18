import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamMapStats: any = z.lazy(() => {
  return z.object({
    ctPistolRoundTotalPlayed: z.number().gte(0),
    ctPistolRoundWins: z.number().gte(0),
    ctRoundTotalPlayed: z.number().gte(0),
    ctRoundWins: z.number().gte(0),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    losses: z.number().gte(0),
    name: z.string(),
    pistolRoundTotalPlayed: z.number().gte(0),
    roundTotalPlayed: z.number().gte(0),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    tPistolRoundTotalPlayed: z.number().gte(0),
    tPistolRoundWins: z.number().gte(0),
    tRoundTotalPlayed: z.number().gte(0),
    tRoundWins: z.number().gte(0),
    totalPlayed: z.number().gte(0),
    wins: z.number().gte(0),
  });
});

/**
 * Statistics for a map
 * @typedef  {CsgoTeamMapStats} csgoTeamMapStats - Statistics for a map - Statistics for a map
 * @property {number} - Number of pistol rounds played as Counter-Terrorists on this map
 * @property {number} - Number of pistol rounds won as Counter-Terrorists on this map
 * @property {number} - Number of rounds played as Counter-Terrorists on this map
 * @property {number} - Number of rounds won as Counter-Terrorists on this map
 * @property {number} - The ID of the map.
 * @property {string} - A URL to the image of the map.
 * @property {number} - Number of team losses on this map
 * @property {string} - The name of the map.
 * @property {number} - Number of pistol rounds played on this map
 * @property {number} - Number of rounds played on this map
 * @property {string} - Human-readable identifier of the map
 * @property {number} - Number of pistol rounds played as Terrorists on this map
 * @property {number} - Number of pistol rounds won as Terrorists on this map
 * @property {number} - Number of rounds played as Terrorists on this map
 * @property {number} - Number of rounds won as Terrorists on this map
 * @property {number} - Number of times the team played on this map
 * @property {number} - Number of team wins on this map
 */
export type CsgoTeamMapStats = z.infer<typeof csgoTeamMapStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamMapStatsResponse: any = z.lazy(() => {
  return z
    .object({
      ct_pistol_round_total_played: z.number().gte(0),
      ct_pistol_round_wins: z.number().gte(0),
      ct_round_total_played: z.number().gte(0),
      ct_round_wins: z.number().gte(0),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      losses: z.number().gte(0),
      name: z.string(),
      pistol_round_total_played: z.number().gte(0),
      round_total_played: z.number().gte(0),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
      t_pistol_round_total_played: z.number().gte(0),
      t_pistol_round_wins: z.number().gte(0),
      t_round_total_played: z.number().gte(0),
      t_round_wins: z.number().gte(0),
      total_played: z.number().gte(0),
      wins: z.number().gte(0),
    })
    .transform((data) => ({
      ctPistolRoundTotalPlayed: data['ct_pistol_round_total_played'],
      ctPistolRoundWins: data['ct_pistol_round_wins'],
      ctRoundTotalPlayed: data['ct_round_total_played'],
      ctRoundWins: data['ct_round_wins'],
      id: data['id'],
      imageUrl: data['image_url'],
      losses: data['losses'],
      name: data['name'],
      pistolRoundTotalPlayed: data['pistol_round_total_played'],
      roundTotalPlayed: data['round_total_played'],
      slug: data['slug'],
      tPistolRoundTotalPlayed: data['t_pistol_round_total_played'],
      tPistolRoundWins: data['t_pistol_round_wins'],
      tRoundTotalPlayed: data['t_round_total_played'],
      tRoundWins: data['t_round_wins'],
      totalPlayed: data['total_played'],
      wins: data['wins'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamMapStatsRequest: any = z.lazy(() => {
  return z
    .object({
      ctPistolRoundTotalPlayed: z.number().nullish(),
      ctPistolRoundWins: z.number().nullish(),
      ctRoundTotalPlayed: z.number().nullish(),
      ctRoundWins: z.number().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      losses: z.number().nullish(),
      name: z.string().nullish(),
      pistolRoundTotalPlayed: z.number().nullish(),
      roundTotalPlayed: z.number().nullish(),
      slug: z.string().nullish(),
      tPistolRoundTotalPlayed: z.number().nullish(),
      tPistolRoundWins: z.number().nullish(),
      tRoundTotalPlayed: z.number().nullish(),
      tRoundWins: z.number().nullish(),
      totalPlayed: z.number().nullish(),
      wins: z.number().nullish(),
    })
    .transform((data) => ({
      ct_pistol_round_total_played: data['ctPistolRoundTotalPlayed'],
      ct_pistol_round_wins: data['ctPistolRoundWins'],
      ct_round_total_played: data['ctRoundTotalPlayed'],
      ct_round_wins: data['ctRoundWins'],
      id: data['id'],
      image_url: data['imageUrl'],
      losses: data['losses'],
      name: data['name'],
      pistol_round_total_played: data['pistolRoundTotalPlayed'],
      round_total_played: data['roundTotalPlayed'],
      slug: data['slug'],
      t_pistol_round_total_played: data['tPistolRoundTotalPlayed'],
      t_pistol_round_wins: data['tPistolRoundWins'],
      t_round_total_played: data['tRoundTotalPlayed'],
      t_round_wins: data['tRoundWins'],
      total_played: data['totalPlayed'],
      wins: data['wins'],
    }));
});