import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  Dota2StatsForAllPlayersByMatch,
  Dota2StatsForPlayer,
  Dota2StatsForPlayerBySerie,
  Dota2StatsForPlayerByTournament,
  Dota2StatsForTeam,
  Dota2StatsForTeamBySerie,
  Dota2StatsForTeamByTournament,
  dota2StatsForAllPlayersByMatchResponse,
  dota2StatsForPlayerBySerieResponse,
  dota2StatsForPlayerByTournamentResponse,
  dota2StatsForPlayerResponse,
  dota2StatsForTeamBySerieResponse,
  dota2StatsForTeamByTournamentResponse,
  dota2StatsForTeamResponse,
} from './models';
import {
  MatchIdOrSlug,
  PlayerIdOrSlug,
  SerieIdOrSlug,
  TeamIdOrSlug,
  TournamentIdOrSlug,
} from '../common';
import {
  GetDota2PlayersPlayerIdOrSlugStatsParams,
  GetDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
  GetDota2TeamsTeamIdOrSlugStatsParams,
  GetDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
} from './request-params';

export class Dota2StatsService extends BaseService {
  /**
   * Get detailed statistics of Dota2 players for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<Dota2StatsForAllPlayersByMatch>>} Statistics of all Dota2 players by match
   */
  async getDota2MatchesMatchIdOrSlugPlayersStats(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForAllPlayersByMatch>> {
    const path = this.client.buildPath('/dota2/matches/{match_id_or_slug}/players/stats', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: dota2StatsForAllPlayersByMatchResponse,
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
   * Get detailed statistics of a given Dota2 player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<Dota2StatsForPlayer>>} Statistics of a Dota2 player
   */
  async getDota2PlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetDota2PlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForPlayer>> {
    const path = this.client.buildPath('/dota2/players/{player_id_or_slug}/stats', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: dota2StatsForPlayerResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.gamesCount) {
      options.queryParams['games_count'] = params?.gamesCount;
    }
    if (params?.side) {
      options.queryParams['side'] = params?.side;
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
   * Get detailed statistics of a given Dota2 player for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @returns {Promise<HttpResponse<Dota2StatsForPlayerBySerie>>} Statistics of a Dota2 player by serie
   */
  async getDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForPlayerBySerie>> {
    const path = this.client.buildPath(
      '/dota2/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: dota2StatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.gamesCount) {
      options.queryParams['games_count'] = params?.gamesCount;
    }
    if (params?.side) {
      options.queryParams['side'] = params?.side;
    }
    return this.client.get(path, options);
  }

  /**
   * Get detailed statistics of a given Dota2 team for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @returns {Promise<HttpResponse<Dota2StatsForTeamBySerie>>} Statistics of a Dota2 team by serie
   */
  async getDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForTeamBySerie>> {
    const path = this.client.buildPath(
      '/dota2/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: dota2StatsForTeamBySerieResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.gamesCount) {
      options.queryParams['games_count'] = params?.gamesCount;
    }
    if (params?.side) {
      options.queryParams['side'] = params?.side;
    }
    return this.client.get(path, options);
  }

  /**
   * Get detailed statistics of a given Dota2 team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<Dota2StatsForTeam>>} Statistics of a Dota2 team
   */
  async getDota2TeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetDota2TeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForTeam>> {
    const path = this.client.buildPath('/dota2/teams/{team_id_or_slug}/stats', {
      team_id_or_slug: teamIdOrSlug,
    });
    const options: any = {
      responseSchema: dota2StatsForTeamResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.gamesCount) {
      options.queryParams['games_count'] = params?.gamesCount;
    }
    if (params?.side) {
      options.queryParams['side'] = params?.side;
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
   * Get detailed statistics of a given Dota2 player for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @returns {Promise<HttpResponse<Dota2StatsForPlayerByTournament>>} Statistics of a Dota2 player by tournament
   */
  async getDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForPlayerByTournament>> {
    const path = this.client.buildPath(
      '/dota2/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: dota2StatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.gamesCount) {
      options.queryParams['games_count'] = params?.gamesCount;
    }
    if (params?.side) {
      options.queryParams['side'] = params?.side;
    }
    return this.client.get(path, options);
  }

  /**
   * Get detailed statistics of a given Dota2 team for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @returns {Promise<HttpResponse<Dota2StatsForTeamByTournament>>} Statistics of a Dota2 team by tournament
   */
  async getDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForTeamByTournament>> {
    const path = this.client.buildPath(
      '/dota2/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: dota2StatsForTeamByTournamentResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.gamesCount) {
      options.queryParams['games_count'] = params?.gamesCount;
    }
    if (params?.side) {
      options.queryParams['side'] = params?.side;
    }
    return this.client.get(path, options);
  }
}
