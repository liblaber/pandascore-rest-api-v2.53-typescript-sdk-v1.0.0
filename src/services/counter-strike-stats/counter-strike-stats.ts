import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  CsgoStatsForAllPlayersByMatch,
  csgoStatsForAllPlayersByMatchResponse,
} from './models/csgo-stats-for-all-players-by-match';
import { MatchIdOrSlug, PlayerIdOrSlug, SerieIdOrSlug, TeamIdOrSlug, TournamentIdOrSlug } from '../common';
import { CsgoStatsForPlayerByMatch, csgoStatsForPlayerByMatchResponse } from './models/csgo-stats-for-player-by-match';
import { CsgoStatsForTeamByMatch, csgoStatsForTeamByMatchResponse } from './models/csgo-stats-for-team-by-match';
import { CsgoStatsForPlayer, csgoStatsForPlayerResponse } from './models/csgo-stats-for-player';
import { GetCsgoPlayersPlayerIdOrSlugStatsParams, GetCsgoTeamsTeamIdOrSlugStatsParams } from './request-params';
import { CsgoStatsForPlayerBySerie, csgoStatsForPlayerBySerieResponse } from './models/csgo-stats-for-player-by-serie';
import { CsgoStatsForTeamBySerie, csgoStatsForTeamBySerieResponse } from './models/csgo-stats-for-team-by-serie';
import { CsgoStatsForTeam, csgoStatsForTeamResponse } from './models/csgo-stats-for-team';
import {
  CsgoStatsForPlayerByTournament,
  csgoStatsForPlayerByTournamentResponse,
} from './models/csgo-stats-for-player-by-tournament';
import {
  CsgoStatsForTeamByTournament,
  csgoStatsForTeamByTournamentResponse,
} from './models/csgo-stats-for-team-by-tournament';

export class CounterStrikeStatsService extends BaseService {
  /**
   * Get detailed statistics of Counter-Strike players for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForAllPlayersByMatch>>} Statistics of all Counter-Strike players by match
   */
  async getCsgoMatchesMatchIdOrSlugPlayersStats(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForAllPlayersByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/matches/{match_id_or_slug}/players/stats',
      config: this.config,
      responseSchema: csgoStatsForAllPlayersByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Counter-Strike player for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForPlayerByMatch>>} Statistics of a Counter-Strike player by match
   */
  async getCsgoMatchesMatchIdOrSlugPlayersPlayerIdOrSlugStats(
    matchIdOrSlug: MatchIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForPlayerByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/matches/{match_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForPlayerByMatchResponse,
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
   * Get detailed statistics of a given Counter-Strike team for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForTeamByMatch>>} Statistics of a Counter-Strike team by match
   */
  async getCsgoMatchesMatchIdOrSlugTeamsTeamIdOrSlugStats(
    matchIdOrSlug: MatchIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForTeamByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/matches/{match_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForTeamByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Counter-Strike player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {VideogameTitleIdOrSlug} [videogameTitle] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<CsgoStatsForPlayer>>} Statistics of a Counter-Strike player
   */
  async getCsgoPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetCsgoPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForPlayer>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForPlayerResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('videogame_title', params?.videogameTitle);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Counter-Strike player for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForPlayerBySerie>>} Statistics of a Counter-Strike player by serie
   */
  async getCsgoSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForPlayerBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForPlayerBySerieResponse,
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
   * Get detailed statistics of a given Counter-Strike team for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForTeamBySerie>>} Statistics of a Counter-Strike team by serie
   */
  async getCsgoSeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForTeamBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForTeamBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Counter-Strike team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {VideogameTitleIdOrSlug} [videogameTitle] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<CsgoStatsForTeam>>} Statistics of a Counter-Strike team
   */
  async getCsgoTeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetCsgoTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForTeam>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForTeamResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('videogame_title', params?.videogameTitle);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Counter-Strike player for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForPlayerByTournament>>} Statistics of a Counter-Strike player by tournament
   */
  async getCsgoTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForPlayerByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Counter-Strike team for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @returns {Promise<HttpResponse<CsgoStatsForTeamByTournament>>} Statistics of a Counter-Strike team by tournament
   */
  async getCsgoTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForTeamByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: csgoStatsForTeamByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    return this.client.call(request);
  }
}
