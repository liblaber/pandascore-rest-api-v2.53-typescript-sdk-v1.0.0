import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { LoLRune, loLRuneResponse } from '../common/lo-l-rune';
import { GetLolRunesParams, GetLolRunesReforgedParams, GetLolRunesReforgedPathsParams } from './request-params';
import { LoLRuneReforged, loLRuneReforgedResponse } from '../common/lo-l-rune-reforged';
import { LoLRunePath, loLRunePathResponse } from './models/lo-l-rune-path';

export class LoLRunesService extends BaseService {
  /**
   * List runes
   * @param {FilterOverLoLRunes} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLRunes} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLRunes} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLRune[]>>} A list of League-of-Legends runes
   */
  async getLolRunes(params?: GetLolRunesParams, requestConfig?: RequestConfig): Promise<HttpResponse<LoLRune[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/runes',
      config: this.config,
      responseSchema: z.array(loLRuneResponse),
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
   * List the latest version of League of Legends (reforged) runes
   * @param {FilterOverLoLRunesReforged} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLRunesReforged} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLRunesReforged} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLRuneReforged[]>>} A list of League-of-Legends (reforged) runes
   */
  async getLolRunesReforged(
    params?: GetLolRunesReforgedParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRuneReforged[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/runes-reforged',
      config: this.config,
      responseSchema: z.array(loLRuneReforgedResponse),
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
   * List the latest version of League of Legends (reforged) rune paths
   * @param {FilterOverLoLRunePaths} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLRunePaths} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLRunePaths} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLRunePath[]>>} A list of League-of-Legends runes paths
   */
  async getLolRunesReforgedPaths(
    params?: GetLolRunesReforgedPathsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRunePath[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/runes-reforged-paths',
      config: this.config,
      responseSchema: z.array(loLRunePathResponse),
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
   * Retrieve the latest version of a League of Legends (reforged) rune path by its ID
   * @param {number} lolRunePathId - ID of the LoL rune path
   * @returns {Promise<HttpResponse<LoLRunePath>>} A League-of-Legends runes path
   */
  async getLolRunesReforgedPathsLolRunePathId(
    lolRunePathId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRunePath>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/runes-reforged-paths/{lol_rune_path_id}',
      config: this.config,
      responseSchema: loLRunePathResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_rune_path_id', lolRunePathId);
    return this.client.call(request);
  }

  /**
   * Retrieve the latest version of a League of Legends (reforged) rune by its ID
   * @param {number} lolRuneReforgedId - ID of the LoL rune
   * @returns {Promise<HttpResponse<LoLRuneReforged>>} A League-of-Legends (reforged) rune
   */
  async getLolRunesReforgedLolRuneReforgedId(
    lolRuneReforgedId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRuneReforged>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/runes-reforged/{lol_rune_reforged_id}',
      config: this.config,
      responseSchema: loLRuneReforgedResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_rune_reforged_id', lolRuneReforgedId);
    return this.client.call(request);
  }

  /**
   * Get a single rune by ID
   * @param {number} lolRuneId - A rune ID
   * @returns {Promise<HttpResponse<LoLRune>>} A League-of-Legends rune
   */
  async getLolRunesLolRuneId(lolRuneId: number, requestConfig?: RequestConfig): Promise<HttpResponse<LoLRune>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/runes/{lol_rune_id}',
      config: this.config,
      responseSchema: loLRuneResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_rune_id', lolRuneId);
    return this.client.call(request);
  }
}
