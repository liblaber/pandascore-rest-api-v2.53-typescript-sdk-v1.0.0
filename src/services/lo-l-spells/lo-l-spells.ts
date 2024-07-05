import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { LoLSpell, loLSpellResponse } from '../common';
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
  async getLolSpells(
    params?: GetLolSpellsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLSpell[]>> {
    const path = '/lol/spells';
    const options: any = {
      responseSchema: z.array(loLSpellResponse),
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
   * Get a single spell by ID
   * @param {number} lolSpellId - A spell ID
   * @returns {Promise<HttpResponse<LoLSpell>>} A League-of-Legends spell
   */
  async getLolSpellsLolSpellId(
    lolSpellId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLSpell>> {
    const path = this.client.buildPath('/lol/spells/{lol_spell_id}', { lol_spell_id: lolSpellId });
    const options: any = {
      responseSchema: loLSpellResponse,
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
