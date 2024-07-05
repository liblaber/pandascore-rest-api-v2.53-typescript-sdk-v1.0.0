import { z } from 'zod';
import { baseOpponent, baseOpponentRequest, baseOpponentResponse } from './base-opponent';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoGamePlayer = z.object({
  adr: z.number().gte(0),
  assists: z.number().gte(0),
  deaths: z.number().gte(0),
  firstKillsDiff: z.number(),
  flashAssists: z.number().gte(0),
  gameId: z.number().gte(1),
  headshots: z.number().gte(0),
  kDDiff: z.number(),
  kast: z.number().gte(0),
  kills: z.number().gte(0),
  opponent: baseOpponent,
  player: basePlayer,
  rating: z.number().gte(0),
  team: baseTeam,
});

/**
 * Player's data for a game
 * @typedef  {CsgoGamePlayer} csgoGamePlayer - Player's data for a game - Player's data for a game
 * @property {number} - Player's average damage per round
 * @property {number} - Player's number of kill assists for a game
 * @property {number} - Player's number of deaths
 * @property {number} - First kill difference
 * @property {number} - Player's number of flash assists for a game
 * @property {number} - Counter-Strike game ID
 * @property {number} - Player's number of headshots
 * @property {number} - Player's kills deaths difference for a game
 * @property {number} - Percentage of rounds in which the player either had a kill, assist, survived or was traded
 * @property {number} - Player's number of kills
 * @property {BaseOpponent}
 * @property {BasePlayer}
 * @property {number}
 * @property {BaseTeam}
 */
export type CsgoGamePlayer = z.infer<typeof csgoGamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoGamePlayerResponse = z
  .object({
    adr: z.number().gte(0),
    assists: z.number().gte(0),
    deaths: z.number().gte(0),
    first_kills_diff: z.number(),
    flash_assists: z.number().gte(0),
    game_id: z.number().gte(1),
    headshots: z.number().gte(0),
    k_d_diff: z.number(),
    kast: z.number().gte(0),
    kills: z.number().gte(0),
    opponent: baseOpponentResponse,
    player: basePlayerResponse,
    rating: z.number().gte(0),
    team: baseTeamResponse,
  })
  .transform((data) => ({
    adr: data['adr'],
    assists: data['assists'],
    deaths: data['deaths'],
    firstKillsDiff: data['first_kills_diff'],
    flashAssists: data['flash_assists'],
    gameId: data['game_id'],
    headshots: data['headshots'],
    kDDiff: data['k_d_diff'],
    kast: data['kast'],
    kills: data['kills'],
    opponent: data['opponent'],
    player: data['player'],
    rating: data['rating'],
    team: data['team'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoGamePlayerRequest = z
  .object({
    adr: z.number().nullish(),
    assists: z.number().nullish(),
    deaths: z.number().nullish(),
    firstKillsDiff: z.number().nullish(),
    flashAssists: z.number().nullish(),
    gameId: z.number().nullish(),
    headshots: z.number().nullish(),
    kDDiff: z.number().nullish(),
    kast: z.number().nullish(),
    kills: z.number().nullish(),
    opponent: baseOpponentRequest.nullish(),
    player: basePlayerRequest.nullish(),
    rating: z.number().nullish(),
    team: baseTeamRequest.nullish(),
  })
  .transform((data) => ({
    adr: data['adr'],
    assists: data['assists'],
    deaths: data['deaths'],
    first_kills_diff: data['firstKillsDiff'],
    flash_assists: data['flashAssists'],
    game_id: data['gameId'],
    headshots: data['headshots'],
    k_d_diff: data['kDDiff'],
    kast: data['kast'],
    kills: data['kills'],
    opponent: data['opponent'],
    player: data['player'],
    rating: data['rating'],
    team: data['team'],
  }));
