import { z } from 'zod';
import { matchType } from '../../common/match-type';
import { matchStatus } from '../../common/match-status';
import { opponentId, opponentIdRequest, opponentIdResponse } from '../../common/opponent-id';
import { matchWinnerType } from '../../common/match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverBrackets = z.object({
  beginAt: z.array(z.string()).min(1).optional(),
  detailedStats: z.boolean().optional(),
  draw: z.boolean().optional(),
  endAt: z.array(z.string()).min(1).optional(),
  forfeit: z.boolean().optional(),
  id: z.array(z.number()).min(1).optional(),
  matchType: z.array(matchType).min(1).optional(),
  modifiedAt: z.array(z.string()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  numberOfGames: z.array(z.number()).min(1).optional(),
  scheduledAt: z.array(z.string()).min(1).optional(),
  slug: z.array(z.string()).min(1).optional(),
  status: z.array(matchStatus).min(1).optional(),
  tournamentId: z.array(z.number()).min(1).optional(),
  winnerId: z.array(opponentId).min(1).optional(),
  winnerType: z.array(matchWinnerType).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverBrackets} filterOverBrackets
 * @property {string[]}
 * @property {boolean} - Whether the match offers full stats
 * @property {boolean} - Whether result of the match is a draw
 * @property {string[]}
 * @property {boolean} - Whether match was forfeited
 * @property {number[]}
 * @property {MatchType[]}
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {MatchStatus[]}
 * @property {number[]}
 * @property {OpponentId[]}
 * @property {MatchWinnerType[]}
 */
export type FilterOverBrackets = z.infer<typeof filterOverBrackets>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverBracketsResponse = z
  .object({
    begin_at: z.array(z.string()).min(1).optional(),
    detailed_stats: z.boolean().optional(),
    draw: z.boolean().optional(),
    end_at: z.array(z.string()).min(1).optional(),
    forfeit: z.boolean().optional(),
    id: z.array(z.number()).min(1).optional(),
    match_type: z.array(matchType).min(1).optional(),
    modified_at: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    number_of_games: z.array(z.number()).min(1).optional(),
    scheduled_at: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    status: z.array(matchStatus).min(1).optional(),
    tournament_id: z.array(z.number()).min(1).optional(),
    winner_id: z.array(opponentIdResponse).min(1).optional(),
    winner_type: z.array(matchWinnerType).min(1).optional(),
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    detailedStats: data['detailed_stats'],
    draw: data['draw'],
    endAt: data['end_at'],
    forfeit: data['forfeit'],
    id: data['id'],
    matchType: data['match_type'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    numberOfGames: data['number_of_games'],
    scheduledAt: data['scheduled_at'],
    slug: data['slug'],
    status: data['status'],
    tournamentId: data['tournament_id'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverBracketsRequest = z
  .object({
    beginAt: z.array(z.string()).nullish(),
    detailedStats: z.boolean().nullish(),
    draw: z.boolean().nullish(),
    endAt: z.array(z.string()).nullish(),
    forfeit: z.boolean().nullish(),
    id: z.array(z.number()).nullish(),
    matchType: z.array(matchType).nullish(),
    modifiedAt: z.array(z.string()).nullish(),
    name: z.array(z.string()).nullish(),
    numberOfGames: z.array(z.number()).nullish(),
    scheduledAt: z.array(z.string()).nullish(),
    slug: z.array(z.string()).nullish(),
    status: z.array(matchStatus).nullish(),
    tournamentId: z.array(z.number()).nullish(),
    winnerId: z.array(opponentIdRequest).nullish(),
    winnerType: z.array(matchWinnerType).nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    detailed_stats: data['detailedStats'],
    draw: data['draw'],
    end_at: data['endAt'],
    forfeit: data['forfeit'],
    id: data['id'],
    match_type: data['matchType'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    number_of_games: data['numberOfGames'],
    scheduled_at: data['scheduledAt'],
    slug: data['slug'],
    status: data['status'],
    tournament_id: data['tournamentId'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
