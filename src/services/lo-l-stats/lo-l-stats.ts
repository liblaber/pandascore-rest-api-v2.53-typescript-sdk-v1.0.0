import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  LoLStatsForAllPlayersByMatch,
  LoLStatsForPlayer,
  LoLStatsForPlayerBySerie,
  LoLStatsForPlayerByTournament,
  LoLStatsForTeam,
  LoLStatsForTeamByTournament,
  loLStatsForAllPlayersByMatchResponse,
  loLStatsForPlayerBySerieResponse,
  loLStatsForPlayerByTournamentResponse,
  loLStatsForPlayerResponse,
  loLStatsForTeamByTournamentResponse,
  loLStatsForTeamResponse,
} from './models';
import {
  LoLStatsForTeamBySerie,
  MatchIdOrSlug,
  PlayerIdOrSlug,
  SerieIdOrSlug,
  TeamIdOrSlug,
  TournamentIdOrSlug,
  loLStatsForTeamBySerieResponse,
} from '../common';
import {
  GetLolPlayersPlayerIdOrSlugStatsParams,
  GetLolSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetLolSeriesSerieIdOrSlugTeamsStatsParams,
  GetLolSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams,
  GetLolTeamsTeamIdOrSlugStatsParams,
  GetLolTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams,
  GetLolTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams,
} from './request-params';

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
    const path = this.client.buildPath('/lol/matches/{match_id_or_slug}/players/stats', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: loLStatsForAllPlayersByMatchResponse,
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
   * Get detailed statistics of a given League-of-Legends player
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<LoLStatsForPlayer>>} Statistics of a League-of-Legends player
   */
  async getLolPlayersPlayerIdOrSlugStats(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetLolPlayersPlayerIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForPlayer>> {
    const path = this.client.buildPath('/lol/players/{player_id_or_slug}/stats', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: loLStatsForPlayerResponse,
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
    const path = this.client.buildPath(
      '/lol/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: loLStatsForPlayerBySerieResponse,
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
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath('/lol/series/{serie_id_or_slug}/teams/stats', {
      serie_id_or_slug: serieIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(loLStatsForTeamBySerieResponse),
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
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/lol/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats',
      { serie_id_or_slug: serieIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: loLStatsForTeamBySerieResponse,
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
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
  }

  /**
   * Get detailed statistics of a given League-of-Legends team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {number} [gamesCount] - The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/>
   * @param {GetLolPlayersPlayerIdOrSlugStatsSide} [side] -
   * @param {VideogameVersionOrAll} [videogameVersion] -
   * @param {string} [from_] - Filter out 'from' date
   * @param {string} [to] - Filter out 'to' date
   * @returns {Promise<HttpResponse<LoLStatsForTeam>>} Statistics of a League-of-Legends team
   */
  async getLolTeamsTeamIdOrSlugStats(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetLolTeamsTeamIdOrSlugStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLStatsForTeam>> {
    const path = this.client.buildPath('/lol/teams/{team_id_or_slug}/stats', {
      team_id_or_slug: teamIdOrSlug,
    });
    const options: any = {
      responseSchema: loLStatsForTeamResponse,
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
    const path = this.client.buildPath(
      '/lol/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, player_id_or_slug: playerIdOrSlug },
    );
    const options: any = {
      responseSchema: loLStatsForPlayerByTournamentResponse,
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
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath(
      '/lol/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats',
      { tournament_id_or_slug: tournamentIdOrSlug, team_id_or_slug: teamIdOrSlug },
    );
    const options: any = {
      responseSchema: loLStatsForTeamByTournamentResponse,
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
    if (params?.videogameVersion) {
      options.queryParams['videogame_version'] = params?.videogameVersion;
    }
    return this.client.get(path, options);
  }
}
