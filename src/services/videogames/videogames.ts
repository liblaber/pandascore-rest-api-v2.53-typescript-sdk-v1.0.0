import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Videogame, videogameResponse } from './models/videogame';
import {
  GetVideogamesParams,
  GetVideogamesVideogameIdOrSlugLeaguesParams,
  GetVideogamesVideogameIdOrSlugSeriesParams,
  GetVideogamesVideogameIdOrSlugTitlesParams,
  GetVideogamesVideogameIdOrSlugTournamentsParams,
  GetVideogamesVideogameIdOrSlugVersionsParams,
} from './request-params';
import { VideogameIdOrSlug } from '../common';
import { League, leagueResponse } from '../common/league';
import { Serie, serieResponse } from '../common/serie';
import { ShortVideogameTitle, shortVideogameTitleResponse } from './models/short-videogame-title';
import { ShortTournament, shortTournamentResponse } from '../common/short-tournament';
import { ShortVideogameVersion, shortVideogameVersionResponse } from './models/short-videogame-version';

export class VideogamesService extends BaseService {
  /**
   * List videogames
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Videogame[]>>} A list of videogames
   */
  async getVideogames(params?: GetVideogamesParams, requestConfig?: RequestConfig): Promise<HttpResponse<Videogame[]>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames',
      config: this.config,
      responseSchema: z.array(videogameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * Get a single videogame by ID or by slug
   * @param {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug
   * @returns {Promise<HttpResponse<Videogame>>} A videogame
   */
  async getVideogamesVideogameIdOrSlug(
    videogameIdOrSlug: VideogameIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Videogame>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames/{videogame_id_or_slug}',
      config: this.config,
      responseSchema: videogameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('videogame_id_or_slug', videogameIdOrSlug);
    return this.client.call(request);
  }

  /**
   * List leagues for a given videogame
   * @param {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug
   * @param {FilterOverLeagues} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLeagues} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLeagues} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<League[]>>} A list of leagues
   */
  async getVideogamesVideogameIdOrSlugLeagues(
    videogameIdOrSlug: VideogameIdOrSlug,
    params?: GetVideogamesVideogameIdOrSlugLeaguesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<League[]>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames/{videogame_id_or_slug}/leagues',
      config: this.config,
      responseSchema: z.array(leagueResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('videogame_id_or_slug', videogameIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List series for the given videogame
   * @param {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug
   * @param {FilterOverSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of series
   */
  async getVideogamesVideogameIdOrSlugSeries(
    videogameIdOrSlug: VideogameIdOrSlug,
    params?: GetVideogamesVideogameIdOrSlugSeriesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames/{videogame_id_or_slug}/series',
      config: this.config,
      responseSchema: z.array(serieResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('videogame_id_or_slug', videogameIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List available titles for a given videogame
   * @param {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortVideogameTitle[]>>} A list of a videogame versions
   */
  async getVideogamesVideogameIdOrSlugTitles(
    videogameIdOrSlug: VideogameIdOrSlug,
    params?: GetVideogamesVideogameIdOrSlugTitlesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortVideogameTitle[]>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames/{videogame_id_or_slug}/titles',
      config: this.config,
      responseSchema: z.array(shortVideogameTitleResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('videogame_id_or_slug', videogameIdOrSlug);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List tournaments of the given videogame
   * @param {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug
   * @param {FilterOverShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of tournaments
   */
  async getVideogamesVideogameIdOrSlugTournaments(
    videogameIdOrSlug: VideogameIdOrSlug,
    params?: GetVideogamesVideogameIdOrSlugTournamentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames/{videogame_id_or_slug}/tournaments',
      config: this.config,
      responseSchema: z.array(shortTournamentResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('videogame_id_or_slug', videogameIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List available versions for a given videogame
   * @param {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortVideogameVersion[]>>} A list of a videogame's versions
   */
  async getVideogamesVideogameIdOrSlugVersions(
    videogameIdOrSlug: VideogameIdOrSlug,
    params?: GetVideogamesVideogameIdOrSlugVersionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortVideogameVersion[]>> {
    const request = new Request({
      method: 'GET',
      path: '/videogames/{videogame_id_or_slug}/versions',
      config: this.config,
      responseSchema: z.array(shortVideogameVersionResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('videogame_id_or_slug', videogameIdOrSlug);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}
