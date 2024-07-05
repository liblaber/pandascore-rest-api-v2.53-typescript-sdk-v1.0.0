import { z } from 'zod';
import { csgoRoundSide } from '../../common/csgo-round-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundWinner = z.object({
  id: z.number().gte(1),
  side: csgoRoundSide,
});

/**
 *
 * @typedef  {CsgoRoundWinner} csgoRoundWinner
 * @property {number}
 * @property {CsgoRoundSide}
 */
export type CsgoRoundWinner = z.infer<typeof csgoRoundWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundWinnerResponse = z
  .object({
    id: z.number().gte(1),
    side: csgoRoundSide,
  })
  .transform((data) => ({
    id: data['id'],
    side: data['side'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundWinnerRequest = z
  .object({ id: z.number().nullish(), side: csgoRoundSide.nullish() })
  .transform((data) => ({
    id: data['id'],
    side: data['side'],
  }));
