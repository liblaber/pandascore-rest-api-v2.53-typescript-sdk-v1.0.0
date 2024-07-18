import { z } from 'zod';
import { dota2FrameTeam, dota2FrameTeamRequest, dota2FrameTeamResponse } from './dota2-frame-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2Frame: any = z.lazy(() => {
  return z.object({
    currentTimestamp: z.number().gte(0),
    direTeam: dota2FrameTeam,
    radiantTeam: dota2FrameTeam,
  });
});

/**
 *
 * @typedef  {Dota2Frame} dota2Frame
 * @property {number} - Time elapsed since the beginning of the game, in seconds
 * @property {Dota2FrameTeam}
 * @property {Dota2FrameTeam}
 */
export type Dota2Frame = z.infer<typeof dota2Frame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FrameResponse: any = z.lazy(() => {
  return z
    .object({
      current_timestamp: z.number().gte(0),
      dire_team: dota2FrameTeamResponse,
      radiant_team: dota2FrameTeamResponse,
    })
    .transform((data) => ({
      currentTimestamp: data['current_timestamp'],
      direTeam: data['dire_team'],
      radiantTeam: data['radiant_team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FrameRequest: any = z.lazy(() => {
  return z
    .object({
      currentTimestamp: z.number().nullish(),
      direTeam: dota2FrameTeamRequest.nullish(),
      radiantTeam: dota2FrameTeamRequest.nullish(),
    })
    .transform((data) => ({
      current_timestamp: data['currentTimestamp'],
      dire_team: data['direTeam'],
      radiant_team: data['radiantTeam'],
    }));
});
