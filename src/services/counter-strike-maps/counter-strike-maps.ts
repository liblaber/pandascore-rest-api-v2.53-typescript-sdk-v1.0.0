import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { CsgoMap, csgoMapResponse } from './models/csgo-map';
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
  async getCsgoMaps(params?: GetCsgoMapsParams, requestConfig?: RequestConfig): Promise<HttpResponse<CsgoMap[]>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/maps',
      config: this.config,
      responseSchema: z.array(csgoMapResponse),
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
   * Get a single map by ID or by slug
   * @param {number} csgoMapId - A map ID
   * @returns {Promise<HttpResponse<CsgoMap>>} A Counter-Strike map
   */
  async getCsgoMapsCsgoMapId(csgoMapId: number, requestConfig?: RequestConfig): Promise<HttpResponse<CsgoMap>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/maps/{csgo_map_id}',
      config: this.config,
      responseSchema: csgoMapResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('csgo_map_id', csgoMapId);
    return this.client.call(request);
  }
}
