import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { NonDeletionIncident, nonDeletionIncidentResponse } from './models/non-deletion-incident';
import { GetAdditionsParams, GetChangesParams, GetDeletionsParams, GetIncidentsParams } from './request-params';
import { Incident, incidentResponse } from './models/incident';
import { DeletionIncident, deletionIncidentResponse } from './models/deletion-incident';

export class IncidentsService extends BaseService {
  /**
   * Get the latest additions. <br/> <br/>This endpoint only shows unchanged objects.
   * @param {FilterOverAdditionIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverAdditionIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<NonDeletionIncident[]>>} A list of created entities
   */
  async getAdditions(
    params?: GetAdditionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<NonDeletionIncident[]>> {
    const request = new Request({
      method: 'GET',
      path: '/additions',
      config: this.config,
      responseSchema: z.array(nonDeletionIncidentResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    request.addQueryParam('type', params?.type);
    request.addQueryParam('since', params?.since);
    request.addQueryParam('videogame', params?.videogame);
    return this.client.call(request);
  }

  /**
   * Get the latest updates. <br/> <br/>This endpoint only provides the latest change for an object. It does not keep track of previous changes.
   * @param {FilterOverChangeIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverChangeIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<Incident[]>>} A list of changed entities
   */
  async getChanges(params?: GetChangesParams, requestConfig?: RequestConfig): Promise<HttpResponse<Incident[]>> {
    const request = new Request({
      method: 'GET',
      path: '/changes',
      config: this.config,
      responseSchema: z.array(incidentResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    request.addQueryParam('type', params?.type);
    request.addQueryParam('since', params?.since);
    request.addQueryParam('videogame', params?.videogame);
    return this.client.call(request);
  }

  /**
   * Get the latest deleted documents
   * @param {FilterOverDeletionIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverDeletionIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<DeletionIncident[]>>} A list of deleted entities
   */
  async getDeletions(
    params?: GetDeletionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeletionIncident[]>> {
    const request = new Request({
      method: 'GET',
      path: '/deletions',
      config: this.config,
      responseSchema: z.array(deletionIncidentResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    request.addQueryParam('type', params?.type);
    request.addQueryParam('since', params?.since);
    request.addQueryParam('videogame', params?.videogame);
    return this.client.call(request);
  }

  /**
   *  Get the latest updates and additions. <br/> <br/>This endpoint only provides the latest incident for an object. It does not keep track of previous incidents.
   * @param {FilterOverIncidents} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverIncidents} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @param {any[]} [type] - Filter by result type(s)
   * @param {string} [since] - Filter out older results
   * @param {VideogameIdOrSlug[]} [videogame] - Filter by videogame(s)
   * @returns {Promise<HttpResponse<Incident[]>>} A list of created or updated entities
   */
  async getIncidents(params?: GetIncidentsParams, requestConfig?: RequestConfig): Promise<HttpResponse<Incident[]>> {
    const request = new Request({
      method: 'GET',
      path: '/incidents',
      config: this.config,
      responseSchema: z.array(incidentResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    request.addQueryParam('type', params?.type);
    request.addQueryParam('since', params?.since);
    request.addQueryParam('videogame', params?.videogame);
    return this.client.call(request);
  }
}
