// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  valorantGameRoundAttacker,
  valorantGameRoundAttackerRequest,
  valorantGameRoundAttackerResponse,
} from './valorant-game-round-attacker';
import {
  valorantGameRoundDefender,
  valorantGameRoundDefenderRequest,
  valorantGameRoundDefenderResponse,
} from './valorant-game-round-defender';
import { valorantGameRoundOutcome } from './valorant-game-round-outcome';
import {
  valorantGameRoundWinner,
  valorantGameRoundWinnerRequest,
  valorantGameRoundWinnerResponse,
} from './valorant-game-round-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantGameRound: any = z.lazy(() => {
  return z.object({
    attackers: valorantGameRoundAttacker,
    defenders: valorantGameRoundDefender,
    number: z.number().gte(0),
    outcome: valorantGameRoundOutcome,
    winnerTeam: valorantGameRoundWinner,
  });
});

/**
 *
 * @typedef  {ValorantGameRound} valorantGameRound
 * @property {ValorantGameRoundAttacker}
 * @property {ValorantGameRoundDefender}
 * @property {number} - The round number, starting at 1
 * @property {ValorantGameRoundOutcome} - How was the round finished. <br/>`spike_exploded`: spike exploded <br/>`defenders_eliminated`: attackers killed all defenders <br/>`spike_defused`: spike defused <br/>`attack_timeout`: attackers failed to plant the spike in time <br/>`attackers_eliminated`: defenders killed all attackers
 * @property {ValorantGameRoundWinner}
 */
export type ValorantGameRound = z.infer<typeof valorantGameRound>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRoundResponse: any = z.lazy(() => {
  return z
    .object({
      attackers: valorantGameRoundAttackerResponse,
      defenders: valorantGameRoundDefenderResponse,
      number: z.number().gte(0),
      outcome: valorantGameRoundOutcome,
      winner_team: valorantGameRoundWinnerResponse,
    })
    .transform((data) => ({
      attackers: data['attackers'],
      defenders: data['defenders'],
      number: data['number'],
      outcome: data['outcome'],
      winnerTeam: data['winner_team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRoundRequest: any = z.lazy(() => {
  return z
    .object({
      attackers: valorantGameRoundAttackerRequest.nullish(),
      defenders: valorantGameRoundDefenderRequest.nullish(),
      number: z.number().nullish(),
      outcome: valorantGameRoundOutcome.nullish(),
      winnerTeam: valorantGameRoundWinnerRequest.nullish(),
    })
    .transform((data) => ({
      attackers: data['attackers'],
      defenders: data['defenders'],
      number: data['number'],
      outcome: data['outcome'],
      winner_team: data['winnerTeam'],
    }));
});
