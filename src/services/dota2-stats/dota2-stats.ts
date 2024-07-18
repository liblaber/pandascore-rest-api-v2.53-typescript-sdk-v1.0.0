import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  Dota2StatsForAllPlayersByMatch,
  dota2StatsForAllPlayersByMatchResponse,
} from './models/dota2-stats-for-all-players-by-match';
import { MatchIdOrSlug, PlayerIdOrSlug, SerieIdOrSlug, TeamIdOrSlug, TournamentIdOrSlug } from '../common';
import { Dota2StatsForPlayer, dota2StatsForPlayerResponse } from './models/dota2-stats-for-player';
import {
  GetDota2PlayersPlayerIdOrSlugStatsParams,
  GetDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
  GetDota2TeamsTeamIdOrSlugStatsParams,
  GetDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
} from './request-params';
import {
  Dota2StatsForPlayerBySerie,
  dota2StatsForPlayerBySerieResponse,
} from './models/dota2-stats-for-player-by-serie';
import { Dota2StatsForTeamBySerie, dota2StatsForTeamBySerieResponse } from './models/dota2-stats-for-team-by-serie';
import { Dota2StatsForTeam, dota2StatsForTeamResponse } from './models/dota2-stats-for-team';
import {
  Dota2StatsForPlayerByTournament,
  dota2StatsForPlayerByTournamentResponse,
} from './models/dota2-stats-for-player-by-tournament';
import {
  Dota2StatsForTeamByTournament,
  dota2StatsForTeamByTournamentResponse,
} from './models/dota2-stats-for-team-by-tournament';

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
    const request = new Request({
      method: 'GET',
      path: '/dota2/matches/{match_id_or_slug}/players/stats',
      config: this.config,
      responseSchema: dota2StatsForAllPlayersByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Dota2 player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<Dota2StatsForPlayer>>} Statistics of a Dota2 player
   */
  async getDota2PlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetDota2PlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForPlayer>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: dota2StatsForPlayerResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/dota2/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: dota2StatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/dota2/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: dota2StatsForTeamBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given Dota2 team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetDota2PlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<Dota2StatsForTeam>>} Statistics of a Dota2 team
   */
  async getDota2TeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetDota2TeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2StatsForTeam>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: dota2StatsForTeamResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/dota2/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: dota2StatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/dota2/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: dota2StatsForTeamByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    return this.client.call(request);
  }
}
