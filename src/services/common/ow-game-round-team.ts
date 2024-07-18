import { z } from 'zod';
import { owGameRoundPlayer, owGameRoundPlayerRequest, owGameRoundPlayerResponse } from './ow-game-round-player';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameRoundTeam: any = z.lazy(() => {
  return z.object({
    players: z.array(owGameRoundPlayer),
    team: baseTeam,
  });
});

/**
 *
 * @typedef  {OwGameRoundTeam} owGameRoundTeam
 * @property {OwGameRoundPlayer[]}
 * @property {BaseTeam}
 */
export type OwGameRoundTeam = z.infer<typeof owGameRoundTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundTeamResponse: any = z.lazy(() => {
  return z
    .object({
      players: z.array(owGameRoundPlayerResponse),
      team: baseTeamResponse,
    })
    .transform((data) => ({
      players: data['players'],
      team: data['team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundTeamRequest: any = z.lazy(() => {
  return z
    .object({ players: z.array(owGameRoundPlayerRequest).nullish(), team: baseTeamRequest.nullish() })
    .transform((data) => ({
      players: data['players'],
      team: data['team'],
    }));
});
