import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  DeletionIncident,
  Incident,
  NonDeletionIncident,
  deletionIncidentResponse,
  incidentResponse,
  nonDeletionIncidentResponse,
} from '../common';
import {
  GetAdditionsParams,
  GetChangesParams,
  GetDeletionsParams,
  GetIncidentsParams,
} from './request-params';

export class IncidentsService extends BaseService {
  /**
   * Get the latest additions. <br/> <br/>This endpoint only shows unchanged objects.
   * @param {FilterOverAdditionIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverAdditionIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type_] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<NonDeletionIncident[]>>} A list of created entities
   */
  async getAdditions(
    params?: GetAdditionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<NonDeletionIncident[]>> {
    const path = '/additions';
    const options: any = {
      responseSchema: z.array(nonDeletionIncidentResponse),
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
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    if (params?.type_) {
      options.queryParams['type'] = params?.type_;
    }
    if (params?.since) {
      options.queryParams['since'] = params?.since;
    }
    if (params?.videogame) {
      options.queryParams['videogame'] = params?.videogame;
    }
    return this.client.get(path, options);
  }

  /**
   * Get the latest updates. <br/> <br/>This endpoint only provides the latest change for an object. It does not keep track of previous changes.
   * @param {FilterOverChangeIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverChangeIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type_] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<Incident[]>>} A list of changed entities
   */
  async getChanges(
    params?: GetChangesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Incident[]>> {
    const path = '/changes';
    const options: any = {
      responseSchema: z.array(incidentResponse),
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
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    if (params?.type_) {
      options.queryParams['type'] = params?.type_;
    }
    if (params?.since) {
      options.queryParams['since'] = params?.since;
    }
    if (params?.videogame) {
      options.queryParams['videogame'] = params?.videogame;
    }
    return this.client.get(path, options);
  }

  /**
   * Get the latest deleted documents
   * @param {FilterOverDeletionIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverDeletionIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type_] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<DeletionIncident[]>>} A list of deleted entities
   */
  async getDeletions(
    params?: GetDeletionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeletionIncident[]>> {
    const path = '/deletions';
    const options: any = {
      responseSchema: z.array(deletionIncidentResponse),
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
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    if (params?.type_) {
      options.queryParams['type'] = params?.type_;
    }
    if (params?.since) {
      options.queryParams['since'] = params?.since;
    }
    if (params?.videogame) {
      options.queryParams['videogame'] = params?.videogame;
    }
    return this.client.get(path, options);
  }

  /**
   *  Get the latest updates and additions. <br/> <br/>This endpoint only provides the latest incident for an object. It does not keep track of previous incidents.
   * @param {FilterOverIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type_] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<Incident[]>>} A list of created or updated entities
   */
  async getIncidents(
    params?: GetIncidentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Incident[]>> {
    const path = '/incidents';
    const options: any = {
      responseSchema: z.array(incidentResponse),
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
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    if (params?.type_) {
      options.queryParams['type'] = params?.type_;
    }
    if (params?.since) {
      options.queryParams['since'] = params?.since;
    }
    if (params?.videogame) {
      options.queryParams['videogame'] = params?.videogame;
    }
    return this.client.get(path, options);
  }
}
