import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ShortTournament, shortTournamentResponse } from '../common/short-tournament';
import {
  GetStarcraft2TournamentsParams,
  GetStarcraft2TournamentsPastParams,
  GetStarcraft2TournamentsRunningParams,
  GetStarcraft2TournamentsUpcomingParams,
} from './request-params';

export class StarCraft2TournamentsService extends BaseService {
  /**
   * List tournaments for the StarCraft 2 videogame
   * @param {FilterOverStarcraft2ShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverStarcraft2ShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverStarcraft2ShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of StarCraft 2 tournaments
   */
  async getStarcraft2Tournaments(
    params?: GetStarcraft2TournamentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new Request({
      method: 'GET',
      path: '/starcraft-2/tournaments',
      config: this.config,
      responseSchema: z.array(shortTournamentResponse),
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
   * List past StarCraft 2 tournaments
   * @param {FilterOverStarcraft2ShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverStarcraft2ShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverStarcraft2ShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of StarCraft 2 tournaments
   */
  async getStarcraft2TournamentsPast(
    params?: GetStarcraft2TournamentsPastParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new Request({
      method: 'GET',
      path: '/starcraft-2/tournaments/past',
      config: this.config,
      responseSchema: z.array(shortTournamentResponse),
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
   * List running StarCraft 2 tournaments
   * @param {FilterOverStarcraft2ShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverStarcraft2ShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverStarcraft2ShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of StarCraft 2 tournaments
   */
  async getStarcraft2TournamentsRunning(
    params?: GetStarcraft2TournamentsRunningParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new Request({
      method: 'GET',
      path: '/starcraft-2/tournaments/running',
      config: this.config,
      responseSchema: z.array(shortTournamentResponse),
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
   * List upcoming StarCraft 2 tournaments
   * @param {FilterOverStarcraft2ShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverStarcraft2ShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverStarcraft2ShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of StarCraft 2 tournaments
   */
  async getStarcraft2TournamentsUpcoming(
    params?: GetStarcraft2TournamentsUpcomingParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new Request({
      method: 'GET',
      path: '/starcraft-2/tournaments/upcoming',
      config: this.config,
      responseSchema: z.array(shortTournamentResponse),
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
}