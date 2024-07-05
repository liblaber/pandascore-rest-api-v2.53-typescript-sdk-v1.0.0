import { z } from 'zod';
import { csgoOutcome } from '../../common/csgo-outcome';
import {
  csgoRoundWinner,
  csgoRoundWinnerRequest,
  csgoRoundWinnerResponse,
} from './csgo-round-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundEndEventDetails = z.object({
  outcome: csgoOutcome,
  winnerTeam: csgoRoundWinner,
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
export const csgoRoundEndEventDetailsResponse = z
  .object({
    outcome: csgoOutcome,
    winner_team: csgoRoundWinnerResponse,
  })
  .transform((data) => ({
    outcome: data['outcome'],
    winnerTeam: data['winner_team'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundEndEventDetailsRequest = z
  .object({ outcome: csgoOutcome.nullish(), winnerTeam: csgoRoundWinnerRequest.nullish() })
  .transform((data) => ({
    outcome: data['outcome'],
    winner_team: data['winnerTeam'],
  }));
