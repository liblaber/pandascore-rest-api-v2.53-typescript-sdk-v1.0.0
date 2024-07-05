import { z } from 'zod';
import { opponent1_5, opponent1_5Request, opponent1_5Response } from './opponent-1-5';
import { opponent2_5, opponent2_5Request, opponent2_5Response } from './opponent-2-5';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameRoundPlayerOpponent = z.union([opponent1_5, opponent2_5]);

/**
 *
 * @typedef  {OwGameRoundPlayerOpponent} owGameRoundPlayerOpponent
 * @property {Opponent1_5}
 * @property {Opponent2_5}
 */
export type OwGameRoundPlayerOpponent = z.infer<typeof owGameRoundPlayerOpponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundPlayerOpponentResponse = z.union([
  opponent1_5Response,
  opponent2_5Response,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundPlayerOpponentRequest = z.union([opponent1_5Request, opponent2_5Request]);
