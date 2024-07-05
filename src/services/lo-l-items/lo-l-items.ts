import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { LoLItem, loLItemResponse } from '../common';
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
  async getLolItems(
    params?: GetLolItemsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLItem[]>> {
    const path = '/lol/items';
    const options: any = {
      responseSchema: z.array(loLItemResponse),
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
   * Get a single item by ID or by slug
   * @param {number} lolItemId - An item ID
   * @returns {Promise<HttpResponse<LoLItem>>} A League-of-Legends item
   */
  async getLolItemsLolItemId(
    lolItemId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLItem>> {
    const path = this.client.buildPath('/lol/items/{lol_item_id}', { lol_item_id: lolItemId });
    const options: any = {
      responseSchema: loLItemResponse,
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
    const path = '/lol/versions/all/items';
    const options: any = {
      responseSchema: z.array(loLItemResponse),
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
    const path = this.client.buildPath('/lol/versions/{lol_version_name}/items', {
      lol_version_name: lolVersionName,
    });
    const options: any = {
      responseSchema: z.array(loLItemResponse),
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
