import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
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
    const request = new Request({
      method: 'GET',
      path: '/lol/spells',
      config: this.config,
      responseSchema: z.array(loLSpellResponse),
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
   * Get a single spell by ID
   * @param {number} lolSpellId - A spell ID
   * @returns {Promise<HttpResponse<LoLSpell>>} A League-of-Legends spell
   */
  async getLolSpellsLolSpellId(lolSpellId: number, requestConfig?: RequestConfig): Promise<HttpResponse<LoLSpell>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/spells/{lol_spell_id}',
      config: this.config,
      responseSchema: loLSpellResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_spell_id', lolSpellId);
    return this.client.call(request);
  }
}
