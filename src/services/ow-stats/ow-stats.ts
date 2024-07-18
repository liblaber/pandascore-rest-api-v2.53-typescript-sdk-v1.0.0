import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { OwStatsForPlayerByGame, owStatsForPlayerByGameResponse } from './models/ow-stats-for-player-by-game';
import { MatchIdOrSlug, PlayerIdOrSlug, SerieIdOrSlug, TournamentIdOrSlug } from '../common';
import {
  OwStatsForAllPlayersByMatch,
  owStatsForAllPlayersByMatchResponse,
} from './models/ow-stats-for-all-players-by-match';
import { OwStatsForPlayerByMatch, owStatsForPlayerByMatchResponse } from './models/ow-stats-for-player-by-match';
import { OwStatsForPlayer, owStatsForPlayerResponse } from './models/ow-stats-for-player';
import { GetOwPlayersPlayerIdOrSlugStatsParams } from './request-params';
import { OwStatsForPlayerBySerie, owStatsForPlayerBySerieResponse } from './models/ow-stats-for-player-by-serie';
import {
  OwStatsForPlayerByTournament,
  owStatsForPlayerByTournamentResponse,
} from './models/ow-stats-for-player-by-tournament';

export class OwStatsService extends BaseService {
  /**
   * Get detailed statistics of a given Overwatch given player for the given game
   * @param {number} owGameId - An Overwatch game ID
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<OwStatsForPlayerByGame>>} Statistics of an Overwatch player by game
   */
  async getOwGamesOwGameIdPlayersPlayerIdOrSlugStats(
    owGameId: number,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForPlayerByGame>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/games/{ow_game_id}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: owStatsForPlayerByGameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('ow_game_id', owGameId);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of Overwatch players for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<OwStatsForAllPlayersByMatch>>} Statistics of all Overwatch players by match
   */
  async getOwMatchesMatchIdOrSlugPlayersStats(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForAllPlayersByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/matches/{match_id_or_slug}/players/stats',
      config: this.config,
      responseSchema: owStatsForAllPlayersByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Overwatch given player for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<OwStatsForPlayerByMatch>>} Statistics of an Overwatch player by match
   */
  async getOwMatchesMatchIdOrSlugPlayersPlayerIdOrSlugStats(
    matchIdOrSlug: MatchIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForPlayerByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/matches/{match_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: owStatsForPlayerByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Overwatch player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<OwStatsForPlayer>>} Statistics of an Overwatch player
   */
  async getOwPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetOwPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForPlayer>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: owStatsForPlayerResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Overwatch given player for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<OwStatsForPlayerBySerie>>} Statistics of an Overwatch player by serie
   */
  async getOwSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForPlayerBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: owStatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Overwatch player for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<OwStatsForPlayerByTournament>>} Statistics of an Overwatch player by tournament
   */
  async getOwTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForPlayerByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: owStatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    return this.client.call(request);
  }
}
