import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  League,
  Serie,
  ShortTournament,
  Videogame,
  VideogameIdOrSlug,
  leagueResponse,
  serieResponse,
  shortTournamentResponse,
  videogameResponse,
} from '../common';
import {
  GetVideogamesParams,
  GetVideogamesVideogameIdOrSlugLeaguesParams,
  GetVideogamesVideogameIdOrSlugSeriesParams,
  GetVideogamesVideogameIdOrSlugTitlesParams,
  GetVideogamesVideogameIdOrSlugTournamentsParams,
  GetVideogamesVideogameIdOrSlugVersionsParams,
} from './request-params';
import {
  ShortVideogameTitle,
  ShortVideogameVersion,
  shortVideogameTitleResponse,
  shortVideogameVersionResponse,
} from './models';

export class VideogamesService extends BaseService {
  /**
   * List videogames
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Videogame[]>>} A list of videogames
   */
  async getVideogames(
    params?: GetVideogamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Videogame[]>> {
    const path = '/videogames';
    const options: any = {
      responseSchema: z.array(videogameResponse),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath('/videogames/{videogame_id_or_slug}', {
      videogame_id_or_slug: videogameIdOrSlug,
    });
    const options: any = {
      responseSchema: videogameResponse,
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
    const path = this.client.buildPath('/videogames/{videogame_id_or_slug}/leagues', {
      videogame_id_or_slug: videogameIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(leagueResponse),
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
    const path = this.client.buildPath('/videogames/{videogame_id_or_slug}/series', {
      videogame_id_or_slug: videogameIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(serieResponse),
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
    const path = this.client.buildPath('/videogames/{videogame_id_or_slug}/titles', {
      videogame_id_or_slug: videogameIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(shortVideogameTitleResponse),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    return this.client.get(path, options);
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
    const path = this.client.buildPath('/videogames/{videogame_id_or_slug}/tournaments', {
      videogame_id_or_slug: videogameIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(shortTournamentResponse),
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
    const path = this.client.buildPath('/videogames/{videogame_id_or_slug}/versions', {
      videogame_id_or_slug: videogameIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(shortVideogameVersionResponse),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.page) {
      options.queryParams['page'] = params?.page;
    }
    if (params?.perPage) {
      options.queryParams['per_page'] = params?.perPage;
    }
    return this.client.get(path, options);
  }
}
