// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ShortTournament, shortTournamentResponse } from '../common/short-tournament';
import {
  GetR6siegeTournamentsParams,
  GetR6siegeTournamentsPastParams,
  GetR6siegeTournamentsRunningParams,
  GetR6siegeTournamentsUpcomingParams,
} from './request-params';

export class R6SiegeTournamentsService extends BaseService {
  /**
   * List tournaments for the Rainbow Six Siege videogame
   * @param {FilterOverR6SiegeShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverR6SiegeShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverR6SiegeShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of R6 Siege tournaments
   */
  async getR6siegeTournaments(
    params?: GetR6siegeTournamentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new RequestBuilder<ShortTournament[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/r6siege/tournaments')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortTournamentResponse))
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
    return this.client.call<ShortTournament[]>(request);
  }

  /**
   * List past Rainbow Six Siege tournaments
   * @param {FilterOverR6SiegeShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverR6SiegeShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverR6SiegeShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of R6 Siege tournaments
   */
  async getR6siegeTournamentsPast(
    params?: GetR6siegeTournamentsPastParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new RequestBuilder<ShortTournament[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/r6siege/tournaments/past')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortTournamentResponse))
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
    return this.client.call<ShortTournament[]>(request);
  }

  /**
   * List running Rainbow Six Siege tournaments
   * @param {FilterOverR6SiegeShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverR6SiegeShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverR6SiegeShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of R6 Siege tournaments
   */
  async getR6siegeTournamentsRunning(
    params?: GetR6siegeTournamentsRunningParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new RequestBuilder<ShortTournament[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/r6siege/tournaments/running')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortTournamentResponse))
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
    return this.client.call<ShortTournament[]>(request);
  }

  /**
   * List upcoming Rainbow Six Siege tournaments
   * @param {FilterOverR6SiegeShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverR6SiegeShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverR6SiegeShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of R6 Siege tournaments
   */
  async getR6siegeTournamentsUpcoming(
    params?: GetR6siegeTournamentsUpcomingParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new RequestBuilder<ShortTournament[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/r6siege/tournaments/upcoming')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortTournamentResponse))
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
    return this.client.call<ShortTournament[]>(request);
  }
}
