import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Player, playerResponse } from '../common/player';
import { GetR6siegePlayersParams } from './request-params';

export class R6SiegePlayersService extends BaseService {
  /**
   * List players for the Rainbow Six Siege videogame
   * @param {FilterOverR6SiegePlayers} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverR6SiegePlayers} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverR6SiegePlayers} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Player[]>>} A list of R6 Siege players
   */
  async getR6siegePlayers(
    params?: GetR6siegePlayersParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Player[]>> {
    const request = new Request({
      method: 'GET',
      path: '/r6siege/players',
      config: this.config,
      responseSchema: z.array(playerResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}