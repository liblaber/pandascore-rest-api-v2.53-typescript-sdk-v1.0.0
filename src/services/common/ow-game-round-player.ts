import { z } from 'zod';
import {
  owGameRoundPlayerHero,
  owGameRoundPlayerHeroRequest,
  owGameRoundPlayerHeroResponse,
} from './ow-game-round-player-hero';
import {
  owGameRoundPlayerOpponent,
  owGameRoundPlayerOpponentRequest,
  owGameRoundPlayerOpponentResponse,
} from './ow-game-round-player-opponent';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameRoundPlayer = z.object({
  deaths: z.number().gte(0),
  destructions: z.number().gte(0),
  heroes: z.array(owGameRoundPlayerHero),
  kills: z.number().gte(0),
  opponent: owGameRoundPlayerOpponent,
  player: basePlayer,
  playerId: z.number().gte(1),
  resurrections: z.number().gte(0),
  ultimate: z.number().gte(0),
});

/**
 *
 * @typedef  {OwGameRoundPlayer} owGameRoundPlayer
 * @property {number}
 * @property {number}
 * @property {OwGameRoundPlayerHero[]}
 * @property {number}
 * @property {OwGameRoundPlayerOpponent}
 * @property {BasePlayer}
 * @property {number} - ID of the player
 * @property {number}
 * @property {number}
 */
export type OwGameRoundPlayer = z.infer<typeof owGameRoundPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundPlayerResponse = z
  .object({
    deaths: z.number().gte(0),
    destructions: z.number().gte(0),
    heroes: z.array(owGameRoundPlayerHeroResponse),
    kills: z.number().gte(0),
    opponent: owGameRoundPlayerOpponentResponse,
    player: basePlayerResponse,
    player_id: z.number().gte(1),
    resurrections: z.number().gte(0),
    ultimate: z.number().gte(0),
  })
  .transform((data) => ({
    deaths: data['deaths'],
    destructions: data['destructions'],
    heroes: data['heroes'],
    kills: data['kills'],
    opponent: data['opponent'],
    player: data['player'],
    playerId: data['player_id'],
    resurrections: data['resurrections'],
    ultimate: data['ultimate'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundPlayerRequest = z
  .object({
    deaths: z.number().nullish(),
    destructions: z.number().nullish(),
    heroes: z.array(owGameRoundPlayerHeroRequest).nullish(),
    kills: z.number().nullish(),
    opponent: owGameRoundPlayerOpponentRequest.nullish(),
    player: basePlayerRequest.nullish(),
    playerId: z.number().nullish(),
    resurrections: z.number().nullish(),
    ultimate: z.number().nullish(),
  })
  .transform((data) => ({
    deaths: data['deaths'],
    destructions: data['destructions'],
    heroes: data['heroes'],
    kills: data['kills'],
    opponent: data['opponent'],
    player: data['player'],
    player_id: data['playerId'],
    resurrections: data['resurrections'],
    ultimate: data['ultimate'],
  }));
