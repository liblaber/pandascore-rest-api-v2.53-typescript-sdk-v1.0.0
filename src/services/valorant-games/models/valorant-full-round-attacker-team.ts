import { z } from 'zod';
import {
  valorantFullRoundPlayer,
  valorantFullRoundPlayerRequest,
  valorantFullRoundPlayerResponse,
} from '../../common/valorant-full-round-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantFullRoundAttackerTeam = z.object({
  players: z.array(valorantFullRoundPlayer),
  score: z.number().gte(0),
  teamId: z.number().gte(1),
});

/**
 *
 * @typedef  {ValorantFullRoundAttackerTeam} valorantFullRoundAttackerTeam
 * @property {ValorantFullRoundPlayer[]}
 * @property {number} - Attackers score at the beginning of the round
 * @property {number} - ID of the attackers team
 */
export type ValorantFullRoundAttackerTeam = z.infer<typeof valorantFullRoundAttackerTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundAttackerTeamResponse = z
  .object({
    players: z.array(valorantFullRoundPlayerResponse),
    score: z.number().gte(0),
    team_id: z.number().gte(1),
  })
  .transform((data) => ({
    players: data['players'],
    score: data['score'],
    teamId: data['team_id'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundAttackerTeamRequest = z
  .object({
    players: z.array(valorantFullRoundPlayerRequest).nullish(),
    score: z.number().nullish(),
    teamId: z.number().nullish(),
  })
  .transform((data) => ({
    players: data['players'],
    score: data['score'],
    team_id: data['teamId'],
  }));
