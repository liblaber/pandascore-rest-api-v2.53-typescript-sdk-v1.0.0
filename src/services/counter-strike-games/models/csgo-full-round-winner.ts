import { z } from 'zod';
import { csgoRoundSide } from '../../common/csgo-round-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRoundWinner = z.object({
  side: csgoRoundSide,
  teamId: z.number().gte(1),
  teamName: z.string(),
});

/**
 *
 * @typedef  {CsgoFullRoundWinner} csgoFullRoundWinner
 * @property {CsgoRoundSide}
 * @property {number}
 * @property {string} - The name of the team.
 */
export type CsgoFullRoundWinner = z.infer<typeof csgoFullRoundWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundWinnerResponse = z
  .object({
    side: csgoRoundSide,
    team_id: z.number().gte(1),
    team_name: z.string(),
  })
  .transform((data) => ({
    side: data['side'],
    teamId: data['team_id'],
    teamName: data['team_name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundWinnerRequest = z
  .object({
    side: csgoRoundSide.nullish(),
    teamId: z.number().nullish(),
    teamName: z.string().nullish(),
  })
  .transform((data) => ({
    side: data['side'],
    team_id: data['teamId'],
    team_name: data['teamName'],
  }));
