// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { LoLItem, loLItemResponse } from './models/lo-l-item';
import {
  GetLolItemsParams,
  GetLolVersionsAllItemsParams,
  GetLolVersionsLolVersionNameItemsParams,
} from './request-params';

export class LoLItemsService extends BaseService {
  /**
   * List items
   * @param {FilterOverLoLItems} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLItems} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLItems} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLItem[]>>} A list of League-of-Legends items
   */
  async getLolItems(params?: GetLolItemsParams, requestConfig?: RequestConfig): Promise<HttpResponse<LoLItem[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/items',
      config: this.config,
      responseSchema: z.array(loLItemResponse),
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
   * Get a single item by ID or by slug
   * @param {number} lolItemId - An item ID
   * @returns {Promise<HttpResponse<LoLItem>>} A League-of-Legends item
   */
  async getLolItemsLolItemId(lolItemId: number, requestConfig?: RequestConfig): Promise<HttpResponse<LoLItem>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/items/{lol_item_id}',
      config: this.config,
      responseSchema: loLItemResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_item_id', lolItemId);
    return this.client.call(request);
  }

  /**
   * Deprecated. Equivalent route: [/lol/items?filter[videogame_version]=all](/reference/get_lol_items)
   * @param {FilterOverLoLItems} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLItems} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLItems} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLItem[]>>} A list of League-of-Legends items
   */
  async getLolVersionsAllItems(
    params?: GetLolVersionsAllItemsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLItem[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/versions/all/items',
      config: this.config,
      responseSchema: z.array(loLItemResponse),
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
   * Deprecated. Equivalent route: [/lol/items?filter[videogame_version]={lol_version_name}](/reference/get_lol_items)
   * @param {number} lolVersionName - Video game version
   * @param {FilterOverLoLItems} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLItems} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLItems} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLItem[]>>} A list of League-of-Legends items
   */
  async getLolVersionsLolVersionNameItems(
    lolVersionName: number,
    params?: GetLolVersionsLolVersionNameItemsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLItem[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/versions/{lol_version_name}/items',
      config: this.config,
      responseSchema: z.array(loLItemResponse),
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
