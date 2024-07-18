import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { CsgoGame, csgoGameResponse } from './models/csgo-game';
import { CsgoEvent, csgoEventResponse } from './models/csgo-event';
import {
  GetCsgoGamesCsgoGameIdEventsParams,
  GetCsgoGamesCsgoGameIdRoundsParams,
  GetCsgoMatchesMatchIdOrSlugGamesParams,
} from './request-params';
import { CsgoFullRound, csgoFullRoundResponse } from './models/csgo-full-round';
import { MatchIdOrSlug } from '../common';

export class CounterStrikeGamesService extends BaseService {
  /**
   * Get a single Counter-Strike game by ID
   * @param {number} csgoGameId - A Counter-Strike game ID
   * @returns {Promise<HttpResponse<CsgoGame>>} A Counter-Strike game
   */
  async getCsgoGamesCsgoGameId(csgoGameId: number, requestConfig?: RequestConfig): Promise<HttpResponse<CsgoGame>> {
    const request = new Request({
      method: 'GET',
      path: '/csgo/games/{csgo_game_id}',
      config: this.config,
      responseSchema: csgoGameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('csgo_game_id', csgoGameId);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/csgo/games/{csgo_game_id}/events',
      config: this.config,
      responseSchema: z.array(csgoEventResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('csgo_game_id', csgoGameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/csgo/games/{csgo_game_id}/rounds',
      config: this.config,
      responseSchema: z.array(csgoFullRoundResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('csgo_game_id', csgoGameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/csgo/matches/{match_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(csgoGameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('match_id_or_slug', matchIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}
