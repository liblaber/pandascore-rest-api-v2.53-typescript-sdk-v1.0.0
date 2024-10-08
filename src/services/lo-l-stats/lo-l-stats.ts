// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import {
  LoLStatsForAllPlayersByMatch,
  loLStatsForAllPlayersByMatchResponse,
} from './models/lo-l-stats-for-all-players-by-match';
import { MatchIdOrSlug } from '../common/match-id-or-slug';
import { LoLStatsForPlayer, loLStatsForPlayerResponse } from './models/lo-l-stats-for-player';
import { PlayerIdOrSlug } from '../common/player-id-or-slug';
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
import { SerieIdOrSlug } from '../common/serie-id-or-slug';
import { LoLStatsForTeamBySerie, loLStatsForTeamBySerieResponse } from './models/lo-l-stats-for-team-by-serie';
import { TeamIdOrSlug } from '../common/team-id-or-slug';
import { LoLStatsForTeam, loLStatsForTeamResponse } from './models/lo-l-stats-for-team';
import {
  LoLStatsForPlayerByTournament,
  loLStatsForPlayerByTournamentResponse,
} from './models/lo-l-stats-for-player-by-tournament';
import { TournamentIdOrSlug } from '../common/tournament-id-or-slug';
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
    const request = new RequestBuilder<LoLStatsForAllPlayersByMatch>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/matches/{match_id_or_slug}/players/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForAllPlayersByMatchResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'match_id_or_slug',
        value: matchIdOrSlug,
      })
      .build();
    return this.client.call<LoLStatsForAllPlayersByMatch>(request);
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
    const request = new RequestBuilder<LoLStatsForPlayer>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/players/{player_id_or_slug}/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForPlayerResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'player_id_or_slug',
        value: playerIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .addQueryParam({
        key: 'from',
        value: params?.from,
      })
      .addQueryParam({
        key: 'to',
        value: params?.to,
      })
      .build();
    return this.client.call<LoLStatsForPlayer>(request);
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
    const request = new RequestBuilder<LoLStatsForPlayerBySerie>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForPlayerBySerieResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'serie_id_or_slug',
        value: serieIdOrSlug,
      })
      .addPathParam({
        key: 'player_id_or_slug',
        value: playerIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .build();
    return this.client.call<LoLStatsForPlayerBySerie>(request);
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
    const request = new RequestBuilder<LoLStatsForTeamBySerie[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/series/{serie_id_or_slug}/teams/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(loLStatsForTeamBySerieResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'serie_id_or_slug',
        value: serieIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<LoLStatsForTeamBySerie[]>(request);
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
    const request = new RequestBuilder<LoLStatsForTeamBySerie>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForTeamBySerieResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'serie_id_or_slug',
        value: serieIdOrSlug,
      })
      .addPathParam({
        key: 'team_id_or_slug',
        value: teamIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .build();
    return this.client.call<LoLStatsForTeamBySerie>(request);
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
    const request = new RequestBuilder<LoLStatsForTeam>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/teams/{team_id_or_slug}/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForTeamResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'team_id_or_slug',
        value: teamIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .addQueryParam({
        key: 'from',
        value: params?.from,
      })
      .addQueryParam({
        key: 'to',
        value: params?.to,
      })
      .build();
    return this.client.call<LoLStatsForTeam>(request);
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
    const request = new RequestBuilder<LoLStatsForPlayerByTournament>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForPlayerByTournamentResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'tournament_id_or_slug',
        value: tournamentIdOrSlug,
      })
      .addPathParam({
        key: 'player_id_or_slug',
        value: playerIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .build();
    return this.client.call<LoLStatsForPlayerByTournament>(request);
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
    const request = new RequestBuilder<LoLStatsForTeamByTournament>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats')
      .setRequestSchema(z.any())
      .setResponseSchema(loLStatsForTeamByTournamentResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'tournament_id_or_slug',
        value: tournamentIdOrSlug,
      })
      .addPathParam({
        key: 'team_id_or_slug',
        value: teamIdOrSlug,
      })
      .addQueryParam({
        key: 'games_count',
        value: params?.gamesCount,
      })
      .addQueryParam({
        key: 'side',
        value: params?.side,
      })
      .addQueryParam({
        key: 'videogame_version',
        value: params?.videogameVersion,
      })
      .build();
    return this.client.call<LoLStatsForTeamByTournament>(request);
  }
}
