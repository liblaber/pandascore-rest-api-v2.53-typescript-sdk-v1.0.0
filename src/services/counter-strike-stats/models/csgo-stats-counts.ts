import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoStatsCounts: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    firstKillsDiff: z.number().nullable(),
    flashAssists: z.number().gte(0).nullable(),
    gamesDraw: z.number().gte(0),
    gamesLost: z.number().gte(0),
    gamesPlayed: z.number().gte(0),
    gamesWon: z.number().gte(0),
    headshots: z.number().gte(0).nullable(),
    kDDiff: z.number().nullable(),
    kills: z.number().gte(0).nullable(),
    matchesDraw: z.number().gte(0),
    matchesLost: z.number().gte(0),
    matchesPlayed: z.number().gte(0),
    matchesWon: z.number().gte(0),
    roundsPlayed: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {CsgoStatsCounts} csgoStatsCounts
 * @property {number} - Player's number of kill assists for a game
 * @property {number} - Player's number of deaths
 * @property {number} - First kill difference
 * @property {number} - Player's number of flash assists for a game
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Player's number of headshots
 * @property {number} - Player's kills deaths difference for a game
 * @property {number} - Player's number of kills
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of rounds played
 */
export type CsgoStatsCounts = z.infer<typeof csgoStatsCounts>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsCountsResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      first_kills_diff: z.number().nullable(),
      flash_assists: z.number().gte(0).nullable(),
      games_draw: z.number().gte(0),
      games_lost: z.number().gte(0),
      games_played: z.number().gte(0),
      games_won: z.number().gte(0),
      headshots: z.number().gte(0).nullable(),
      k_d_diff: z.number().nullable(),
      kills: z.number().gte(0).nullable(),
      matches_draw: z.number().gte(0),
      matches_lost: z.number().gte(0),
      matches_played: z.number().gte(0),
      matches_won: z.number().gte(0),
      rounds_played: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      firstKillsDiff: data['first_kills_diff'],
      flashAssists: data['flash_assists'],
      gamesDraw: data['games_draw'],
      gamesLost: data['games_lost'],
      gamesPlayed: data['games_played'],
      gamesWon: data['games_won'],
      headshots: data['headshots'],
      kDDiff: data['k_d_diff'],
      kills: data['kills'],
      matchesDraw: data['matches_draw'],
      matchesLost: data['matches_lost'],
      matchesPlayed: data['matches_played'],
      matchesWon: data['matches_won'],
      roundsPlayed: data['rounds_played'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsCountsRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      deaths: z.number().nullish(),
      firstKillsDiff: z.number().nullish(),
      flashAssists: z.number().nullish(),
      gamesDraw: z.number().nullish(),
      gamesLost: z.number().nullish(),
      gamesPlayed: z.number().nullish(),
      gamesWon: z.number().nullish(),
      headshots: z.number().nullish(),
      kDDiff: z.number().nullish(),
      kills: z.number().nullish(),
      matchesDraw: z.number().nullish(),
      matchesLost: z.number().nullish(),
      matchesPlayed: z.number().nullish(),
      matchesWon: z.number().nullish(),
      roundsPlayed: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      first_kills_diff: data['firstKillsDiff'],
      flash_assists: data['flashAssists'],
      games_draw: data['gamesDraw'],
      games_lost: data['gamesLost'],
      games_played: data['gamesPlayed'],
      games_won: data['gamesWon'],
      headshots: data['headshots'],
      k_d_diff: data['kDDiff'],
      kills: data['kills'],
      matches_draw: data['matchesDraw'],
      matches_lost: data['matchesLost'],
      matches_played: data['matchesPlayed'],
      matches_won: data['matchesWon'],
      rounds_played: data['roundsPlayed'],
    }));
});
