import { z } from 'zod';
import {
  valorantFullRoundAttackerTeam,
  valorantFullRoundAttackerTeamRequest,
  valorantFullRoundAttackerTeamResponse,
} from './valorant-full-round-attacker-team';
import {
  valorantFullRoundDefenderTeam,
  valorantFullRoundDefenderTeamRequest,
  valorantFullRoundDefenderTeamResponse,
} from './valorant-full-round-defender-team';
import { valorantGameRoundOutcome } from '../../common/valorant-game-round-outcome';
import {
  valorantGameRoundWinner,
  valorantGameRoundWinnerRequest,
  valorantGameRoundWinnerResponse,
} from '../../common/valorant-game-round-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantFullRound = z.object({
  attackers: valorantFullRoundAttackerTeam,
  defenders: valorantFullRoundDefenderTeam,
  number_: z.number().gte(1),
  outcome: valorantGameRoundOutcome,
  winnerTeam: valorantGameRoundWinner,
});

/**
 *
 * @typedef  {ValorantFullRound} valorantFullRound
 * @property {ValorantFullRoundAttackerTeam}
 * @property {ValorantFullRoundDefenderTeam}
 * @property {number}
 * @property {ValorantGameRoundOutcome} - How was the round finished. <br/>`spike_exploded`: spike exploded <br/>`defenders_eliminated`: attackers killed all defenders <br/>`spike_defused`: spike defused <br/>`attack_timeout`: attackers failed to plant the spike in time <br/>`attackers_eliminated`: defenders killed all attackers
 * @property {ValorantGameRoundWinner}
 */
export type ValorantFullRound = z.infer<typeof valorantFullRound>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundResponse = z
  .object({
    attackers: valorantFullRoundAttackerTeamResponse,
    defenders: valorantFullRoundDefenderTeamResponse,
    number: z.number().gte(1),
    outcome: valorantGameRoundOutcome,
    winner_team: valorantGameRoundWinnerResponse,
  })
  .transform((data) => ({
    attackers: data['attackers'],
    defenders: data['defenders'],
    number_: data['number'],
    outcome: data['outcome'],
    winnerTeam: data['winner_team'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantFullRoundRequest = z
  .object({
    attackers: valorantFullRoundAttackerTeamRequest.nullish(),
    defenders: valorantFullRoundDefenderTeamRequest.nullish(),
    number_: z.number().nullish(),
    outcome: valorantGameRoundOutcome.nullish(),
    winnerTeam: valorantGameRoundWinnerRequest.nullish(),
  })
  .transform((data) => ({
    attackers: data['attackers'],
    defenders: data['defenders'],
    number: data['number_'],
    outcome: data['outcome'],
    winner_team: data['winnerTeam'],
  }));
