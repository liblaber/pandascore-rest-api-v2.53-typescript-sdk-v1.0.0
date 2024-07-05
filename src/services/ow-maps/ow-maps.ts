import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { OwMap, owMapResponse } from '../common';
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
  async getOwMaps(
    params?: GetOwMapsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwMap[]>> {
    const path = '/ow/maps';
    const options: any = {
      responseSchema: z.array(owMapResponse),
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
   * @param {OwMapIdOrSlug} owMapIdOrSlug - A map ID or slug
   * @returns {Promise<HttpResponse<OwMap>>} An Overwatch map
   */
  async getOwMapsOwMapIdOrSlug(
    owMapIdOrSlug: OwMapIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwMap>> {
    const path = this.client.buildPath('/ow/maps/{ow_map_id_or_slug}', {
      ow_map_id_or_slug: owMapIdOrSlug,
    });
    const options: any = {
      responseSchema: owMapResponse,
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
