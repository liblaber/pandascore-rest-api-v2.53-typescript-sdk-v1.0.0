import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Serie, serieResponse } from '../common';
import {
  GetCsgoSeriesParams,
  GetCsgoSeriesPastParams,
  GetCsgoSeriesRunningParams,
  GetCsgoSeriesUpcomingParams,
} from './request-params';

export class CounterStrikeSeriesService extends BaseService {
  /**
   * List series for the Counter-Strike videogame
   * @param {FilterOverCsgoSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of Counter-Strike series
   */
  async getCsgoSeries(
    params?: GetCsgoSeriesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const path = '/csgo/series';
    const options: any = {
      responseSchema: z.array(serieResponse),
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
   * List past Counter-Strike series
   * @param {FilterOverCsgoSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of Counter-Strike series
   */
  async getCsgoSeriesPast(
    params?: GetCsgoSeriesPastParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const path = '/csgo/series/past';
    const options: any = {
      responseSchema: z.array(serieResponse),
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
   * List running Counter-Strike series
   * @param {FilterOverCsgoSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of Counter-Strike series
   */
  async getCsgoSeriesRunning(
    params?: GetCsgoSeriesRunningParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const path = '/csgo/series/running';
    const options: any = {
      responseSchema: z.array(serieResponse),
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
   * List upcoming Counter-Strike series
   * @param {FilterOverCsgoSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of Counter-Strike series
   */
  async getCsgoSeriesUpcoming(
    params?: GetCsgoSeriesUpcomingParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const path = '/csgo/series/upcoming';
    const options: any = {
      responseSchema: z.array(serieResponse),
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
