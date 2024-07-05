import { z } from 'zod';
import {
  csgoFullRoundTeam,
  csgoFullRoundTeamRequest,
  csgoFullRoundTeamResponse,
} from '../../common/csgo-full-round-team';
import {
  csgoFullRoundMap,
  csgoFullRoundMapRequest,
  csgoFullRoundMapResponse,
} from './csgo-full-round-map';
import { csgoOutcome } from '../../common/csgo-outcome';
import {
  csgoFullRoundWinner,
  csgoFullRoundWinnerRequest,
  csgoFullRoundWinnerResponse,
} from './csgo-full-round-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRound = z.object({
  counterTerrorists: csgoFullRoundTeam,
  map: csgoFullRoundMap,
  number_: z.number().gte(1),
  outcome: csgoOutcome,
  terrorists: csgoFullRoundTeam,
  winnerTeam: csgoFullRoundWinner,
});

/**
 *
 * @typedef  {CsgoFullRound} csgoFullRound
 * @property {CsgoFullRoundTeam}
 * @property {CsgoFullRoundMap} - The location selected during the picks and bans phase for the game.
 * @property {number}
 * @property {CsgoOutcome}
 * @property {CsgoFullRoundTeam}
 * @property {CsgoFullRoundWinner}
 */
export type CsgoFullRound = z.infer<typeof csgoFullRound>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundResponse = z
  .object({
    counter_terrorists: csgoFullRoundTeamResponse,
    map: csgoFullRoundMapResponse,
    number: z.number().gte(1),
    outcome: csgoOutcome,
    terrorists: csgoFullRoundTeamResponse,
    winner_team: csgoFullRoundWinnerResponse,
  })
  .transform((data) => ({
    counterTerrorists: data['counter_terrorists'],
    map: data['map'],
    number_: data['number'],
    outcome: data['outcome'],
    terrorists: data['terrorists'],
    winnerTeam: data['winner_team'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundRequest = z
  .object({
    counterTerrorists: csgoFullRoundTeamRequest.nullish(),
    map: csgoFullRoundMapRequest.nullish(),
    number_: z.number().nullish(),
    outcome: csgoOutcome.nullish(),
    terrorists: csgoFullRoundTeamRequest.nullish(),
    winnerTeam: csgoFullRoundWinnerRequest.nullish(),
  })
  .transform((data) => ({
    counter_terrorists: data['counterTerrorists'],
    map: data['map'],
    number: data['number_'],
    outcome: data['outcome'],
    terrorists: data['terrorists'],
    winner_team: data['winnerTeam'],
  }));
