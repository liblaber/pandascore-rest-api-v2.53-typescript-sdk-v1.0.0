import { z } from 'zod';
import { game, gameRequest, gameResponse } from './game';
import { baseLeague, baseLeagueRequest, baseLeagueResponse } from './base-league';
import { matchLive, matchLiveRequest, matchLiveResponse } from './match-live';
import {
  valorantMapPick,
  valorantMapPickRequest,
  valorantMapPickResponse,
} from './valorant-map-pick';
import { matchType } from './match-type';
import { opponent, opponentRequest, opponentResponse } from './opponent';
import { matchResult, matchResultRequest, matchResultResponse } from './match-result';
import { baseSerie, baseSerieRequest, baseSerieResponse } from './base-serie';
import { matchStatus } from './match-status';
import { stream, streamRequest, streamResponse } from './stream';
import { baseTournament, baseTournamentRequest, baseTournamentResponse } from './base-tournament';
import {
  matchVideogameTitle,
  matchVideogameTitleRequest,
  matchVideogameTitleResponse,
} from './match-videogame-title';
import {
  matchVideogameVersion,
  matchVideogameVersionRequest,
  matchVideogameVersionResponse,
} from './match-videogame-version';
import { matchWinner, matchWinnerRequest, matchWinnerResponse } from './match-winner';
import { matchWinnerId, matchWinnerIdRequest, matchWinnerIdResponse } from './match-winner-id';
import { matchWinnerType } from './match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const match = z.object({
  beginAt: z.string().min(1),
  detailedStats: z.boolean(),
  draw: z.boolean(),
  endAt: z.string().min(1),
  forfeit: z.boolean(),
  gameAdvantage: z.number().gte(1),
  games: z.array(game),
  id1: z.number().gte(1),
  league1: baseLeague,
  leagueId: z.number().gte(1),
  live: matchLive,
  mapPicks: z.array(valorantMapPick).optional(),
  matchType1: matchType,
  modifiedAt: z.string().min(1),
  name: z.string(),
  numberOfGames: z.number().gte(0),
  opponents: z.array(opponent),
  originalScheduledAt: z.string().min(1),
  rescheduled: z.boolean(),
  results: z.array(matchResult),
  scheduledAt: z.string().min(1),
  serie1: baseSerie,
  serieId: z.number().gte(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[ a-zA-Z0-9_-]+$/),
  status: matchStatus,
  streamsList: z.array(stream),
  tournament1: baseTournament,
  tournamentId: z.number().gte(1),
  videogame: z.any(),
  videogameTitle: matchVideogameTitle,
  videogameVersion: matchVideogameVersion,
  winner: matchWinner,
  winnerId: matchWinnerId,
  winnerType: matchWinnerType,
});

/**
 *
 * @typedef  {Match} match
 * @property {string}
 * @property {boolean} - Whether the match offers full stats
 * @property {boolean} - Whether result of the match is a draw
 * @property {string}
 * @property {boolean} - Whether match was forfeited
 * @property {number} - ID of the opponent with a game advantage
 * @property {Game[]}
 * @property {number}
 * @property {BaseLeague}
 * @property {number}
 * @property {MatchLive}
 * @property {ValorantMapPick[]} - **Only applies to Valorant matches. The field will not be present on other video games matches.** <br/>Map picks, `null` when map picks data is unavailable. <br/>**Important:** `map_picks` field is only present in the response for subscribers of Valorant Historical plan.
 * @property {MatchType}
 * @property {string}
 * @property {string}
 * @property {number} - Number of games
 * @property {Opponent[]}
 * @property {string}
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
 * @property {any}
 * @property {MatchVideogameTitle}
 * @property {MatchVideogameVersion}
 * @property {MatchWinner}
 * @property {MatchWinnerId}
 * @property {MatchWinnerType}
 */
export type Match = z.infer<typeof match>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchResponse = z
  .object({
    begin_at: z.string().min(1),
    detailed_stats: z.boolean(),
    draw: z.boolean(),
    end_at: z.string().min(1),
    forfeit: z.boolean(),
    game_advantage: z.number().gte(1),
    games: z.array(gameResponse),
    id: z.number().gte(1),
    league: baseLeagueResponse,
    league_id: z.number().gte(1),
    live: matchLiveResponse,
    map_picks: z.array(valorantMapPickResponse).optional(),
    match_type: matchType,
    modified_at: z.string().min(1),
    name: z.string(),
    number_of_games: z.number().gte(0),
    opponents: z.array(opponentResponse),
    original_scheduled_at: z.string().min(1),
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
    videogame: z.any(),
    videogame_title: matchVideogameTitleResponse,
    videogame_version: matchVideogameVersionResponse,
    winner: matchWinnerResponse,
    winner_id: matchWinnerIdResponse,
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
    id1: data['id'],
    league1: data['league'],
    leagueId: data['league_id'],
    live: data['live'],
    mapPicks: data['map_picks'],
    matchType1: data['match_type'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    numberOfGames: data['number_of_games'],
    opponents: data['opponents'],
    originalScheduledAt: data['original_scheduled_at'],
    rescheduled: data['rescheduled'],
    results: data['results'],
    scheduledAt: data['scheduled_at'],
    serie1: data['serie'],
    serieId: data['serie_id'],
    slug: data['slug'],
    status: data['status'],
    streamsList: data['streams_list'],
    tournament1: data['tournament'],
    tournamentId: data['tournament_id'],
    videogame: data['videogame'],
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
export const matchRequest = z
  .object({
    beginAt: z.string().nullish(),
    detailedStats: z.boolean().nullish(),
    draw: z.boolean().nullish(),
    endAt: z.string().nullish(),
    forfeit: z.boolean().nullish(),
    gameAdvantage: z.number().nullish(),
    games: z.array(gameRequest).nullish(),
    id1: z.number().nullish(),
    league1: baseLeagueRequest.nullish(),
    leagueId: z.number().nullish(),
    live: matchLiveRequest.nullish(),
    mapPicks: z.array(valorantMapPickRequest).nullish(),
    matchType1: matchType.nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    numberOfGames: z.number().nullish(),
    opponents: z.array(opponentRequest).nullish(),
    originalScheduledAt: z.string().nullish(),
    rescheduled: z.boolean().nullish(),
    results: z.array(matchResultRequest).nullish(),
    scheduledAt: z.string().nullish(),
    serie1: baseSerieRequest.nullish(),
    serieId: z.number().nullish(),
    slug: z.string().nullish(),
    status: matchStatus.nullish(),
    streamsList: z.array(streamRequest).nullish(),
    tournament1: baseTournamentRequest.nullish(),
    tournamentId: z.number().nullish(),
    videogame: z.any().nullish(),
    videogameTitle: matchVideogameTitleRequest.nullish(),
    videogameVersion: matchVideogameVersionRequest.nullish(),
    winner: matchWinnerRequest.nullish(),
    winnerId: matchWinnerIdRequest.nullish(),
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
    id: data['id1'],
    league: data['league1'],
    league_id: data['leagueId'],
    live: data['live'],
    map_picks: data['mapPicks'],
    match_type: data['matchType1'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    number_of_games: data['numberOfGames'],
    opponents: data['opponents'],
    original_scheduled_at: data['originalScheduledAt'],
    rescheduled: data['rescheduled'],
    results: data['results'],
    scheduled_at: data['scheduledAt'],
    serie: data['serie1'],
    serie_id: data['serieId'],
    slug: data['slug'],
    status: data['status'],
    streams_list: data['streamsList'],
    tournament: data['tournament1'],
    tournament_id: data['tournamentId'],
    videogame: data['videogame'],
    videogame_title: data['videogameTitle'],
    videogame_version: data['videogameVersion'],
    winner: data['winner'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
