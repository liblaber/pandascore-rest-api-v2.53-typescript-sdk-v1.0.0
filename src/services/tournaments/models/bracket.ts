import { z } from 'zod';
import { game, gameRequest, gameResponse } from '../../common/game';
import { matchLive, matchLiveRequest, matchLiveResponse } from '../../common/match-live';
import { matchType } from '../../common/match-type';
import { opponent, opponentRequest, opponentResponse } from '../../common/opponent';
import { previousMatch, previousMatchRequest, previousMatchResponse } from './previous-match';
import { matchResult, matchResultRequest, matchResultResponse } from '../../common/match-result';
import { matchStatus } from '../../common/match-status';
import { stream, streamRequest, streamResponse } from '../../common/stream';
import { bracketWinnerId, bracketWinnerIdRequest, bracketWinnerIdResponse } from './bracket-winner-id';
import { matchWinnerType } from '../../common/match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bracket: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    detailedStats: z.boolean(),
    draw: z.boolean(),
    endAt: z.string().min(1).nullable(),
    forfeit: z.boolean(),
    gameAdvantage: z.number().gte(1).nullable(),
    games: z.array(game),
    id: z.number().gte(1),
    live: matchLive,
    matchType: matchType,
    modifiedAt: z.string().min(1),
    name: z.string(),
    numberOfGames: z.number().gte(0),
    opponents: z.array(opponent),
    originalScheduledAt: z.string().min(1).nullable(),
    previousMatches: z.array(previousMatch),
    results: z.array(matchResult),
    scheduledAt: z.string().min(1).nullable(),
    slug: z
      .string()
      .min(1)
      .regex(/^[ a-zA-Z0-9_-]+$/)
      .nullable(),
    status: matchStatus,
    streamsList: z.array(stream),
    tournamentId: z.number().gte(1),
    winnerId: bracketWinnerId,
    winnerType: matchWinnerType,
  });
});

/**
 *
 * @typedef  {Bracket} bracket
 * @property {string}
 * @property {boolean} - Whether the match offers full stats
 * @property {boolean} - Whether result of the match is a draw
 * @property {string}
 * @property {boolean} - Whether match was forfeited
 * @property {number} - ID of the opponent with a game advantage
 * @property {Game[]}
 * @property {number}
 * @property {MatchLive}
 * @property {MatchType}
 * @property {string}
 * @property {string}
 * @property {number} - Number of games
 * @property {Opponent[]}
 * @property {string}
 * @property {PreviousMatch[]}
 * @property {MatchResult[]}
 * @property {string}
 * @property {string}
 * @property {MatchStatus}
 * @property {Stream[]}
 * @property {number}
 * @property {BracketWinnerId}
 * @property {MatchWinnerType}
 */
export type Bracket = z.infer<typeof bracket>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bracketResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.string().min(1).nullable(),
      detailed_stats: z.boolean(),
      draw: z.boolean(),
      end_at: z.string().min(1).nullable(),
      forfeit: z.boolean(),
      game_advantage: z.number().gte(1).nullable(),
      games: z.array(gameResponse),
      id: z.number().gte(1),
      live: matchLiveResponse,
      match_type: matchType,
      modified_at: z.string().min(1),
      name: z.string(),
      number_of_games: z.number().gte(0),
      opponents: z.array(opponentResponse),
      original_scheduled_at: z.string().min(1).nullable(),
      previous_matches: z.array(previousMatchResponse),
      results: z.array(matchResultResponse),
      scheduled_at: z.string().min(1).nullable(),
      slug: z
        .string()
        .min(1)
        .regex(/^[ a-zA-Z0-9_-]+$/)
        .nullable(),
      status: matchStatus,
      streams_list: z.array(streamResponse),
      tournament_id: z.number().gte(1),
      winner_id: bracketWinnerIdResponse,
      winner_type: matchWinnerType,
    })
    .transform((data) => ({
      beginAt: data['begin_at'],
      detailedStats: data['detailed_stats'],
      draw: data['draw'],
      endAt: data['end_at'],
      forfeit: data['forfeit'],
      gameAdvantage: data['game_advantage'],
      games: data['games'],
      id: data['id'],
      live: data['live'],
      matchType: data['match_type'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      numberOfGames: data['number_of_games'],
      opponents: data['opponents'],
      originalScheduledAt: data['original_scheduled_at'],
      previousMatches: data['previous_matches'],
      results: data['results'],
      scheduledAt: data['scheduled_at'],
      slug: data['slug'],
      status: data['status'],
      streamsList: data['streams_list'],
      tournamentId: data['tournament_id'],
      winnerId: data['winner_id'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bracketRequest: any = z.lazy(() => {
  return z
    .object({
      beginAt: z.string().nullish(),
      detailedStats: z.boolean().nullish(),
      draw: z.boolean().nullish(),
      endAt: z.string().nullish(),
      forfeit: z.boolean().nullish(),
      gameAdvantage: z.number().nullish(),
      games: z.array(gameRequest).nullish(),
      id: z.number().nullish(),
      live: matchLiveRequest.nullish(),
      matchType: matchType.nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      numberOfGames: z.number().nullish(),
      opponents: z.array(opponentRequest).nullish(),
      originalScheduledAt: z.string().nullish(),
      previousMatches: z.array(previousMatchRequest).nullish(),
      results: z.array(matchResultRequest).nullish(),
      scheduledAt: z.string().nullish(),
      slug: z.string().nullish(),
      status: matchStatus.nullish(),
      streamsList: z.array(streamRequest).nullish(),
      tournamentId: z.number().nullish(),
      winnerId: bracketWinnerIdRequest.nullish(),
      winnerType: matchWinnerType.nullish(),
    })
    .transform((data) => ({
      begin_at: data['beginAt'],
      detailed_stats: data['detailedStats'],
      draw: data['draw'],
      end_at: data['endAt'],
      forfeit: data['forfeit'],
      game_advantage: data['gameAdvantage'],
      games: data['games'],
      id: data['id'],
      live: data['live'],
      match_type: data['matchType'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      number_of_games: data['numberOfGames'],
      opponents: data['opponents'],
      original_scheduled_at: data['originalScheduledAt'],
      previous_matches: data['previousMatches'],
      results: data['results'],
      scheduled_at: data['scheduledAt'],
      slug: data['slug'],
      status: data['status'],
      streams_list: data['streamsList'],
      tournament_id: data['tournamentId'],
      winner_id: data['winnerId'],
      winner_type: data['winnerType'],
    }));
});
