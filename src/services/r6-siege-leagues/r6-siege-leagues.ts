// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { League, leagueResponse } from '../common/league';
import { GetR6siegeLeaguesParams } from './request-params';

export class R6SiegeLeaguesService extends BaseService {
  /**
   * List Rainbow Six Siege leagues
   * @param {FilterOverR6SiegeLeagues} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverR6SiegeLeagues} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverR6SiegeLeagues} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<League[]>>} A list of R6 Siege leagues
   */
  async getR6siegeLeagues(
    params?: GetR6siegeLeaguesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<League[]>> {
    const request = new RequestBuilder<League[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/r6siege/leagues')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(leagueResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'filter',
        value: params?.filter,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'range',
        value: params?.range,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'search',
        value: params?.search,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<League[]>(request);
  }
}
