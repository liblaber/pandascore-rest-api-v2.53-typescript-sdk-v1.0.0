import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { CsgoWeapon, csgoWeaponResponse } from './models/csgo-weapon';
import { GetCsgoWeaponsParams } from './request-params';
import { CsgoWeaponIdOrSlug } from './models';

export class CounterStrikeWeaponsService extends BaseService {
  /**
   * List weapons
   * @param {FilterOverCsgoWeapons} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoWeapons} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoWeapons} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<CsgoWeapon[]>>} A list of Counter-Strike weapons
   */
  async getCsgoWeapons(
    params?: GetCsgoWeaponsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoWeapon[]>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/weapons',
      config: this.config,
      responseSchema: z.array(csgoWeaponResponse),
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
   * Get a single weapon by ID or by slug
   * @param {CsgoWeaponIdOrSlug} csgoWeaponIdOrSlug - A weapon ID or slug
   * @returns {Promise<HttpResponse<CsgoWeapon>>} A Counter-Strike weapon
   */
  async getCsgoWeaponsCsgoWeaponIdOrSlug(
    csgoWeaponIdOrSlug: CsgoWeaponIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoWeapon>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/weapons/{csgo_weapon_id_or_slug}',
      config: this.config,
      responseSchema: csgoWeaponResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('csgo_weapon_id_or_slug', csgoWeaponIdOrSlug);
    return this.client.call(request);
  }
}
