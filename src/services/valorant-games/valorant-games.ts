import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ValorantGame, valorantGameResponse } from './models/valorant-game';
import { ValorantGameEvent, valorantGameEventResponse } from './models/valorant-game-event';
import {
  GetValorantGamesValorantGameIdEventsParams,
  GetValorantGamesValorantGameIdRoundsParams,
  GetValorantMatchesMatchIdOrSlugGamesParams,
} from './request-params';
import { ValorantFullRound, valorantFullRoundResponse } from './models/valorant-full-round';
import { MatchIdOrSlug } from '../common';

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
    const request = new Request({
      method: 'GET',
      path: '/valorant/games/{valorant_game_id}',
      config: this.config,
      responseSchema: valorantGameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_game_id', valorantGameId);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/games/{valorant_game_id}/events',
      config: this.config,
      responseSchema: z.array(valorantGameEventResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_game_id', valorantGameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/games/{valorant_game_id}/rounds',
      config: this.config,
      responseSchema: z.array(valorantFullRoundResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('valorant_game_id', valorantGameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/valorant/matches/{match_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(valorantGameResponse),
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
