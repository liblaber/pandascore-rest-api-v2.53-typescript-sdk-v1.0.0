import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { ValorantAbility, valorantAbilityResponse } from '../common';
import { GetValorantAbilitiesParams } from './request-params';

export class ValorantAbilitiesService extends BaseService {
  /**
   * List abilities
   * @param {FilterOverValorantAbilities} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantAbilities} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantAbilities} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantAbility[]>>} A list of Valorant abilities
   */
  async getValorantAbilities(
    params?: GetValorantAbilitiesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAbility[]>> {
    const path = '/valorant/abilities';
    const options: any = {
      responseSchema: z.array(valorantAbilityResponse),
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
   * Get a Valorant ability by its ID
   * @param {number} valorantAbilityId - ID of the Valorant ability
   * @returns {Promise<HttpResponse<ValorantAbility>>} A Valorant ability
   */
  async getValorantAbilitiesValorantAbilityId(
    valorantAbilityId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAbility>> {
    const path = this.client.buildPath('/valorant/abilities/{valorant_ability_id}', {
      valorant_ability_id: valorantAbilityId,
    });
    const options: any = {
      responseSchema: valorantAbilityResponse,
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
