import { z } from 'zod';
import { dota2FramePlayer, dota2FramePlayerRequest, dota2FramePlayerResponse } from './dota2-frame-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FrameTeam: any = z.lazy(() => {
  return z.object({
    goldAdvantage: z.number(),
    id: z.number().gte(1),
    name: z.string(),
    players: z.array(dota2FramePlayer).min(5),
    xpAdvantage: z.number(),
  });
});

/**
 *
 * @typedef  {Dota2FrameTeam} dota2FrameTeam
 * @property {number} - Gold advantage of the team (negative if deficit)
 * @property {number}
 * @property {string} - The name of the team.
 * @property {Dota2FramePlayer[]} - The players of the team
 * @property {number} - Experience advantage of the team (negative if deficit)
 */
export type Dota2FrameTeam = z.infer<typeof dota2FrameTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FrameTeamResponse: any = z.lazy(() => {
  return z
    .object({
      gold_advantage: z.number(),
      id: z.number().gte(1),
      name: z.string(),
      players: z.array(dota2FramePlayerResponse).min(5),
      xp_advantage: z.number(),
    })
    .transform((data) => ({
      goldAdvantage: data['gold_advantage'],
      id: data['id'],
      name: data['name'],
      players: data['players'],
      xpAdvantage: data['xp_advantage'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FrameTeamRequest: any = z.lazy(() => {
  return z
    .object({
      goldAdvantage: z.number().nullish(),
      id: z.number().nullish(),
      name: z.string().nullish(),
      players: z.array(dota2FramePlayerRequest).nullish(),
      xpAdvantage: z.number().nullish(),
    })
    .transform((data) => ({
      gold_advantage: data['goldAdvantage'],
      id: data['id'],
      name: data['name'],
      players: data['players'],
      xp_advantage: data['xpAdvantage'],
    }));
});
