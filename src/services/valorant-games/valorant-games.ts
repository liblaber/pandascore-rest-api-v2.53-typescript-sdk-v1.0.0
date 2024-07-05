import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { MatchIdOrSlug, ValorantGame, valorantGameResponse } from '../common';
import {
  ValorantFullRound,
  ValorantGameEvent,
  valorantFullRoundResponse,
  valorantGameEventResponse,
} from './models';
import {
  GetValorantGamesValorantGameIdEventsParams,
  GetValorantGamesValorantGameIdRoundsParams,
  GetValorantMatchesMatchIdOrSlugGamesParams,
} from './request-params';

export class ValorantGamesService extends BaseService {
  /**
   * Get a single Valorant game by ID
   * @param {number} valorantGameId - A Valorant game ID
   * @returns {Promise<HttpResponse<ValorantGame>>} A Valorant game
   */
  async getValorantGamesValorantGameId(
    valorantGameId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantGame>> {
    const path = this.client.buildPath('/valorant/games/{valorant_game_id}', {
      valorant_game_id: valorantGameId,
    });
    const options: any = {
      responseSchema: valorantGameResponse,
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
   * List events for a given Valorant game
   * @param {number} valorantGameId - A Valorant game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantGameEvent[]>>} A list of Valorant game events
   */
  async getValorantGamesValorantGameIdEvents(
    valorantGameId: number,
    params?: GetValorantGamesValorantGameIdEventsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantGameEvent[]>> {
    const path = this.client.buildPath('/valorant/games/{valorant_game_id}/events', {
      valorant_game_id: valorantGameId,
    });
    const options: any = {
      responseSchema: z.array(valorantGameEventResponse),
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
   * List rounds in a Valorant game
   * @param {number} valorantGameId - A Valorant game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantFullRound[]>>} A list of Valorant game rounds
   */
  async getValorantGamesValorantGameIdRounds(
    valorantGameId: number,
    params?: GetValorantGamesValorantGameIdRoundsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantFullRound[]>> {
    const path = this.client.buildPath('/valorant/games/{valorant_game_id}/rounds', {
      valorant_game_id: valorantGameId,
    });
    const options: any = {
      responseSchema: z.array(valorantFullRoundResponse),
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
   * List games for a given Valorant match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {FilterOverValorantGames} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverValorantGames} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverValorantGames} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ValorantGame[]>>} A list of Valorant games
   */
  async getValorantMatchesMatchIdOrSlugGames(
    matchIdOrSlug: MatchIdOrSlug,
    params?: GetValorantMatchesMatchIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ValorantGame[]>> {
    const path = this.client.buildPath('/valorant/matches/{match_id_or_slug}/games', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(valorantGameResponse),
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
