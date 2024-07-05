import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoMatchGamePlayer = z.object({
  adr: z.number().gte(0),
  assists: z.number().gte(0),
  deaths: z.number().gte(0),
  flashAssists: z.number().gte(0),
  headshots: z.number().gte(0),
  kDDiff: z.number(),
  kast: z.number().gte(0),
  kills: z.number().gte(0),
  playerId: z.number().gte(1),
});

/**
 * Player's data for a Game in a CSGO Match
 * @typedef  {CsgoMatchGamePlayer} csgoMatchGamePlayer - Player's data for a Game in a CSGO Match - Player's data for a Game in a CSGO Match
 * @property {number} - Player's average damage per round
 * @property {number} - Player's number of kill assists for a game
 * @property {number} - Player's number of deaths
 * @property {number} - Player's number of flash assists for a game
 * @property {number} - Player's number of headshots
 * @property {number} - Player's kills deaths difference for a game
 * @property {number} - Percentage of rounds in which the player either had a kill, assist, survived or was traded
 * @property {number} - Player's number of kills
 * @property {number} - ID of the player
 */
export type CsgoMatchGamePlayer = z.infer<typeof csgoMatchGamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchGamePlayerResponse = z
  .object({
    adr: z.number().gte(0),
    assists: z.number().gte(0),
    deaths: z.number().gte(0),
    flash_assists: z.number().gte(0),
    headshots: z.number().gte(0),
    k_d_diff: z.number(),
    kast: z.number().gte(0),
    kills: z.number().gte(0),
    player_id: z.number().gte(1),
  })
  .transform((data) => ({
    adr: data['adr'],
    assists: data['assists'],
    deaths: data['deaths'],
    flashAssists: data['flash_assists'],
    headshots: data['headshots'],
    kDDiff: data['k_d_diff'],
    kast: data['kast'],
    kills: data['kills'],
    playerId: data['player_id'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchGamePlayerRequest = z
  .object({
    adr: z.number().nullish(),
    assists: z.number().nullish(),
    deaths: z.number().nullish(),
    flashAssists: z.number().nullish(),
    headshots: z.number().nullish(),
    kDDiff: z.number().nullish(),
    kast: z.number().nullish(),
    kills: z.number().nullish(),
    playerId: z.number().nullish(),
  })
  .transform((data) => ({
    adr: data['adr'],
    assists: data['assists'],
    deaths: data['deaths'],
    flash_assists: data['flashAssists'],
    headshots: data['headshots'],
    k_d_diff: data['kDDiff'],
    kast: data['kast'],
    kills: data['kills'],
    player_id: data['playerId'],
  }));
