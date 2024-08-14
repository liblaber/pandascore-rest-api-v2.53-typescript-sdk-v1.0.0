// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { loLFrameTeam, loLFrameTeamRequest, loLFrameTeamResponse } from './lo-l-frame-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGameFrame = z.lazy(() => {
  return z.object({
    blue: loLFrameTeam,
    currentTimestamp: z.number().gte(0),
    gameId: z.number().gte(1),
    matchId: z.number().gte(1),
    red: loLFrameTeam,
    tournamentId: z.number().gte(1),
  });
});

/**
 *
 * @typedef  {LoLGameFrame} loLGameFrame
 * @property {LoLFrameTeam}
 * @property {number}
 * @property {number} - LoL game ID
 * @property {number}
 * @property {LoLFrameTeam}
 * @property {number}
 */
export type LoLGameFrame = z.infer<typeof loLGameFrame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameFrameResponse = z.lazy(() => {
  return z
    .object({
      blue: loLFrameTeamResponse,
      current_timestamp: z.number().gte(0),
      game_id: z.number().gte(1),
      match_id: z.number().gte(1),
      red: loLFrameTeamResponse,
      tournament_id: z.number().gte(1),
    })
    .transform((data) => ({
      blue: data['blue'],
      currentTimestamp: data['current_timestamp'],
      gameId: data['game_id'],
      matchId: data['match_id'],
      red: data['red'],
      tournamentId: data['tournament_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameFrameRequest = z.lazy(() => {
  return z
    .object({
      blue: loLFrameTeamRequest.nullish(),
      currentTimestamp: z.number().nullish(),
      gameId: z.number().nullish(),
      matchId: z.number().nullish(),
      red: loLFrameTeamRequest.nullish(),
      tournamentId: z.number().nullish(),
    })
    .transform((data) => ({
      blue: data['blue'],
      current_timestamp: data['currentTimestamp'],
      game_id: data['gameId'],
      match_id: data['matchId'],
      red: data['red'],
      tournament_id: data['tournamentId'],
    }));
});
