import { z } from 'zod';
import {
  valorantFullRoundPlayer,
  valorantFullRoundPlayerRequest,
  valorantFullRoundPlayerResponse,
} from './valorant-full-round-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantFullRoundDefenderTeam: any = z.lazy(() => {
  return z.object({
    players: z.array(valorantFullRoundPlayer),
    score: z.number().gte(0),
    teamId: z.number().gte(1),
  });
});

/**
 *
 * @typedef  {ValorantFullRoundDefenderTeam} valorantFullRoundDefenderTeam
 * @property {ValorantFullRoundPlayer[]}
 * @property {number} - Defenders score at the beginning of the round
 * @property {number} - ID of the defenders team
 */
export type ValorantFullRoundDefenderTeam = z.infer<typeof valorantFullRoundDefenderTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundDefenderTeamResponse: any = z.lazy(() => {
  return z
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
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundDefenderTeamRequest: any = z.lazy(() => {
  return z
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
});
