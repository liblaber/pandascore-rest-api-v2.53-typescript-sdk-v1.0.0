import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { ValorantWeapon, valorantWeaponResponse } from '../common';
import { GetValorantWeaponsParams } from './request-params';

export class ValorantWeaponsService extends BaseService {
  /**
   * List weapons
   * @param {FilterOverValorantWeapons} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantWeapons} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantWeapons} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantWeapon[]>>} A list of Valorant weapons
   */
  async getValorantWeapons(
    params?: GetValorantWeaponsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantWeapon[]>> {
    const path = '/valorant/weapons';
    const options: any = {
      responseSchema: z.array(valorantWeaponResponse),
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
   * Get a Valorant weapon by its ID
   * @param {number} valorantWeaponId - ID of the Valorant weapon
   * @returns {Promise<HttpResponse<ValorantWeapon>>} A Valorant weapon
   */
  async getValorantWeaponsValorantWeaponId(
    valorantWeaponId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantWeapon>> {
    const path = this.client.buildPath('/valorant/weapons/{valorant_weapon_id}', {
      valorant_weapon_id: valorantWeaponId,
    });
    const options: any = {
      responseSchema: valorantWeaponResponse,
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
