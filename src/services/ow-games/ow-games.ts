import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { OwGame, owGameResponse } from './models/ow-game';
import { MatchIdOrSlug } from '../common';
import { GetOwMatchesMatchIdOrSlugGamesParams } from './request-params';

export class OwGamesService extends BaseService {
  /**
   * Get a single Overwatch game by ID
   * @param {number} owGameId - An Overwatch game ID
   * @returns {Promise<HttpResponse<OwGame>>} An Overwatch game
   */
  async getOwGamesOwGameId(owGameId: number, requestConfig?: RequestConfig): Promise<HttpResponse<OwGame>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/games/{ow_game_id}',
      config: this.config,
      responseSchema: owGameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('ow_game_id', owGameId);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/ow/matches/{match_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(owGameResponse),
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
}
