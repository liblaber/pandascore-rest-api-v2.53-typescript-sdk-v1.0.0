import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { LoLChampion, loLChampionResponse } from '../common/lo-l-champion';
import {
  GetLolChampionsParams,
  GetLolVersionsAllChampionsParams,
  GetLolVersionsLolVersionNameChampionsParams,
} from './request-params';

export class LoLChampionsService extends BaseService {
  /**
   * List champions
   * @param {FilterOverLoLChampions} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLChampions} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLChampions} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLChampion[]>>} A list of League-of-Legends champions
   */
  async getLolChampions(
    params?: GetLolChampionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLChampion[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/champions',
      config: this.config,
      responseSchema: z.array(loLChampionResponse),
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

  /**
   * Get a single champion by ID or by slug
   * @param {number} lolChampionId - A champion ID
   * @returns {Promise<HttpResponse<LoLChampion>>} A League-of-Legends champion
   */
  async getLolChampionsLolChampionId(
    lolChampionId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLChampion>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/champions/{lol_champion_id}',
      config: this.config,
      responseSchema: loLChampionResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_champion_id', lolChampionId);
    return this.client.call(request);
  }

  /**
   * Deprecated. Equivalent route: [/lol/champions?filter[videogame_version]=all](/reference/get_lol_champions)
   * @param {FilterOverLoLChampions} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLChampions} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLChampions} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLChampion[]>>} A list of League-of-Legends champions
   */
  async getLolVersionsAllChampions(
    params?: GetLolVersionsAllChampionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLChampion[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/versions/all/champions',
      config: this.config,
      responseSchema: z.array(loLChampionResponse),
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

  /**
   * Deprecated. Equivalent route: [/lol/champions?filter[videogame_version]={lol_version_name}](/reference/get_lol_champions)
   * @param {number} lolVersionName - Video game version
   * @param {FilterOverLoLChampions} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLChampions} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLChampions} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLChampion[]>>} A list of League-of-Legends champions
   */
  async getLolVersionsLolVersionNameChampions(
    lolVersionName: number,
    params?: GetLolVersionsLolVersionNameChampionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLChampion[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/versions/{lol_version_name}/champions',
      config: this.config,
      responseSchema: z.array(loLChampionResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_version_name', lolVersionName);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}