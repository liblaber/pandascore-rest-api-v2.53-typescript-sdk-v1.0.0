import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { ValorantMap, valorantMapResponse } from '../common';
import {
  GetValorantMapsParams,
  GetValorantVersionsAllMapsParams,
  GetValorantVersionsValorantVersionNameMapsParams,
} from './request-params';

export class ValorantMapsService extends BaseService {
  /**
   * List maps
   * @param {FilterOverValorantMaps} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantMaps} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantMaps} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantMap[]>>} A list of Valorant maps
   */
  async getValorantMaps(
    params?: GetValorantMapsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantMap[]>> {
    const path = '/valorant/maps';
    const options: any = {
      responseSchema: z.array(valorantMapResponse),
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
   * Get a Valorant map by its ID
   * @param {number} valorantMapId - ID of the Valorant map
   * @returns {Promise<HttpResponse<ValorantMap>>} A Valorant map
   */
  async getValorantMapsValorantMapId(
    valorantMapId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantMap>> {
    const path = this.client.buildPath('/valorant/maps/{valorant_map_id}', {
      valorant_map_id: valorantMapId,
    });
    const options: any = {
      responseSchema: valorantMapResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }

  /**
   * Deprecated. Equivalent route: [/valorant/maps?filter[videogame_version]=all](/reference/get_valorant_maps)
   * @param {FilterOverValorantMaps} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantMaps} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantMaps} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantMap[]>>} A list of Valorant maps
   */
  async getValorantVersionsAllMaps(
    params?: GetValorantVersionsAllMapsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantMap[]>> {
    const path = '/valorant/versions/all/maps';
    const options: any = {
      responseSchema: z.array(valorantMapResponse),
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
   * Deprecated. Equivalent route: [/valorant/maps?filter[videogame_version]={valorant_version_name}](/reference/get_valorant_maps)
   * @param {string} valorantVersionName - A video game version
   * @param {FilterOverValorantMaps} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantMaps} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantMaps} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantMap[]>>} A list of Valorant maps
   */
  async getValorantVersionsValorantVersionNameMaps(
    valorantVersionName: string,
    params?: GetValorantVersionsValorantVersionNameMapsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantMap[]>> {
    const path = this.client.buildPath('/valorant/versions/{valorant_version_name}/maps', {
      valorant_version_name: valorantVersionName,
    });
    const options: any = {
      responseSchema: z.array(valorantMapResponse),
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
}
