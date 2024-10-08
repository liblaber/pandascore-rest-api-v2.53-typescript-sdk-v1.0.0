// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Videogame, videogameResponse } from './models/videogame';
import {
  GetVideogamesParams,
  GetVideogamesVideogameIdOrSlugLeaguesParams,
  GetVideogamesVideogameIdOrSlugSeriesParams,
  GetVideogamesVideogameIdOrSlugTitlesParams,
  GetVideogamesVideogameIdOrSlugTournamentsParams,
  GetVideogamesVideogameIdOrSlugVersionsParams,
} from './request-params';
import { VideogameIdOrSlug } from '../common/videogame-id-or-slug';
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
    const request = new RequestBuilder<Videogame[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(videogameResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<Videogame[]>(request);
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
    const request = new RequestBuilder<Videogame>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames/{videogame_id_or_slug}')
      .setRequestSchema(z.any())
      .setResponseSchema(videogameResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'videogame_id_or_slug',
        value: videogameIdOrSlug,
      })
      .build();
    return this.client.call<Videogame>(request);
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
    const request = new RequestBuilder<League[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames/{videogame_id_or_slug}/leagues')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(leagueResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'videogame_id_or_slug',
        value: videogameIdOrSlug,
      })
      .addQueryParam({
        key: 'filter',
        value: params?.filter,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'range',
        value: params?.range,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'search',
        value: params?.search,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<League[]>(request);
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
    const request = new RequestBuilder<Serie[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames/{videogame_id_or_slug}/series')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(serieResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'videogame_id_or_slug',
        value: videogameIdOrSlug,
      })
      .addQueryParam({
        key: 'filter',
        value: params?.filter,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'range',
        value: params?.range,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'search',
        value: params?.search,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<Serie[]>(request);
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
    const request = new RequestBuilder<ShortVideogameTitle[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames/{videogame_id_or_slug}/titles')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortVideogameTitleResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'videogame_id_or_slug',
        value: videogameIdOrSlug,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<ShortVideogameTitle[]>(request);
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
    const request = new RequestBuilder<ShortTournament[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames/{videogame_id_or_slug}/tournaments')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortTournamentResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'videogame_id_or_slug',
        value: videogameIdOrSlug,
      })
      .addQueryParam({
        key: 'filter',
        value: params?.filter,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'range',
        value: params?.range,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'search',
        value: params?.search,
        style: SerializationStyle.DEEP_OBJECT,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<ShortTournament[]>(request);
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
    const request = new RequestBuilder<ShortVideogameVersion[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/videogames/{videogame_id_or_slug}/versions')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(shortVideogameVersionResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'videogame_id_or_slug',
        value: videogameIdOrSlug,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'per_page',
        value: params?.perPage,
      })
      .build();
    return this.client.call<ShortVideogameVersion[]>(request);
  }
}
