import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { ValorantAgent, valorantAgentResponse } from '../common';
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
    const path = '/valorant/agents';
    const options: any = {
      responseSchema: z.array(valorantAgentResponse),
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
   * Get a Valorant agent by its ID
   * @param {number} valorantAgentId - ID of the Valorant agent
   * @returns {Promise<HttpResponse<ValorantAgent>>} A Valorant agent
   */
  async getValorantAgentsValorantAgentId(
    valorantAgentId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantAgent>> {
    const path = this.client.buildPath('/valorant/agents/{valorant_agent_id}', {
      valorant_agent_id: valorantAgentId,
    });
    const options: any = {
      responseSchema: valorantAgentResponse,
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
    const path = '/valorant/versions/all/agents';
    const options: any = {
      responseSchema: z.array(valorantAgentResponse),
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
    const path = this.client.buildPath('/valorant/versions/{valorant_version_name}/agents', {
      valorant_version_name: valorantVersionName,
    });
    const options: any = {
      responseSchema: z.array(valorantAgentResponse),
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
