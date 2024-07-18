import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Dota2Hero, dota2HeroResponse } from '../common/dota2-hero';
import { GetDota2HeroesParams } from './request-params';
import { Dota2HeroIdOrSlug } from './models';

export class Dota2HeroesService extends BaseService {
  /**
   * List heroes
   * @param {FilterOverDota2Heroes} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverDota2Heroes} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverDota2Heroes} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Dota2Hero[]>>} A list of Dota2 heroes
   */
  async getDota2Heroes(
    params?: GetDota2HeroesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Hero[]>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/heroes',
      config: this.config,
      responseSchema: z.array(dota2HeroResponse),
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
   * @param {Dota2HeroIdOrSlug} dota2HeroIdOrSlug - A hero ID or slug
   * @returns {Promise<HttpResponse<Dota2Hero>>} A Dota2 hero
   */
  async getDota2HeroesDota2HeroIdOrSlug(
    dota2HeroIdOrSlug: Dota2HeroIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Dota2Hero>> {
    const request = new Request({
      method: 'GET',
      path: '/dota2/heroes/{dota2_hero_id_or_slug}',
      config: this.config,
      responseSchema: dota2HeroResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('dota2_hero_id_or_slug', dota2HeroIdOrSlug);
    return this.client.call(request);
  }
}
