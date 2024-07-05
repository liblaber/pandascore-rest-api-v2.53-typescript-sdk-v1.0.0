import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  LoLRune,
  LoLRunePath,
  LoLRuneReforged,
  loLRunePathResponse,
  loLRuneReforgedResponse,
  loLRuneResponse,
} from '../common';
import {
  GetLolRunesParams,
  GetLolRunesReforgedParams,
  GetLolRunesReforgedPathsParams,
} from './request-params';

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
  async getLolRunes(
    params?: GetLolRunesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRune[]>> {
    const path = '/lol/runes';
    const options: any = {
      responseSchema: z.array(loLRuneResponse),
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
    const path = '/lol/runes-reforged';
    const options: any = {
      responseSchema: z.array(loLRuneReforgedResponse),
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
    const path = '/lol/runes-reforged-paths';
    const options: any = {
      responseSchema: z.array(loLRunePathResponse),
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

  /**
   * Retrieve the latest version of a League of Legends (reforged) rune path by its ID
   * @param {number} lolRunePathId - ID of the LoL rune path
   * @returns {Promise<HttpResponse<LoLRunePath>>} A League-of-Legends runes path
   */
  async getLolRunesReforgedPathsLolRunePathId(
    lolRunePathId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRunePath>> {
    const path = this.client.buildPath('/lol/runes-reforged-paths/{lol_rune_path_id}', {
      lol_rune_path_id: lolRunePathId,
    });
    const options: any = {
      responseSchema: loLRunePathResponse,
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
   * Retrieve the latest version of a League of Legends (reforged) rune by its ID
   * @param {number} lolRuneReforgedId - ID of the LoL rune
   * @returns {Promise<HttpResponse<LoLRuneReforged>>} A League-of-Legends (reforged) rune
   */
  async getLolRunesReforgedLolRuneReforgedId(
    lolRuneReforgedId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRuneReforged>> {
    const path = this.client.buildPath('/lol/runes-reforged/{lol_rune_reforged_id}', {
      lol_rune_reforged_id: lolRuneReforgedId,
    });
    const options: any = {
      responseSchema: loLRuneReforgedResponse,
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
   * Get a single rune by ID
   * @param {number} lolRuneId - A rune ID
   * @returns {Promise<HttpResponse<LoLRune>>} A League-of-Legends rune
   */
  async getLolRunesLolRuneId(
    lolRuneId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLRune>> {
    const path = this.client.buildPath('/lol/runes/{lol_rune_id}', { lol_rune_id: lolRuneId });
    const options: any = {
      responseSchema: loLRuneResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }
}
