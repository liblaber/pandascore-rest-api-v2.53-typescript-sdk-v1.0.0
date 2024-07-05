import { z } from 'zod';
import {
  baseValorantAgent,
  baseValorantAgentRequest,
  baseValorantAgentResponse,
} from './base-valorant-agent';
import { valorantPlayerShield } from './valorant-player-shield';
import {
  baseValorantWeapon,
  baseValorantWeaponRequest,
  baseValorantWeaponResponse,
} from './base-valorant-weapon';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantFullRoundPlayer = z.object({
  agent: baseValorantAgent,
  assists: z.number().gte(0),
  combatScore: z.number().gte(0),
  ecoBegPrep: z.number().gte(0),
  ecoEndPrep: z.number().gte(0),
  id: z.number().gte(1),
  kills: z.number().gte(0),
  name: z.string(),
  shieldType: valorantPlayerShield,
  weapon: baseValorantWeapon,
});

/**
 *
 * @typedef  {ValorantFullRoundPlayer} valorantFullRoundPlayer
 * @property {BaseValorantAgent}
 * @property {number} - Number of player's assists
 * @property {number} - Combat score of the player in the round
 * @property {number} - Player economy at the beginning of the preperation phase
 * @property {number} - Player economy at the end of the preperation phase
 * @property {number} - ID of the player
 * @property {number} - Number of player's kills
 * @property {string} - Professional name of the player
 * @property {ValorantPlayerShield}
 * @property {BaseValorantWeapon}
 */
export type ValorantFullRoundPlayer = z.infer<typeof valorantFullRoundPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundPlayerResponse = z
  .object({
    agent: baseValorantAgentResponse,
    assists: z.number().gte(0),
    combat_score: z.number().gte(0),
    eco_beg_prep: z.number().gte(0),
    eco_end_prep: z.number().gte(0),
    id: z.number().gte(1),
    kills: z.number().gte(0),
    name: z.string(),
    shield_type: valorantPlayerShield,
    weapon: baseValorantWeaponResponse,
  })
  .transform((data) => ({
    agent: data['agent'],
    assists: data['assists'],
    combatScore: data['combat_score'],
    ecoBegPrep: data['eco_beg_prep'],
    ecoEndPrep: data['eco_end_prep'],
    id: data['id'],
    kills: data['kills'],
    name: data['name'],
    shieldType: data['shield_type'],
    weapon: data['weapon'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundPlayerRequest = z
  .object({
    agent: baseValorantAgentRequest.nullish(),
    assists: z.number().nullish(),
    combatScore: z.number().nullish(),
    ecoBegPrep: z.number().nullish(),
    ecoEndPrep: z.number().nullish(),
    id: z.number().nullish(),
    kills: z.number().nullish(),
    name: z.string().nullish(),
    shieldType: valorantPlayerShield.nullish(),
    weapon: baseValorantWeaponRequest.nullish(),
  })
  .transform((data) => ({
    agent: data['agent'],
    assists: data['assists'],
    combat_score: data['combatScore'],
    eco_beg_prep: data['ecoBegPrep'],
    eco_end_prep: data['ecoEndPrep'],
    id: data['id'],
    kills: data['kills'],
    name: data['name'],
    shield_type: data['shieldType'],
    weapon: data['weapon'],
  }));
