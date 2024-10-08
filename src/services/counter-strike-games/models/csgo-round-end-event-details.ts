// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { csgoRoundWinner, csgoRoundWinnerRequest, csgoRoundWinnerResponse } from './csgo-round-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundEndEventDetails = z.lazy(() => {
  return z.object({
    outcome: z.string(),
    winnerTeam: csgoRoundWinner,
  });
});

/**
 *
 * @typedef  {CsgoRoundEndEventDetails} csgoRoundEndEventDetails
 * @property {CsgoOutcome}
 * @property {CsgoRoundWinner}
 */
export type CsgoRoundEndEventDetails = z.infer<typeof csgoRoundEndEventDetails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundEndEventDetailsResponse = z.lazy(() => {
  return z
    .object({
      outcome: z.string(),
      winner_team: csgoRoundWinnerResponse,
    })
    .transform((data) => ({
      outcome: data['outcome'],
      winnerTeam: data['winner_team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundEndEventDetailsRequest = z.lazy(() => {
  return z
    .object({ outcome: z.string().nullish(), winnerTeam: csgoRoundWinnerRequest.nullish() })
    .transform((data) => ({
      outcome: data['outcome'],
      winner_team: data['winnerTeam'],
    }));
});
