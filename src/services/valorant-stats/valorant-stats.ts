import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  ValorantStatsForPlayer,
  ValorantStatsForPlayerBySerie,
  ValorantStatsForPlayerByTournament,
  ValorantStatsForPlayersByMatch,
  ValorantStatsForTeam,
  ValorantStatsForTeamByMatch,
  ValorantStatsForTeamBySerie,
  ValorantStatsForTeamByTournament,
  valorantStatsForPlayerBySerieResponse,
  valorantStatsForPlayerByTournamentResponse,
  valorantStatsForPlayerResponse,
  valorantStatsForPlayersByMatchResponse,
  valorantStatsForTeamByMatchResponse,
  valorantStatsForTeamBySerieResponse,
  valorantStatsForTeamByTournamentResponse,
  valorantStatsForTeamResponse,
} from './models';
import {
  MatchIdOrSlug,
  PlayerIdOrSlug,
  SerieIdOrSlug,
  TeamIdOrSlug,
  TournamentIdOrSlug,
} from '../common';
import {
  GetValorantPlayersPlayerIdOrSlugStatsParams,
  GetValorantSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetValorantSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
  GetValorantTeamsTeamIdOrSlugStatsParams,
  GetValorantTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetValorantTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
} from './request-params';

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
    const path = this.client.buildPath('/valorant/matches/{match_id_or_slug}/players/stats', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: valorantStatsForPlayersByMatchResponse,
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
    const path = this.client.buildPath(
      '/valorant/matches/{match_id_or_slug}/teams/{team_id_or_slug}/stats',
      { match_id_or_slug: matchIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: valorantStatsForTeamByMatchResponse,
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
   * Get a Valorant player stats by ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<ValorantStatsForPlayer>>} Statistics of a Valorant player
   */
  async getValorantPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetValorantPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForPlayer>> {
    const path = this.client.buildPath('/valorant/players/{player_id_or_slug}/stats', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: valorantStatsForPlayerResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    if (params?.from_) {
      options.queryParams['from'] = params?.from_;
    }
    if (params?.to) {
      options.queryParams['to'] = params?.to;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/valorant/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: valorantStatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/valorant/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: valorantStatsForTeamBySerieResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
  }

  /**
   * Get a Valorant team stats by ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<ValorantStatsForTeam>>} Statistics of a Valorant team
   */
  async getValorantTeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetValorantTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantStatsForTeam>> {
    const path = this.client.buildPath('/valorant/teams/{team_id_or_slug}/stats', {
      team_id_or_slug: teamIdOrSlug,
    });
    const options: any = {
      responseSchema: valorantStatsForTeamResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    if (params?.from_) {
      options.queryParams['from'] = params?.from_;
    }
    if (params?.to) {
      options.queryParams['to'] = params?.to;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/valorant/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: valorantStatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/valorant/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: valorantStatsForTeamByTournamentResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
  }
}
