import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Dota2Ability, dota2AbilityResponse } from '../common';
import { GetDota2AbilitiesParams } from './request-params';
import { Dota2AbilityIdOrSlug } from './models';

export class Dota2AbilitiesService extends BaseService {
  /**
   * List abilities
   * @param {FilterOverDota2Abilities} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverDota2Abilities} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverDota2Abilities} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Dota2Ability[]>>} A list of Dota2 abilities
   */
  async getDota2Abilities(
    params?: GetDota2AbilitiesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Ability[]>> {
    const path = '/dota2/abilities';
    const options: any = {
      responseSchema: z.array(dota2AbilityResponse),
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
   * Get a single ability by ID or by slug
   * @param {Dota2AbilityIdOrSlug} dota2AbilityIdOrSlug - An ability ID or slug
   * @returns {Promise<HttpResponse<Dota2Ability>>} A Dota2 ability
   */
  async getDota2AbilitiesDota2AbilityIdOrSlug(
    dota2AbilityIdOrSlug: Dota2AbilityIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Ability>> {
    const path = this.client.buildPath('/dota2/abilities/{dota2_ability_id_or_slug}', {
      dota2_ability_id_or_slug: dota2AbilityIdOrSlug,
    });
    const options: any = {
      responseSchema: dota2AbilityResponse,
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
