import { z } from 'zod';
import { searchOverValorantShortTournamentsTier2 } from './search-over-valorant-short-tournaments-tier-2';
import { opponentId, opponentIdRequest, opponentIdResponse } from './opponent-id';
import { opponentType } from './opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverLoLShortTournaments = z.object({
  beginAt: z.array(z.string()).min(2).max(2).optional(),
  detailedStats: z.array(z.boolean()).min(2).max(2).optional(),
  endAt: z.array(z.string()).min(2).max(2).optional(),
  hasBracket: z.array(z.boolean()).min(2).max(2).optional(),
  id: z.array(z.number()).min(2).max(2).optional(),
  modifiedAt: z.array(z.string()).min(2).max(2).optional(),
  name: z.array(z.string()).min(2).max(2).optional(),
  prizepool: z.array(z.string()).min(2).max(2).optional(),
  serieId: z.array(z.number()).min(2).max(2).optional(),
  slug: z.array(z.string()).min(2).max(2).optional(),
  tier: z.array(searchOverValorantShortTournamentsTier2).min(2).max(2).optional(),
  winnerId: z.array(opponentId).min(2).max(2).optional(),
  winnerType: z.array(opponentType).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverLoLShortTournaments} rangeOverLoLShortTournaments
 * @property {string[]}
 * @property {boolean[]}
 * @property {string[]}
 * @property {boolean[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {SearchOverValorantShortTournamentsTier2[]}
 * @property {OpponentId[]}
 * @property {OpponentType[]}
 */
export type RangeOverLoLShortTournaments = z.infer<typeof rangeOverLoLShortTournaments>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLShortTournamentsResponse = z
  .object({
    begin_at: z.array(z.string()).min(2).max(2).optional(),
    detailed_stats: z.array(z.boolean()).min(2).max(2).optional(),
    end_at: z.array(z.string()).min(2).max(2).optional(),
    has_bracket: z.array(z.boolean()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    modified_at: z.array(z.string()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    prizepool: z.array(z.string()).min(2).max(2).optional(),
    serie_id: z.array(z.number()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
    tier: z.array(searchOverValorantShortTournamentsTier2).min(2).max(2).optional(),
    winner_id: z.array(opponentIdResponse).min(2).max(2).optional(),
    winner_type: z.array(opponentType).min(2).max(2).optional(),
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    detailedStats: data['detailed_stats'],
    endAt: data['end_at'],
    hasBracket: data['has_bracket'],
    id: data['id'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    prizepool: data['prizepool'],
    serieId: data['serie_id'],
    slug: data['slug'],
    tier: data['tier'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLShortTournamentsRequest = z
  .object({
    beginAt: z.array(z.string()).nullish(),
    detailedStats: z.array(z.boolean()).nullish(),
    endAt: z.array(z.string()).nullish(),
    hasBracket: z.array(z.boolean()).nullish(),
    id: z.array(z.number()).nullish(),
    modifiedAt: z.array(z.string()).nullish(),
    name: z.array(z.string()).nullish(),
    prizepool: z.array(z.string()).nullish(),
    serieId: z.array(z.number()).nullish(),
    slug: z.array(z.string()).nullish(),
    tier: z.array(searchOverValorantShortTournamentsTier2).nullish(),
    winnerId: z.array(opponentIdRequest).nullish(),
    winnerType: z.array(opponentType).nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    detailed_stats: data['detailedStats'],
    end_at: data['endAt'],
    has_bracket: data['hasBracket'],
    id: data['id'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    prizepool: data['prizepool'],
    serie_id: data['serieId'],
    slug: data['slug'],
    tier: data['tier'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
