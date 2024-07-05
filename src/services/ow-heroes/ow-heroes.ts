import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { OwHero, owHeroResponse } from '../common';
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
  async getOwHeroes(
    params?: GetOwHeroesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwHero[]>> {
    const path = '/ow/heroes';
    const options: any = {
      responseSchema: z.array(owHeroResponse),
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
   * Get a single hero by ID or by slug
   * @param {OwHeroIdOrSlug} owHeroIdOrSlug - A hero ID or slug
   * @returns {Promise<HttpResponse<OwHero>>} An Overwatch hero
   */
  async getOwHeroesOwHeroIdOrSlug(
    owHeroIdOrSlug: OwHeroIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<OwHero>> {
    const path = this.client.buildPath('/ow/heroes/{ow_hero_id_or_slug}', {
      ow_hero_id_or_slug: owHeroIdOrSlug,
    });
    const options: any = {
      responseSchema: owHeroResponse,
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
