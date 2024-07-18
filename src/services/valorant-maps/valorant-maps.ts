import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ValorantMap, valorantMapResponse } from './models/valorant-map';
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/maps',
      config: this.config,
      responseSchema: z.array(valorantMapResponse),
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
   * Get a Valorant map by its ID
   * @param {number} valorantMapId - ID of the Valorant map
   * @returns {Promise<HttpResponse<ValorantMap>>} A Valorant map
   */
  async getValorantMapsValorantMapId(
    valorantMapId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantMap>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/maps/{valorant_map_id}',
      config: this.config,
      responseSchema: valorantMapResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_map_id', valorantMapId);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/versions/all/maps',
      config: this.config,
      responseSchema: z.array(valorantMapResponse),
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/versions/{valorant_version_name}/maps',
      config: this.config,
      responseSchema: z.array(valorantMapResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_version_name', valorantVersionName);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}