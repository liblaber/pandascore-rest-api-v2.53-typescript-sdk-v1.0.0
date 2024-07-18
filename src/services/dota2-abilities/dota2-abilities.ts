import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Dota2Ability, dota2AbilityResponse } from './models/dota2-ability';
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
    const request = new Request({
      method: 'GET',
      path: '/dota2/abilities',
      config: this.config,
      responseSchema: z.array(dota2AbilityResponse),
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
   * Get a single ability by ID or by slug
   * @param {Dota2AbilityIdOrSlug} dota2AbilityIdOrSlug - An ability ID or slug
   * @returns {Promise<HttpResponse<Dota2Ability>>} A Dota2 ability
   */
  async getDota2AbilitiesDota2AbilityIdOrSlug(
    dota2AbilityIdOrSlug: Dota2AbilityIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Ability>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/abilities/{dota2_ability_id_or_slug}',
      config: this.config,
      responseSchema: dota2AbilityResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('dota2_ability_id_or_slug', dota2AbilityIdOrSlug);
    return this.client.call(request);
  }
}