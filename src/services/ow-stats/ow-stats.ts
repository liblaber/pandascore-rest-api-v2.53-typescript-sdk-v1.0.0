import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  OwStatsForAllPlayersByMatch,
  OwStatsForPlayer,
  OwStatsForPlayerByGame,
  OwStatsForPlayerByMatch,
  OwStatsForPlayerBySerie,
  OwStatsForPlayerByTournament,
  owStatsForAllPlayersByMatchResponse,
  owStatsForPlayerByGameResponse,
  owStatsForPlayerByMatchResponse,
  owStatsForPlayerBySerieResponse,
  owStatsForPlayerByTournamentResponse,
  owStatsForPlayerResponse,
} from './models';
import { MatchIdOrSlug, PlayerIdOrSlug, SerieIdOrSlug, TournamentIdOrSlug } from '../common';
import { GetOwPlayersPlayerIdOrSlugStatsParams } from './request-params';

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
    const path = this.client.buildPath('/ow/games/{ow_game_id}/players/{player_id_or_slug}/stats', {
      ow_game_id: owGameId,
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: owStatsForPlayerByGameResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
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
    const path = this.client.buildPath('/ow/matches/{match_id_or_slug}/players/stats', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: owStatsForAllPlayersByMatchResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/ow/matches/{match_id_or_slug}/players/{player_id_or_slug}/stats',
      { match_id_or_slug: matchIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: owStatsForPlayerByMatchResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }

  /**
   * Get detailed statistics of a given Overwatch player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<OwStatsForPlayer>>} Statistics of an Overwatch player
   */
  async getOwPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetOwPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwStatsForPlayer>> {
    const path = this.client.buildPath('/ow/players/{player_id_or_slug}/stats', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: owStatsForPlayerResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.from_) {
      options.queryParams['from'] = params?.from_;
    }
    if (params?.to) {
      options.queryParams['to'] = params?.to;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/ow/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: owStatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/ow/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: owStatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }
}
