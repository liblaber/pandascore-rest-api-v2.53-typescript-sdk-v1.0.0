import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { LoLMastery, loLMasteryResponse } from '../common/lo-l-mastery';
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
    const request = new Request({
      method: 'GET',
      path: '/lol/masteries',
      config: this.config,
      responseSchema: z.array(loLMasteryResponse),
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
   * Get a single mastery by ID
   * @param {number} lolMasteryId - A mastery ID
   * @returns {Promise<HttpResponse<LoLMastery>>} A League-of-Legends mastery
   */
  async getLolMasteriesLolMasteryId(
    lolMasteryId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLMastery>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/masteries/{lol_mastery_id}',
      config: this.config,
      responseSchema: loLMasteryResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_mastery_id', lolMasteryId);
    return this.client.call(request);
  }
}
