import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ValorantAbility, valorantAbilityResponse } from './models/valorant-ability';
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/abilities',
      config: this.config,
      responseSchema: z.array(valorantAbilityResponse),
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
   * Get a Valorant ability by its ID
   * @param {number} valorantAbilityId - ID of the Valorant ability
   * @returns {Promise<HttpResponse<ValorantAbility>>} A Valorant ability
   */
  async getValorantAbilitiesValorantAbilityId(
    valorantAbilityId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAbility>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/abilities/{valorant_ability_id}',
      config: this.config,
      responseSchema: valorantAbilityResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_ability_id', valorantAbilityId);
    return this.client.call(request);
  }
}
