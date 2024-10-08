// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { LoLSpell, loLSpellResponse } from '../common/lo-l-spell';
import { GetLolSpellsParams } from './request-params';

export class LoLSpellsService extends BaseService {
  /**
   * List spells
   * @param {FilterOverLoLSpells} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLSpells} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLSpells} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLSpell[]>>} A list of League-of-Legends spells
   */
  async getLolSpells(params?: GetLolSpellsParams, requestConfig?: RequestConfig): Promise<HttpResponse<LoLSpell[]>> {
    const request = new RequestBuilder<LoLSpell[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/spells')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(loLSpellResponse))
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
    return this.client.call<LoLSpell[]>(request);
  }

  /**
   * Get a single spell by ID
   * @param {number} lolSpellId - A spell ID
   * @returns {Promise<HttpResponse<LoLSpell>>} A League-of-Legends spell
   */
  async getLolSpellsLolSpellId(lolSpellId: number, requestConfig?: RequestConfig): Promise<HttpResponse<LoLSpell>> {
    const request = new RequestBuilder<LoLSpell>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/lol/spells/{lol_spell_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(loLSpellResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'lol_spell_id',
        value: lolSpellId,
      })
      .build();
    return this.client.call<LoLSpell>(request);
  }
}
