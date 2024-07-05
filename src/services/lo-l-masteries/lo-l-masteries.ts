import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { LoLMastery, loLMasteryResponse } from '../common';
import { GetLolMasteriesParams } from './request-params';

export class LoLMasteriesService extends BaseService {
  /**
   * List masteries
   * @param {FilterOverLoLMasteries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLMasteries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLMasteries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLMastery[]>>} A list of League-of-Legends masteries
   */
  async getLolMasteries(
    params?: GetLolMasteriesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLMastery[]>> {
    const path = '/lol/masteries';
    const options: any = {
      responseSchema: z.array(loLMasteryResponse),
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
   * Get a single mastery by ID
   * @param {number} lolMasteryId - A mastery ID
   * @returns {Promise<HttpResponse<LoLMastery>>} A League-of-Legends mastery
   */
  async getLolMasteriesLolMasteryId(
    lolMasteryId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLMastery>> {
    const path = this.client.buildPath('/lol/masteries/{lol_mastery_id}', {
      lol_mastery_id: lolMasteryId,
    });
    const options: any = {
      responseSchema: loLMasteryResponse,
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
