import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { MatchIdOrSlug, OwGame, owGameResponse } from '../common';
import { GetOwMatchesMatchIdOrSlugGamesParams } from './request-params';

export class OwGamesService extends BaseService {
  /**
   * Get a single Overwatch game by ID
   * @param {number} owGameId - An Overwatch game ID
   * @returns {Promise<HttpResponse<OwGame>>} An Overwatch game
   */
  async getOwGamesOwGameId(
    owGameId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwGame>> {
    const path = this.client.buildPath('/ow/games/{ow_game_id}', { ow_game_id: owGameId });
    const options: any = {
      responseSchema: owGameResponse,
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
   * List games for a given Overwatch match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {FilterOverOwGames} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverOwGames} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverOwGames} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<OwGame[]>>} A list of Overwatch games
   */
  async getOwMatchesMatchIdOrSlugGames(
    matchIdOrSlug: MatchIdOrSlug,
    params?: GetOwMatchesMatchIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwGame[]>> {
    const path = this.client.buildPath('/ow/matches/{match_id_or_slug}/games', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(owGameResponse),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.filter) {
      options.queryParams['filter'] = params?.filter;
    }
    if (params?.range) {
      options.queryParams['range'] = params?.range;
    }
    if (params?.sort) {
      options.queryParams['sort'] = params?.sort;
    }
    if (params?.search) {
      options.queryParams['search'] = params?.search;
    }
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    return this.client.get(path, options);
  }
}
