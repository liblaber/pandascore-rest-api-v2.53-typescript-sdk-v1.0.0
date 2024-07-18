import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { OwMap, owMapResponse } from './models/ow-map';
import { GetOwMapsParams } from './request-params';
import { OwMapIdOrSlug } from './models';

export class OwMapsService extends BaseService {
  /**
   * List maps
   * @param {FilterOverOwMaps} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverOwMaps} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverOwMaps} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<OwMap[]>>} A list of Overwatch maps
   */
  async getOwMaps(params?: GetOwMapsParams, requestConfig?: RequestConfig): Promise<HttpResponse<OwMap[]>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/maps',
      config: this.config,
      responseSchema: z.array(owMapResponse),
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
   * @param {OwMapIdOrSlug} owMapIdOrSlug - A map ID or slug
   * @returns {Promise<HttpResponse<OwMap>>} An Overwatch map
   */
  async getOwMapsOwMapIdOrSlug(
    owMapIdOrSlug: OwMapIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwMap>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/maps/{ow_map_id_or_slug}',
      config: this.config,
      responseSchema: owMapResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('ow_map_id_or_slug', owMapIdOrSlug);
    return this.client.call(request);
  }
}
