import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  ValorantStatsForPlayersByMatch,
  valorantStatsForPlayersByMatchResponse,
} from './models/valorant-stats-for-players-by-match';
import { MatchIdOrSlug, PlayerIdOrSlug, SerieIdOrSlug, TeamIdOrSlug, TournamentIdOrSlug } from '../common';
import {
  ValorantStatsForTeamByMatch,
  valorantStatsForTeamByMatchResponse,
} from './models/valorant-stats-for-team-by-match';
import { ValorantStatsForPlayer, valorantStatsForPlayerResponse } from './models/valorant-stats-for-player';
import {
  GetValorantPlayersPlayerIdOrSlugStatsParams,
  GetValorantSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetValorantSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
  GetValorantTeamsTeamIdOrSlugStatsParams,
  GetValorantTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetValorantTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
} from './request-params';
import {
  ValorantStatsForPlayerBySerie,
  valorantStatsForPlayerBySerieResponse,
} from './models/valorant-stats-for-player-by-serie';
import {
  ValorantStatsForTeamBySerie,
  valorantStatsForTeamBySerieResponse,
} from './models/valorant-stats-for-team-by-serie';
import { ValorantStatsForTeam, valorantStatsForTeamResponse } from './models/valorant-stats-for-team';
import {
  ValorantStatsForPlayerByTournament,
  valorantStatsForPlayerByTournamentResponse,
} from './models/valorant-stats-for-player-by-tournament';
import {
  ValorantStatsForTeamByTournament,
  valorantStatsForTeamByTournamentResponse,
} from './models/valorant-stats-for-team-by-tournament';

export class ValorantStatsService extends BaseService {
  /**
   * Get the aggregated statistics for all players in a Valorant match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<ValorantStatsForPlayersByMatch>>} Statistics of all Valorant players by match
   */
  async getValorantMatchesMatchIdOrSlugPlayersStats(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForPlayersByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/matches/{match_id_or_slug}/players/stats',
      config: this.config,
      responseSchema: valorantStatsForPlayersByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get the aggregated team statistics for a Valorant match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @returns {Promise<HttpResponse<ValorantStatsForTeamByMatch>>} Statistics of a Valorant team by match
   */
  async getValorantMatchesMatchIdOrSlugTeamsTeamIdOrSlugStats(
    matchIdOrSlug: MatchIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForTeamByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/matches/{match_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForTeamByMatchResponse,
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
   * Get a Valorant player stats by ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<ValorantStatsForPlayer>>} Statistics of a Valorant player
   */
  async getValorantPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetValorantPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForPlayer>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForPlayerResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get the aggregated player statistics for a Valorant series
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<ValorantStatsForPlayerBySerie>>} Statistics of a Valorant player by serie
   */
  async getValorantSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetValorantSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForPlayerBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }

  /**
   * Get the aggregated team statistics for a Valorant series
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<ValorantStatsForTeamBySerie>>} Statistics of a Valorant team by serie
   */
  async getValorantSeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetValorantSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForTeamBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForTeamBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }

  /**
   * Get a Valorant team stats by ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<ValorantStatsForTeam>>} Statistics of a Valorant team
   */
  async getValorantTeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetValorantTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForTeam>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForTeamResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get the aggregated player statistics for a Valorant tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<ValorantStatsForPlayerByTournament>>} Statistics of a Valorant player by tournament
   */
  async getValorantTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetValorantTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForPlayerByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }

  /**
   * Get the aggregated team statistics for a Valorant tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<ValorantStatsForTeamByTournament>>} Statistics of a Valorant team by tournament
   */
  async getValorantTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetValorantTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForTeamByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: valorantStatsForTeamByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }
}
