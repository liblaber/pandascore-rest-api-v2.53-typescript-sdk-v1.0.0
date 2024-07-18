import { z } from 'zod';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseOpponent: any = z.lazy(() => {
  return z.union([basePlayer, baseTeam]);
});

/**
 *
 * @typedef  {BaseOpponent} baseOpponent
 * @property {BasePlayer}
 * @property {BaseTeam}
 */
export type BaseOpponent = z.infer<typeof baseOpponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseOpponentResponse: any = z.lazy(() => {
  return z.union([basePlayerResponse, baseTeamResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseOpponentRequest: any = z.lazy(() => {
  return z.union([basePlayerRequest, baseTeamRequest]);
});
