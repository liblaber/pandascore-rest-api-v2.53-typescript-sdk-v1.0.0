import { z } from 'zod';
import { opponent1_4, opponent1_4Request, opponent1_4Response } from './opponent-1-4';
import { opponent2_4, opponent2_4Request, opponent2_4Response } from './opponent-2-4';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGamePlayerForStatsOpponent = z.union([opponent1_4, opponent2_4]);

/**
 *
 * @typedef  {LoLGamePlayerForStatsOpponent} loLGamePlayerForStatsOpponent
 * @property {Opponent1_4}
 * @property {Opponent2_4}
 */
export type LoLGamePlayerForStatsOpponent = z.infer<typeof loLGamePlayerForStatsOpponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerForStatsOpponentResponse = z.union([
  opponent1_4Response,
  opponent2_4Response,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerForStatsOpponentRequest = z.union([
  opponent1_4Request,
  opponent2_4Request,
]);
