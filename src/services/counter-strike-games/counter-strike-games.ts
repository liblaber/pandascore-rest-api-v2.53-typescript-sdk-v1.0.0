import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { CsgoGame, MatchIdOrSlug, csgoGameResponse } from '../common';
import { CsgoEvent, CsgoFullRound, csgoEventResponse, csgoFullRoundResponse } from './models';
import {
  GetCsgoGamesCsgoGameIdEventsParams,
  GetCsgoGamesCsgoGameIdRoundsParams,
  GetCsgoMatchesMatchIdOrSlugGamesParams,
} from './request-params';

export class CounterStrikeGamesService extends BaseService {
  /**
   * Get a single Counter-Strike game by ID
   * @param {number} csgoGameId - A Counter-Strike game ID
   * @returns {Promise<HttpResponse<CsgoGame>>} A Counter-Strike game
   */
  async getCsgoGamesCsgoGameId(
    csgoGameId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoGame>> {
    const path = this.client.buildPath('/csgo/games/{csgo_game_id}', { csgo_game_id: csgoGameId });
    const options: any = {
      responseSchema: csgoGameResponse,
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
   * List events for a given Counter-Strike game
   * @param {number} csgoGameId - A Counter-Strike game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<CsgoEvent[]>>} A list of Counter-Strike game events
   */
  async getCsgoGamesCsgoGameIdEvents(
    csgoGameId: number,
    params?: GetCsgoGamesCsgoGameIdEventsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoEvent[]>> {
    const path = this.client.buildPath('/csgo/games/{csgo_game_id}/events', {
      csgo_game_id: csgoGameId,
    });
    const options: any = {
      responseSchema: z.array(csgoEventResponse),
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
   * List rounds in a Counter-Strike game
   * @param {number} csgoGameId - A Counter-Strike game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<CsgoFullRound[]>>} List rounds in a Counter-Strike game
   */
  async getCsgoGamesCsgoGameIdRounds(
    csgoGameId: number,
    params?: GetCsgoGamesCsgoGameIdRoundsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoFullRound[]>> {
    const path = this.client.buildPath('/csgo/games/{csgo_game_id}/rounds', {
      csgo_game_id: csgoGameId,
    });
    const options: any = {
      responseSchema: z.array(csgoFullRoundResponse),
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
   * List games for a given Counter-Strike match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {FilterOverCsgoGames} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverCsgoGames} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverCsgoGames} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<CsgoGame[]>>} A list of Counter-Strike games
   */
  async getCsgoMatchesMatchIdOrSlugGames(
    matchIdOrSlug: MatchIdOrSlug,
    params?: GetCsgoMatchesMatchIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CsgoGame[]>> {
    const path = this.client.buildPath('/csgo/matches/{match_id_or_slug}/games', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(csgoGameResponse),
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
