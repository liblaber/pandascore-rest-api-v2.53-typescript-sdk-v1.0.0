import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ValorantAgent, valorantAgentResponse } from './models/valorant-agent';
import {
  GetValorantAgentsParams,
  GetValorantVersionsAllAgentsParams,
  GetValorantVersionsValorantVersionNameAgentsParams,
} from './request-params';

export class ValorantAgentsService extends BaseService {
  /**
   * List agents
   * @param {FilterOverValorantAgents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantAgents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantAgents} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantAgent[]>>} A list of Valorant agents
   */
  async getValorantAgents(
    params?: GetValorantAgentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAgent[]>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/agents',
      config: this.config,
      responseSchema: z.array(valorantAgentResponse),
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
   * Get a Valorant agent by its ID
   * @param {number} valorantAgentId - ID of the Valorant agent
   * @returns {Promise<HttpResponse<ValorantAgent>>} A Valorant agent
   */
  async getValorantAgentsValorantAgentId(
    valorantAgentId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAgent>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/agents/{valorant_agent_id}',
      config: this.config,
      responseSchema: valorantAgentResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_agent_id', valorantAgentId);
    return this.client.call(request);
  }

  /**
   * Deprecated. Equivalent route: [/valorant/agents?filter[videogame_version]=all](/reference/get_valorant_agents)
   * @param {FilterOverValorantAgents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantAgents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantAgents} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantAgent[]>>} A list of Valorant agents
   */
  async getValorantVersionsAllAgents(
    params?: GetValorantVersionsAllAgentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAgent[]>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/versions/all/agents',
      config: this.config,
      responseSchema: z.array(valorantAgentResponse),
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
   * Deprecated. Equivalent route: [/valorant/agents?filter[videogame_version]={valorant_version_name}](/reference/get_valorant_agents)
   * @param {string} valorantVersionName - A video game version
   * @param {FilterOverValorantAgents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantAgents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantAgents} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantAgent[]>>} A list of Valorant agents
   */
  async getValorantVersionsValorantVersionNameAgents(
    valorantVersionName: string,
    params?: GetValorantVersionsValorantVersionNameAgentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAgent[]>> {
    const request = new Request({
      method: 'GET',
      path: '/valorant/versions/{valorant_version_name}/agents',
      config: this.config,
      responseSchema: z.array(valorantAgentResponse),
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