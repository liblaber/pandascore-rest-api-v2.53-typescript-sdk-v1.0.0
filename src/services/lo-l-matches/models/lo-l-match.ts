import { z } from 'zod';
import { loLMatchGame, loLMatchGameRequest, loLMatchGameResponse } from './lo-l-match-game';
import { baseLeague, baseLeagueRequest, baseLeagueResponse } from '../../common/base-league';
import { matchLive, matchLiveRequest, matchLiveResponse } from '../../common/match-live';
import { matchType } from '../../common/match-type';
import { opponent, opponentRequest, opponentResponse } from '../../common/opponent';
import { loLMatchPlayer, loLMatchPlayerRequest, loLMatchPlayerResponse } from './lo-l-match-player';
import { matchResult, matchResultRequest, matchResultResponse } from '../../common/match-result';
import { baseSerie, baseSerieRequest, baseSerieResponse } from '../../common/base-serie';
import { matchStatus } from '../../common/match-status';
import { stream, streamRequest, streamResponse } from '../../common/stream';
import {
  baseTournament,
  baseTournamentRequest,
  baseTournamentResponse,
} from '../../common/base-tournament';
import {
  loLMatchVideogameTitle,
  loLMatchVideogameTitleRequest,
  loLMatchVideogameTitleResponse,
} from './lo-l-match-videogame-title';
import {
  loLMatchVideogameVersion,
  loLMatchVideogameVersionRequest,
  loLMatchVideogameVersionResponse,
} from './lo-l-match-videogame-version';
import { loLMatchWinner, loLMatchWinnerRequest, loLMatchWinnerResponse } from './lo-l-match-winner';
import {
  loLMatchWinnerId,
  loLMatchWinnerIdRequest,
  loLMatchWinnerIdResponse,
} from './lo-l-match-winner-id';
import { matchWinnerType } from '../../common/match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatch = z.object({
  beginAt: z.string().min(1),
  detailedStats: z.boolean(),
  draw: z.boolean(),
  endAt: z.string().min(1),
  forfeit: z.boolean(),
  gameAdvantage: z.number().gte(1),
  games: z.array(loLMatchGame),
  id: z.number().gte(1),
  league: baseLeague,
  leagueId: z.number().gte(1),
  live: matchLive,
  matchType: matchType,
  modifiedAt: z.string().min(1),
  name: z.string(),
  numberOfGames: z.number().gte(0),
  opponents: z.array(opponent),
  originalScheduledAt: z.string().min(1),
  players: z.array(loLMatchPlayer),
  rescheduled: z.boolean(),
  results: z.array(matchResult),
  scheduledAt: z.string().min(1),
  serie: baseSerie,
  serieId: z.number().gte(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[ a-zA-Z0-9_-]+$/),
  status: matchStatus,
  streamsList: z.array(stream),
  tournament: baseTournament,
  tournamentId: z.number().gte(1),
  videogameTitle: loLMatchVideogameTitle,
  videogameVersion: loLMatchVideogameVersion,
  winner: loLMatchWinner,
  winnerId: loLMatchWinnerId,
  winnerType: matchWinnerType,
});

/**
 *
 * @typedef  {LoLMatch} loLMatch
 * @property {string}
 * @property {boolean} - Whether the match offers full stats
 * @property {boolean} - Whether result of the match is a draw
 * @property {string}
 * @property {boolean} - Whether match was forfeited
 * @property {number} - ID of the opponent with a game advantage
 * @property {LoLMatchGame[]}
 * @property {number}
 * @property {BaseLeague}
 * @property {number}
 * @property {MatchLive}
 * @property {MatchType}
 * @property {string}
 * @property {string}
 * @property {number} - Number of games
 * @property {Opponent[]}
 * @property {string}
 * @property {LoLMatchPlayer[]}
 * @property {boolean} - Whether match has been rescheduled
 * @property {MatchResult[]}
 * @property {string}
 * @property {BaseSerie}
 * @property {number}
 * @property {string}
 * @property {MatchStatus}
 * @property {Stream[]}
 * @property {BaseTournament}
 * @property {number}
 * @property {LoLMatchVideogameTitle}
 * @property {LoLMatchVideogameVersion}
 * @property {LoLMatchWinner}
 * @property {LoLMatchWinnerId}
 * @property {MatchWinnerType}
 */
export type LoLMatch = z.infer<typeof loLMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchResponse = z
  .object({
    begin_at: z.string().min(1),
    detailed_stats: z.boolean(),
    draw: z.boolean(),
    end_at: z.string().min(1),
    forfeit: z.boolean(),
    game_advantage: z.number().gte(1),
    games: z.array(loLMatchGameResponse),
    id: z.number().gte(1),
    league: baseLeagueResponse,
    league_id: z.number().gte(1),
    live: matchLiveResponse,
    match_type: matchType,
    modified_at: z.string().min(1),
    name: z.string(),
    number_of_games: z.number().gte(0),
    opponents: z.array(opponentResponse),
    original_scheduled_at: z.string().min(1),
    players: z.array(loLMatchPlayerResponse),
    rescheduled: z.boolean(),
    results: z.array(matchResultResponse),
    scheduled_at: z.string().min(1),
    serie: baseSerieResponse,
    serie_id: z.number().gte(1),
    slug: z
      .string()
      .min(1)
      .regex(/^[ a-zA-Z0-9_-]+$/),
    status: matchStatus,
    streams_list: z.array(streamResponse),
    tournament: baseTournamentResponse,
    tournament_id: z.number().gte(1),
    videogame_title: loLMatchVideogameTitleResponse,
    videogame_version: loLMatchVideogameVersionResponse,
    winner: loLMatchWinnerResponse,
    winner_id: loLMatchWinnerIdResponse,
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
    league: data['league'],
    leagueId: data['league_id'],
    live: data['live'],
    matchType: data['match_type'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    numberOfGames: data['number_of_games'],
    opponents: data['opponents'],
    originalScheduledAt: data['original_scheduled_at'],
    players: data['players'],
    rescheduled: data['rescheduled'],
    results: data['results'],
    scheduledAt: data['scheduled_at'],
    serie: data['serie'],
    serieId: data['serie_id'],
    slug: data['slug'],
    status: data['status'],
    streamsList: data['streams_list'],
    tournament: data['tournament'],
    tournamentId: data['tournament_id'],
    videogameTitle: data['videogame_title'],
    videogameVersion: data['videogame_version'],
    winner: data['winner'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchRequest = z
  .object({
    beginAt: z.string().nullish(),
    detailedStats: z.boolean().nullish(),
    draw: z.boolean().nullish(),
    endAt: z.string().nullish(),
    forfeit: z.boolean().nullish(),
    gameAdvantage: z.number().nullish(),
    games: z.array(loLMatchGameRequest).nullish(),
    id: z.number().nullish(),
    league: baseLeagueRequest.nullish(),
    leagueId: z.number().nullish(),
    live: matchLiveRequest.nullish(),
    matchType: matchType.nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    numberOfGames: z.number().nullish(),
    opponents: z.array(opponentRequest).nullish(),
    originalScheduledAt: z.string().nullish(),
    players: z.array(loLMatchPlayerRequest).nullish(),
    rescheduled: z.boolean().nullish(),
    results: z.array(matchResultRequest).nullish(),
    scheduledAt: z.string().nullish(),
    serie: baseSerieRequest.nullish(),
    serieId: z.number().nullish(),
    slug: z.string().nullish(),
    status: matchStatus.nullish(),
    streamsList: z.array(streamRequest).nullish(),
    tournament: baseTournamentRequest.nullish(),
    tournamentId: z.number().nullish(),
    videogameTitle: loLMatchVideogameTitleRequest.nullish(),
    videogameVersion: loLMatchVideogameVersionRequest.nullish(),
    winner: loLMatchWinnerRequest.nullish(),
    winnerId: loLMatchWinnerIdRequest.nullish(),
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
    league: data['league'],
    league_id: data['leagueId'],
    live: data['live'],
    match_type: data['matchType'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    number_of_games: data['numberOfGames'],
    opponents: data['opponents'],
    original_scheduled_at: data['originalScheduledAt'],
    players: data['players'],
    rescheduled: data['rescheduled'],
    results: data['results'],
    scheduled_at: data['scheduledAt'],
    serie: data['serie'],
    serie_id: data['serieId'],
    slug: data['slug'],
    status: data['status'],
    streams_list: data['streamsList'],
    tournament: data['tournament'],
    tournament_id: data['tournamentId'],
    videogame_title: data['videogameTitle'],
    videogame_version: data['videogameVersion'],
    winner: data['winner'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
