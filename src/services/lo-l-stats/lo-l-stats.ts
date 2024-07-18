import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  LoLStatsForAllPlayersByMatch,
  loLStatsForAllPlayersByMatchResponse,
} from './models/lo-l-stats-for-all-players-by-match';
import { MatchIdOrSlug, PlayerIdOrSlug, SerieIdOrSlug, TeamIdOrSlug, TournamentIdOrSlug } from '../common';
import { LoLStatsForPlayer, loLStatsForPlayerResponse } from './models/lo-l-stats-for-player';
import {
  GetLolPlayersPlayerIdOrSlugStatsParams,
  GetLolSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetLolSeriesSerieIdOrSlugTeamsStatsParams,
  GetLolSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
  GetLolTeamsTeamIdOrSlugStatsParams,
  GetLolTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetLolTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
} from './request-params';
import { LoLStatsForPlayerBySerie, loLStatsForPlayerBySerieResponse } from './models/lo-l-stats-for-player-by-serie';
import { LoLStatsForTeamBySerie, loLStatsForTeamBySerieResponse } from './models/lo-l-stats-for-team-by-serie';
import { LoLStatsForTeam, loLStatsForTeamResponse } from './models/lo-l-stats-for-team';
import {
  LoLStatsForPlayerByTournament,
  loLStatsForPlayerByTournamentResponse,
} from './models/lo-l-stats-for-player-by-tournament';
import {
  LoLStatsForTeamByTournament,
  loLStatsForTeamByTournamentResponse,
} from './models/lo-l-stats-for-team-by-tournament';

export class LoLStatsService extends BaseService {
  /**
   * Get detailed statistics of League-of-Legends players for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<LoLStatsForAllPlayersByMatch>>} Statistics of all Lol players by match
   */
  async getLolMatchesMatchIdOrSlugPlayersStats(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForAllPlayersByMatch>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/matches/{match_id_or_slug}/players/stats',
      config: this.config,
      responseSchema: loLStatsForAllPlayersByMatchResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given League-of-Legends player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<LoLStatsForPlayer>>} Statistics of a League-of-Legends player
   */
  async getLolPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetLolPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForPlayer>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: loLStatsForPlayerResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given League-of-Legends player for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<LoLStatsForPlayerBySerie>>} Statistics of a League-of-Legends player by serie
   */
  async getLolSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetLolSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForPlayerBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: loLStatsForPlayerBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of the LoL teams for the given series
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLStatsForTeamBySerie[]>>} Statistics of League-of-Legends teams by serie
   */
  async getLolSeriesSerieIdOrSlugTeamsStats(
    serieIdOrSlug: SerieIdOrSlug,
    params?: GetLolSeriesSerieIdOrSlugTeamsStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForTeamBySerie[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/series/{serie_id_or_slug}/teams/stats',
      config: this.config,
      responseSchema: z.array(loLStatsForTeamBySerieResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given League-of-Legends team for the given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<LoLStatsForTeamBySerie>>} Statistics of a League-of-Legends team by serie
   */
  async getLolSeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
    serieIdOrSlug: SerieIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetLolSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForTeamBySerie>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: loLStatsForTeamBySerieResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('serie_id_or_slug', serieIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given League-of-Legends team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<LoLStatsForTeam>>} Statistics of a League-of-Legends team
   */
  async getLolTeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetLolTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForTeam>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: loLStatsForTeamResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    request.addQueryParam('from', params?.from);
    request.addQueryParam('to', params?.to);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given League-of-Legends player for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<LoLStatsForPlayerByTournament>>} Statistics of a League-of-Legends player by tournament
   */
  async getLolTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetLolTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForPlayerByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      config: this.config,
      responseSchema: loLStatsForPlayerByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }

  /**
   * Get detailed statistics of a given League-of-Legends team for the given tournament
   * @param {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @returns {Promise<HttpResponse<LoLStatsForTeamByTournament>>} Statistics of a League-of-Legends team by tournament
   */
  async getLolTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
    tournamentIdOrSlug: TournamentIdOrSlug,
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetLolTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForTeamByTournament>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      config: this.config,
      responseSchema: loLStatsForTeamByTournamentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('tournament_id_or_slug', tournamentIdOrSlug);
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('games_count', params?.gamesCount);
    request.addQueryParam('side', params?.side);
    request.addQueryParam('videogame_version', params?.videogameVersion);
    return this.client.call(request);
  }
}
