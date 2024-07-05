import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Match, MatchIdOrSlug, matchResponse } from '../common';
import {
  GetMatchesParams,
  GetMatchesPastParams,
  GetMatchesRunningParams,
  GetMatchesUpcomingParams,
} from './request-params';
import { MatchOpponentsObject, matchOpponentsObjectResponse } from './models';

export class MatchesService extends BaseService {
  /**
   * List matches
   * @param {FilterOverMatches} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverMatches} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverMatches} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Match[]>>} A list of matches of any e-sport
   */
  async getMatches(
    params?: GetMatchesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match[]>> {
    const path = '/matches';
    const options: any = {
      responseSchema: z.array(matchResponse),
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
   * List past matches
   * @param {FilterOverMatches} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverMatches} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverMatches} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Match[]>>} A list of matches of any e-sport
   */
  async getMatchesPast(
    params?: GetMatchesPastParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match[]>> {
    const path = '/matches/past';
    const options: any = {
      responseSchema: z.array(matchResponse),
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
   * List currently running matches
   * @param {FilterOverMatches} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverMatches} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverMatches} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Match[]>>} A list of matches of any e-sport
   */
  async getMatchesRunning(
    params?: GetMatchesRunningParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match[]>> {
    const path = '/matches/running';
    const options: any = {
      responseSchema: z.array(matchResponse),
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
   * List upcoming matches
   * @param {FilterOverMatches} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverMatches} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverMatches} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Match[]>>} A list of matches of any e-sport
   */
  async getMatchesUpcoming(
    params?: GetMatchesUpcomingParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match[]>> {
    const path = '/matches/upcoming';
    const options: any = {
      responseSchema: z.array(matchResponse),
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
   * Get a single match by ID or by slug
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<Match>>} A match of any e-sport
   */
  async getMatchesMatchIdOrSlug(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match>> {
    const path = this.client.buildPath('/matches/{match_id_or_slug}', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: matchResponse,
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
   * List opponents (player or teams) for the given match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @returns {Promise<HttpResponse<MatchOpponentsObject>>} The match's opponents
   */
  async getMatchesMatchIdOrSlugOpponents(
    matchIdOrSlug: MatchIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MatchOpponentsObject>> {
    const path = this.client.buildPath('/matches/{match_id_or_slug}/opponents', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: matchOpponentsObjectResponse,
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
