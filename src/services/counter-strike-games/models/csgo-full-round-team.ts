import { z } from 'zod';
import {
  csgoFullRoundTeamPlayer,
  csgoFullRoundTeamPlayerRequest,
  csgoFullRoundTeamPlayerResponse,
} from './csgo-full-round-team-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRoundTeam: any = z.lazy(() => {
  return z.object({
    players: z.array(csgoFullRoundTeamPlayer),
    roundScore: z.number().gte(0),
    teamId: z.number().gte(1),
    teamName: z.string(),
  });
});

/**
 *
 * @typedef  {CsgoFullRoundTeam} csgoFullRoundTeam
 * @property {CsgoFullRoundTeamPlayer[]}
 * @property {number} - The round score for the team.
 * @property {number}
 * @property {string} - The name of the team.
 */
export type CsgoFullRoundTeam = z.infer<typeof csgoFullRoundTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundTeamResponse: any = z.lazy(() => {
  return z
    .object({
      players: z.array(csgoFullRoundTeamPlayerResponse),
      round_score: z.number().gte(0),
      team_id: z.number().gte(1),
      team_name: z.string(),
    })
    .transform((data) => ({
      players: data['players'],
      roundScore: data['round_score'],
      teamId: data['team_id'],
      teamName: data['team_name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundTeamRequest: any = z.lazy(() => {
  return z
    .object({
      players: z.array(csgoFullRoundTeamPlayerRequest).nullish(),
      roundScore: z.number().nullish(),
      teamId: z.number().nullish(),
      teamName: z.string().nullish(),
    })
    .transform((data) => ({
      players: data['players'],
      round_score: data['roundScore'],
      team_id: data['teamId'],
      team_name: data['teamName'],
    }));
});