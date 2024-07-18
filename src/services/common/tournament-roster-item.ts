import { z } from 'zod';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tournamentRosterItem: any = z.lazy(() => {
  return z.object({
    players: z.array(basePlayer),
    team: baseTeam,
  });
});

/**
 *
 * @typedef  {TournamentRosterItem} tournamentRosterItem
 * @property {BasePlayer[]}
 * @property {BaseTeam}
 */
export type TournamentRosterItem = z.infer<typeof tournamentRosterItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentRosterItemResponse: any = z.lazy(() => {
  return z
    .object({
      players: z.array(basePlayerResponse),
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
export const tournamentRosterItemRequest: any = z.lazy(() => {
  return z
    .object({ players: z.array(basePlayerRequest).nullish(), team: baseTeamRequest.nullish() })
    .transform((data) => ({
      players: data['players'],
      team: data['team'],
    }));
});
