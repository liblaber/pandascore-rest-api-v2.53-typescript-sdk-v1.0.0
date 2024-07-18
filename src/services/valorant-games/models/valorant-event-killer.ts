import { z } from 'zod';
import { ability, abilityRequest, abilityResponse } from './ability';
import { baseValorantAgent, baseValorantAgentRequest, baseValorantAgentResponse } from './base-valorant-agent';
import { valorantTeamSide } from '../../common/valorant-team-side';
import { weapon, weaponRequest, weaponResponse } from './weapon';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantEventKiller: any = z.lazy(() => {
  return z.object({
    ability: ability.nullable(),
    agent: baseValorantAgent,
    id: z.number().gte(1),
    name: z.string(),
    teamSide: valorantTeamSide,
    weapon: weapon.nullable(),
  });
});

/**
 *
 * @typedef  {ValorantEventKiller} valorantEventKiller
 * @property {Ability}
 * @property {BaseValorantAgent}
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 * @property {ValorantTeamSide} - Team side in the round
 * @property {Weapon}
 */
export type ValorantEventKiller = z.infer<typeof valorantEventKiller>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantEventKillerResponse: any = z.lazy(() => {
  return z
    .object({
      ability: abilityResponse.nullable(),
      agent: baseValorantAgentResponse,
      id: z.number().gte(1),
      name: z.string(),
      team_side: valorantTeamSide,
      weapon: weaponResponse.nullable(),
    })
    .transform((data) => ({
      ability: data['ability'],
      agent: data['agent'],
      id: data['id'],
      name: data['name'],
      teamSide: data['team_side'],
      weapon: data['weapon'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantEventKillerRequest: any = z.lazy(() => {
  return z
    .object({
      ability: abilityRequest.nullish(),
      agent: baseValorantAgentRequest.nullish(),
      id: z.number().nullish(),
      name: z.string().nullish(),
      teamSide: valorantTeamSide.nullish(),
      weapon: weaponRequest.nullish(),
    })
    .transform((data) => ({
      ability: data['ability'],
      agent: data['agent'],
      id: data['id'],
      name: data['name'],
      team_side: data['teamSide'],
      weapon: data['weapon'],
    }));
});
