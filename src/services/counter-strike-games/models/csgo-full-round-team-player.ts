import { z } from 'zod';
import {
  csgoFullRoundPlayerEconomy,
  csgoFullRoundPlayerEconomyRequest,
  csgoFullRoundPlayerEconomyResponse,
} from './csgo-full-round-player-economy';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRoundTeamPlayer: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0),
    freezeTimeEconomy: csgoFullRoundPlayerEconomy,
    id: z.number().gte(1),
    isAlive: z.boolean(),
    kills: z.number().gte(0),
    name: z.string(),
    remainingHp: z.number().gte(0),
    roundStartEconomy: csgoFullRoundPlayerEconomy,
  });
});

/**
 *
 * @typedef  {CsgoFullRoundTeamPlayer} csgoFullRoundTeamPlayer
 * @property {number} - Player's number of kill assists for a game
 * @property {CsgoFullRoundPlayerEconomy}
 * @property {number} - ID of the player
 * @property {boolean} - Whether the player is alive or not
 * @property {number} - Player's number of kills
 * @property {string} - Professional name of the player
 * @property {number} - Number of health points at the end of the round
 * @property {CsgoFullRoundPlayerEconomy}
 */
export type CsgoFullRoundTeamPlayer = z.infer<typeof csgoFullRoundTeamPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundTeamPlayerResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0),
      freeze_time_economy: csgoFullRoundPlayerEconomyResponse,
      id: z.number().gte(1),
      is_alive: z.boolean(),
      kills: z.number().gte(0),
      name: z.string(),
      remaining_hp: z.number().gte(0),
      round_start_economy: csgoFullRoundPlayerEconomyResponse,
    })
    .transform((data) => ({
      assists: data['assists'],
      freezeTimeEconomy: data['freeze_time_economy'],
      id: data['id'],
      isAlive: data['is_alive'],
      kills: data['kills'],
      name: data['name'],
      remainingHp: data['remaining_hp'],
      roundStartEconomy: data['round_start_economy'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundTeamPlayerRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      freezeTimeEconomy: csgoFullRoundPlayerEconomyRequest.nullish(),
      id: z.number().nullish(),
      isAlive: z.boolean().nullish(),
      kills: z.number().nullish(),
      name: z.string().nullish(),
      remainingHp: z.number().nullish(),
      roundStartEconomy: csgoFullRoundPlayerEconomyRequest.nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      freeze_time_economy: data['freezeTimeEconomy'],
      id: data['id'],
      is_alive: data['isAlive'],
      kills: data['kills'],
      name: data['name'],
      remaining_hp: data['remainingHp'],
      round_start_economy: data['roundStartEconomy'],
    }));
});
