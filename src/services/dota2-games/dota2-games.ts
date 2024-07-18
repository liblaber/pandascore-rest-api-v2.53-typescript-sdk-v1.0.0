import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Dota2Game, dota2GameResponse } from './models/dota2-game';
import { Dota2Frame, dota2FrameResponse } from './models/dota2-frame';
import {
  GetDota2GamesDota2GameIdFramesParams,
  GetDota2MatchesMatchIdOrSlugGamesParams,
  GetDota2TeamsTeamIdOrSlugGamesParams,
} from './request-params';
import { MatchIdOrSlug, TeamIdOrSlug } from '../common';
import { BaseDota2Game, baseDota2GameResponse } from '../common/base-dota2-game';

export class Dota2GamesService extends BaseService {
  /**
   * Get a single Dota 2 game by ID
   * @param {number} dota2GameId - A game ID
   * @returns {Promise<HttpResponse<Dota2Game>>} A Dota2 game
   */
  async getDota2GamesDota2GameId(dota2GameId: number, requestConfig?: RequestConfig): Promise<HttpResponse<Dota2Game>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/games/{dota2_game_id}',
      config: this.config,
      responseSchema: dota2GameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('dota2_game_id', dota2GameId);
    return this.client.call(request);
  }

  /**
   * List frames for a given Dota 2 game
   * @param {number} dota2GameId - A game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Dota2Frame[]>>} A list of Dota2 game frames
   */
  async getDota2GamesDota2GameIdFrames(
    dota2GameId: number,
    params?: GetDota2GamesDota2GameIdFramesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Frame[]>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/games/{dota2_game_id}/frames',
      config: this.config,
      responseSchema: z.array(dota2FrameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('dota2_game_id', dota2GameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List games for a given Dota 2 match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {FilterOverDota2Games} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverDota2Games} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverDota2Games} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Dota2Game[]>>} A list of Dota2 games
   */
  async getDota2MatchesMatchIdOrSlugGames(
    matchIdOrSlug: MatchIdOrSlug,
    params?: GetDota2MatchesMatchIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Game[]>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/matches/{match_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(dota2GameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List finished games for a given Dota 2 team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<BaseDota2Game[]>>} A list of Dota2 games
   */
  async getDota2TeamsTeamIdOrSlugGames(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetDota2TeamsTeamIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<BaseDota2Game[]>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/teams/{team_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(baseDota2GameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}