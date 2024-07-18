import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { OwHero, owHeroResponse } from '../common/ow-hero';
import { GetOwHeroesParams } from './request-params';
import { OwHeroIdOrSlug } from './models';

export class OwHeroesService extends BaseService {
  /**
   * List heroes
   * @param {FilterOverOwHeroes} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverOwHeroes} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverOwHeroes} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<OwHero[]>>} A list of Overwatch heroes
   */
  async getOwHeroes(params?: GetOwHeroesParams, requestConfig?: RequestConfig): Promise<HttpResponse<OwHero[]>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/heroes',
      config: this.config,
      responseSchema: z.array(owHeroResponse),
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
   * Get a single hero by ID or by slug
   * @param {OwHeroIdOrSlug} owHeroIdOrSlug - A hero ID or slug
   * @returns {Promise<HttpResponse<OwHero>>} An Overwatch hero
   */
  async getOwHeroesOwHeroIdOrSlug(
    owHeroIdOrSlug: OwHeroIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwHero>> {
    const request = new Request({
      method: 'GET',
      path: '/ow/heroes/{ow_hero_id_or_slug}',
      config: this.config,
      responseSchema: owHeroResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('ow_hero_id_or_slug', owHeroIdOrSlug);
    return this.client.call(request);
  }
}
