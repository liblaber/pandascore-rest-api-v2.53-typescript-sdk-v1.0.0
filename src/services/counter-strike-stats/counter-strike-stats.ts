import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  CsgoStatsForAllPlayersByMatch,
  CsgoStatsForPlayer,
  CsgoStatsForPlayerByMatch,
  CsgoStatsForPlayerBySerie,
  CsgoStatsForPlayerByTournament,
  CsgoStatsForTeam,
  CsgoStatsForTeamByMatch,
  CsgoStatsForTeamBySerie,
  CsgoStatsForTeamByTournament,
  csgoStatsForAllPlayersByMatchResponse,
  csgoStatsForPlayerByMatchResponse,
  csgoStatsForPlayerBySerieResponse,
  csgoStatsForPlayerByTournamentResponse,
  csgoStatsForPlayerResponse,
  csgoStatsForTeamByMatchResponse,
  csgoStatsForTeamBySerieResponse,
  csgoStatsForTeamByTournamentResponse,
  csgoStatsForTeamResponse,
} from './models';
import {
  MatchIdOrSlug,
  PlayerIdOrSlug,
  SerieIdOrSlug,
  TeamIdOrSlug,
  TournamentIdOrSlug,
} from '../common';
import {
  GetCsgoPlayersPlayerIdOrSlugStatsParams,
  GetCsgoTeamsTeamIdOrSlugStatsParams,
} from './request-params';

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
    const path = this.client.buildPath('/csgo/matches/{match_id_or_slug}/players/stats', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: csgoStatsForAllPlayersByMatchResponse,
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
    const path = this.client.buildPath(
      '/csgo/matches/{match_id_or_slug}/players/{player_id_or_slug}/stats',
      { match_id_or_slug: matchIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: csgoStatsForPlayerByMatchResponse,
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
    const path = this.client.buildPath(
      '/csgo/matches/{match_id_or_slug}/teams/{team_id_or_slug}/stats',
      { match_id_or_slug: matchIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: csgoStatsForTeamByMatchResponse,
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
   * Get detailed statistics of a given Counter-Strike player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {VideogameTitleIdOrSlug} [videogameTitle] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<CsgoStatsForPlayer>>} Statistics of a Counter-Strike player
   */
  async getCsgoPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetCsgoPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForPlayer>> {
    const path = this.client.buildPath('/csgo/players/{player_id_or_slug}/stats', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: csgoStatsForPlayerResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameTitle) {
      options.queryParams['videogame_title'] = params?.videogameTitle;
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
    const path = this.client.buildPath(
      '/csgo/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: csgoStatsForPlayerBySerieResponse,
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
    const path = this.client.buildPath(
      '/csgo/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: csgoStatsForTeamBySerieResponse,
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
   * Get detailed statistics of a given Counter-Strike team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {VideogameTitleIdOrSlug} [videogameTitle] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<CsgoStatsForTeam>>} Statistics of a Counter-Strike team
   */
  async getCsgoTeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetCsgoTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoStatsForTeam>> {
    const path = this.client.buildPath('/csgo/teams/{team_id_or_slug}/stats', {
      team_id_or_slug: teamIdOrSlug,
    });
    const options: any = {
      responseSchema: csgoStatsForTeamResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.videogameTitle) {
      options.queryParams['videogame_title'] = params?.videogameTitle;
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
    const path = this.client.buildPath(
      '/csgo/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: csgoStatsForPlayerByTournamentResponse,
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
    const path = this.client.buildPath(
      '/csgo/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: csgoStatsForTeamByTournamentResponse,
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
