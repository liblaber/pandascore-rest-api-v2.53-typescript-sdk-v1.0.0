import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { SerieIdOrSlug, Team, teamResponse } from '../common';
import { GetLolSeriesSerieIdOrSlugTeamsParams, GetLolTeamsParams } from './request-params';

export class LoLTeamsService extends BaseService {
  /**
   * List teams for the League of Legends videogame for a given serie
   * @param {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug
   * @param {FilterOverLoLTeams} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLTeams} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLTeams} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Team[]>>} A list of League-of-Legends teams
   */
  async getLolSeriesSerieIdOrSlugTeams(
    serieIdOrSlug: SerieIdOrSlug,
    params?: GetLolSeriesSerieIdOrSlugTeamsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Team[]>> {
    const path = this.client.buildPath('/lol/series/{serie_id_or_slug}/teams', {
      serie_id_or_slug: serieIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(teamResponse),
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
   * List teams for the League of Legends videogame
   * @param {FilterOverLoLTeams} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLTeams} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLTeams} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Team[]>>} A list of League-of-Legends teams
   */
  async getLolTeams(
    params?: GetLolTeamsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Team[]>> {
    const path = '/lol/teams';
    const options: any = {
      responseSchema: z.array(teamResponse),
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
