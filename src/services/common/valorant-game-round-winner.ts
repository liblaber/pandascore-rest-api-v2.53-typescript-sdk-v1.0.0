import { z } from 'zod';
import { valorantTeamSide } from './valorant-team-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantGameRoundWinner = z.object({
  id: z.number().gte(1),
  side: valorantTeamSide,
});

/**
 *
 * @typedef  {ValorantGameRoundWinner} valorantGameRoundWinner
 * @property {number} - ID of the team that won the round
 * @property {ValorantTeamSide} - Team side in the round
 */
export type ValorantGameRoundWinner = z.infer<typeof valorantGameRoundWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRoundWinnerResponse = z
  .object({
    id: z.number().gte(1),
    side: valorantTeamSide,
  })
  .transform((data) => ({
    id: data['id'],
    side: data['side'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRoundWinnerRequest = z
  .object({ id: z.number().nullish(), side: valorantTeamSide.nullish() })
  .transform((data) => ({
    id: data['id'],
    side: data['side'],
  }));
