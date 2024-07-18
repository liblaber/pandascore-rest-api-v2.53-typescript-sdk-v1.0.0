import { z } from 'zod';
import { csgoOutcome } from './csgo-outcome';
import { csgoSide } from './csgo-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRound: any = z.lazy(() => {
  return z.object({
    ct: z.number().gte(1),
    outcome: csgoOutcome,
    round: z.number().gte(1),
    terrorists: z.number().gte(1),
    winnerSide: csgoSide,
    winnerTeam: z.number().gte(1),
  });
});

/**
 *
 * @typedef  {CsgoRound} csgoRound
 * @property {number}
 * @property {CsgoOutcome}
 * @property {number}
 * @property {number}
 * @property {CsgoSide}
 * @property {number}
 */
export type CsgoRound = z.infer<typeof csgoRound>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundResponse: any = z.lazy(() => {
  return z
    .object({
      ct: z.number().gte(1),
      outcome: csgoOutcome,
      round: z.number().gte(1),
      terrorists: z.number().gte(1),
      winner_side: csgoSide,
      winner_team: z.number().gte(1),
    })
    .transform((data) => ({
      ct: data['ct'],
      outcome: data['outcome'],
      round: data['round'],
      terrorists: data['terrorists'],
      winnerSide: data['winner_side'],
      winnerTeam: data['winner_team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundRequest: any = z.lazy(() => {
  return z
    .object({
      ct: z.number().nullish(),
      outcome: csgoOutcome.nullish(),
      round: z.number().nullish(),
      terrorists: z.number().nullish(),
      winnerSide: csgoSide.nullish(),
      winnerTeam: z.number().nullish(),
    })
    .transform((data) => ({
      ct: data['ct'],
      outcome: data['outcome'],
      round: data['round'],
      terrorists: data['terrorists'],
      winner_side: data['winnerSide'],
      winner_team: data['winnerTeam'],
    }));
});
