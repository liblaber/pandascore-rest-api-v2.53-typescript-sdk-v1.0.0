import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { CsgoMap, csgoMapResponse } from '../common';
import { GetCsgoMapsParams } from './request-params';

export class CounterStrikeMapsService extends BaseService {
  /**
   * List maps
   * @param {FilterOverCsgoMaps} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoMaps} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoMaps} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<CsgoMap[]>>} A list of Counter-Strike maps
   */
  async getCsgoMaps(
    params?: GetCsgoMapsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoMap[]>> {
    const path = '/csgo/maps';
    const options: any = {
      responseSchema: z.array(csgoMapResponse),
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
   * Get a single map by ID or by slug
   * @param {number} csgoMapId - A map ID
   * @returns {Promise<HttpResponse<CsgoMap>>} A Counter-Strike map
   */
  async getCsgoMapsCsgoMapId(
    csgoMapId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoMap>> {
    const path = this.client.buildPath('/csgo/maps/{csgo_map_id}', { csgo_map_id: csgoMapId });
    const options: any = {
      responseSchema: csgoMapResponse,
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
