// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamStatsTotals = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    baronKills: z.number().gte(0).nullable(),
    blueGamesLost: z.number().gte(0).nullable(),
    blueGamesWon: z.number().gte(0).nullable(),
    chemtechDrakeKills: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    dragonKills: z.number().gte(0).nullable(),
    elderDrakeKills: z.number().gte(0).nullable(),
    gamesLost: z.number().gte(0).nullable(),
    gamesPlayed: z.number().gte(0).nullable(),
    gamesWon: z.number().gte(0).nullable(),
    heraldKill: z.number().gte(0).nullable(),
    hextechDrakeKills: z.number().gte(0).nullable(),
    infernalDrakeKills: z.number().gte(0).nullable(),
    inhibitorKills: z.number().gte(0).nullable(),
    kills: z.number().gte(0).nullable(),
    matchesLost: z.number().gte(0).nullable(),
    matchesPlayed: z.number().gte(0).nullable(),
    matchesWon: z.number().gte(0).nullable(),
    mountainDrakeKills: z.number().gte(0).nullable(),
    oceanDrakeKills: z.number().gte(0).nullable(),
    redGamesLost: z.number().gte(0).nullable(),
    redGamesWon: z.number().gte(0).nullable(),
    towerKills: z.number().gte(0).nullable(),
    voidgrubKills: z.number().gte(0).nullable(),
    wardsPlaced: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLTeamStatsTotals} loLTeamStatsTotals
 * @property {number}
 * @property {number}
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
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
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number}
 * @property {number} - The number of voidgrubs killed by a team.
 * @property {number}
 */
export type LoLTeamStatsTotals = z.infer<typeof loLTeamStatsTotals>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamStatsTotalsResponse = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      baron_kills: z.number().gte(0).nullable(),
      blue_games_lost: z.number().gte(0).nullable(),
      blue_games_won: z.number().gte(0).nullable(),
      chemtech_drake_kills: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      dragon_kills: z.number().gte(0).nullable(),
      elder_drake_kills: z.number().gte(0).nullable(),
      games_lost: z.number().gte(0).nullable(),
      games_played: z.number().gte(0).nullable(),
      games_won: z.number().gte(0).nullable(),
      herald_kill: z.number().gte(0).nullable(),
      hextech_drake_kills: z.number().gte(0).nullable(),
      infernal_drake_kills: z.number().gte(0).nullable(),
      inhibitor_kills: z.number().gte(0).nullable(),
      kills: z.number().gte(0).nullable(),
      matches_lost: z.number().gte(0).nullable(),
      matches_played: z.number().gte(0).nullable(),
      matches_won: z.number().gte(0).nullable(),
      mountain_drake_kills: z.number().gte(0).nullable(),
      ocean_drake_kills: z.number().gte(0).nullable(),
      red_games_lost: z.number().gte(0).nullable(),
      red_games_won: z.number().gte(0).nullable(),
      tower_kills: z.number().gte(0).nullable(),
      voidgrub_kills: z.number().gte(0).nullable(),
      wards_placed: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      baronKills: data['baron_kills'],
      blueGamesLost: data['blue_games_lost'],
      blueGamesWon: data['blue_games_won'],
      chemtechDrakeKills: data['chemtech_drake_kills'],
      deaths: data['deaths'],
      dragonKills: data['dragon_kills'],
      elderDrakeKills: data['elder_drake_kills'],
      gamesLost: data['games_lost'],
      gamesPlayed: data['games_played'],
      gamesWon: data['games_won'],
      heraldKill: data['herald_kill'],
      hextechDrakeKills: data['hextech_drake_kills'],
      infernalDrakeKills: data['infernal_drake_kills'],
      inhibitorKills: data['inhibitor_kills'],
      kills: data['kills'],
      matchesLost: data['matches_lost'],
      matchesPlayed: data['matches_played'],
      matchesWon: data['matches_won'],
      mountainDrakeKills: data['mountain_drake_kills'],
      oceanDrakeKills: data['ocean_drake_kills'],
      redGamesLost: data['red_games_lost'],
      redGamesWon: data['red_games_won'],
      towerKills: data['tower_kills'],
      voidgrubKills: data['voidgrub_kills'],
      wardsPlaced: data['wards_placed'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamStatsTotalsRequest = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      baronKills: z.number().nullish(),
      blueGamesLost: z.number().nullish(),
      blueGamesWon: z.number().nullish(),
      chemtechDrakeKills: z.number().nullish(),
      deaths: z.number().nullish(),
      dragonKills: z.number().nullish(),
      elderDrakeKills: z.number().nullish(),
      gamesLost: z.number().nullish(),
      gamesPlayed: z.number().nullish(),
      gamesWon: z.number().nullish(),
      heraldKill: z.number().nullish(),
      hextechDrakeKills: z.number().nullish(),
      infernalDrakeKills: z.number().nullish(),
      inhibitorKills: z.number().nullish(),
      kills: z.number().nullish(),
      matchesLost: z.number().nullish(),
      matchesPlayed: z.number().nullish(),
      matchesWon: z.number().nullish(),
      mountainDrakeKills: z.number().nullish(),
      oceanDrakeKills: z.number().nullish(),
      redGamesLost: z.number().nullish(),
      redGamesWon: z.number().nullish(),
      towerKills: z.number().nullish(),
      voidgrubKills: z.number().nullish(),
      wardsPlaced: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      baron_kills: data['baronKills'],
      blue_games_lost: data['blueGamesLost'],
      blue_games_won: data['blueGamesWon'],
      chemtech_drake_kills: data['chemtechDrakeKills'],
      deaths: data['deaths'],
      dragon_kills: data['dragonKills'],
      elder_drake_kills: data['elderDrakeKills'],
      games_lost: data['gamesLost'],
      games_played: data['gamesPlayed'],
      games_won: data['gamesWon'],
      herald_kill: data['heraldKill'],
      hextech_drake_kills: data['hextechDrakeKills'],
      infernal_drake_kills: data['infernalDrakeKills'],
      inhibitor_kills: data['inhibitorKills'],
      kills: data['kills'],
      matches_lost: data['matchesLost'],
      matches_played: data['matchesPlayed'],
      matches_won: data['matchesWon'],
      mountain_drake_kills: data['mountainDrakeKills'],
      ocean_drake_kills: data['oceanDrakeKills'],
      red_games_lost: data['redGamesLost'],
      red_games_won: data['redGamesWon'],
      tower_kills: data['towerKills'],
      voidgrub_kills: data['voidgrubKills'],
      wards_placed: data['wardsPlaced'],
    }));
});
