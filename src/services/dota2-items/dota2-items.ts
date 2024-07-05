import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Dota2Item, dota2ItemResponse } from '../common';
import { GetDota2ItemsParams } from './request-params';
import { Dota2ItemIdOrSlug } from './models';

export class Dota2ItemsService extends BaseService {
  /**
   * List items
   * @param {FilterOverDota2Items} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverDota2Items} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverDota2Items} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Dota2Item[]>>} A list of Dota2 items
   */
  async getDota2Items(
    params?: GetDota2ItemsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Item[]>> {
    const path = '/dota2/items';
    const options: any = {
      responseSchema: z.array(dota2ItemResponse),
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
   * @param {Dota2ItemIdOrSlug} dota2ItemIdOrSlug - An item ID or slug
   * @returns {Promise<HttpResponse<Dota2Item>>} A Dota2 item
   */
  async getDota2ItemsDota2ItemIdOrSlug(
    dota2ItemIdOrSlug: Dota2ItemIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Item>> {
    const path = this.client.buildPath('/dota2/items/{dota2_item_id_or_slug}', {
      dota2_item_id_or_slug: dota2ItemIdOrSlug,
    });
    const options: any = {
      responseSchema: dota2ItemResponse,
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
