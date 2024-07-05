import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { LoLChampion, loLChampionResponse } from '../common';
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
    const path = '/lol/champions';
    const options: any = {
      responseSchema: z.array(loLChampionResponse),
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
   * Get a single champion by ID or by slug
   * @param {number} lolChampionId - A champion ID
   * @returns {Promise<HttpResponse<LoLChampion>>} A League-of-Legends champion
   */
  async getLolChampionsLolChampionId(
    lolChampionId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLChampion>> {
    const path = this.client.buildPath('/lol/champions/{lol_champion_id}', {
      lol_champion_id: lolChampionId,
    });
    const options: any = {
      responseSchema: loLChampionResponse,
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
    const path = '/lol/versions/all/champions';
    const options: any = {
      responseSchema: z.array(loLChampionResponse),
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
    const path = this.client.buildPath('/lol/versions/{lol_version_name}/champions', {
      lol_version_name: lolVersionName,
    });
    const options: any = {
      responseSchema: z.array(loLChampionResponse),
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
