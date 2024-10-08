// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CsgoWeapon, csgoWeaponResponse } from './models/csgo-weapon';
import { GetCsgoWeaponsParams } from './request-params';
import { CsgoWeaponIdOrSlug } from './models/csgo-weapon-id-or-slug';

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
    const request = new RequestBuilder<CsgoWeapon[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/csgo/weapons')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(csgoWeaponResponse))
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
    return this.client.call<CsgoWeapon[]>(request);
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
    const request = new RequestBuilder<CsgoWeapon>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/csgo/weapons/{csgo_weapon_id_or_slug}')
      .setRequestSchema(z.any())
      .setResponseSchema(csgoWeaponResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'csgo_weapon_id_or_slug',
        value: csgoWeaponIdOrSlug,
      })
      .build();
    return this.client.call<CsgoWeapon>(request);
  }
}
