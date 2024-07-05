import { z } from 'zod';
import { matchLive, matchLiveRequest, matchLiveResponse } from './match-live';
import { matchType } from './match-type';
import { matchStatus } from './match-status';
import { stream, streamRequest, streamResponse } from './stream';
import {
  baseMatchWinnerId,
  baseMatchWinnerIdRequest,
  baseMatchWinnerIdResponse,
} from './base-match-winner-id';
import { matchWinnerType } from './match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseMatch = z.object({
  beginAt: z.string().min(1),
  detailedStats: z.boolean(),
  draw: z.boolean(),
  endAt: z.string().min(1),
  forfeit: z.boolean(),
  gameAdvantage: z.number().gte(1),
  id: z.number().gte(1),
  live: matchLive,
  matchType: matchType,
  modifiedAt: z.string().min(1),
  name: z.string(),
  numberOfGames: z.number().gte(0),
  originalScheduledAt: z.string().min(1),
  rescheduled: z.boolean(),
  scheduledAt: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[ a-zA-Z0-9_-]+$/),
  status: matchStatus,
  streamsList: z.array(stream),
  tournamentId: z.number().gte(1),
  winnerId: baseMatchWinnerId,
  winnerType: matchWinnerType,
});

/**
 *
 * @typedef  {BaseMatch} baseMatch
 * @property {string}
 * @property {boolean} - Whether the match offers full stats
 * @property {boolean} - Whether result of the match is a draw
 * @property {string}
 * @property {boolean} - Whether match was forfeited
 * @property {number} - ID of the opponent with a game advantage
 * @property {number}
 * @property {MatchLive}
 * @property {MatchType}
 * @property {string}
 * @property {string}
 * @property {number} - Number of games
 * @property {string}
 * @property {boolean} - Whether match has been rescheduled
 * @property {string}
 * @property {string}
 * @property {MatchStatus}
 * @property {Stream[]}
 * @property {number}
 * @property {BaseMatchWinnerId}
 * @property {MatchWinnerType}
 */
export type BaseMatch = z.infer<typeof baseMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseMatchResponse = z
  .object({
    begin_at: z.string().min(1),
    detailed_stats: z.boolean(),
    draw: z.boolean(),
    end_at: z.string().min(1),
    forfeit: z.boolean(),
    game_advantage: z.number().gte(1),
    id: z.number().gte(1),
    live: matchLiveResponse,
    match_type: matchType,
    modified_at: z.string().min(1),
    name: z.string(),
    number_of_games: z.number().gte(0),
    original_scheduled_at: z.string().min(1),
    rescheduled: z.boolean(),
    scheduled_at: z.string().min(1),
    slug: z
      .string()
      .min(1)
      .regex(/^[ a-zA-Z0-9_-]+$/),
    status: matchStatus,
    streams_list: z.array(streamResponse),
    tournament_id: z.number().gte(1),
    winner_id: baseMatchWinnerIdResponse,
    winner_type: matchWinnerType,
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    detailedStats: data['detailed_stats'],
    draw: data['draw'],
    endAt: data['end_at'],
    forfeit: data['forfeit'],
    gameAdvantage: data['game_advantage'],
    id: data['id'],
    live: data['live'],
    matchType: data['match_type'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    numberOfGames: data['number_of_games'],
    originalScheduledAt: data['original_scheduled_at'],
    rescheduled: data['rescheduled'],
    scheduledAt: data['scheduled_at'],
    slug: data['slug'],
    status: data['status'],
    streamsList: data['streams_list'],
    tournamentId: data['tournament_id'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseMatchRequest = z
  .object({
    beginAt: z.string().nullish(),
    detailedStats: z.boolean().nullish(),
    draw: z.boolean().nullish(),
    endAt: z.string().nullish(),
    forfeit: z.boolean().nullish(),
    gameAdvantage: z.number().nullish(),
    id: z.number().nullish(),
    live: matchLiveRequest.nullish(),
    matchType: matchType.nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    numberOfGames: z.number().nullish(),
    originalScheduledAt: z.string().nullish(),
    rescheduled: z.boolean().nullish(),
    scheduledAt: z.string().nullish(),
    slug: z.string().nullish(),
    status: matchStatus.nullish(),
    streamsList: z.array(streamRequest).nullish(),
    tournamentId: z.number().nullish(),
    winnerId: baseMatchWinnerIdRequest.nullish(),
    winnerType: matchWinnerType.nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    detailed_stats: data['detailedStats'],
    draw: data['draw'],
    end_at: data['endAt'],
    forfeit: data['forfeit'],
    game_advantage: data['gameAdvantage'],
    id: data['id'],
    live: data['live'],
    match_type: data['matchType'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    number_of_games: data['numberOfGames'],
    original_scheduled_at: data['originalScheduledAt'],
    rescheduled: data['rescheduled'],
    scheduled_at: data['scheduledAt'],
    slug: data['slug'],
    status: data['status'],
    streams_list: data['streamsList'],
    tournament_id: data['tournamentId'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
