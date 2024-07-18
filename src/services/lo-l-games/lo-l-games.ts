import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { LoLGame, loLGameResponse } from './models/lo-l-game';
import { LoLGameEvent, loLGameEventResponse } from './models/lo-l-game-event';
import {
  GetLolGamesLolGameIdEventsParams,
  GetLolGamesLolGameIdFramesParams,
  GetLolMatchesMatchIdOrSlugGamesParams,
  GetLolTeamsTeamIdOrSlugGamesParams,
} from './request-params';
import { LoLGameFrame, loLGameFrameResponse } from './models/lo-l-game-frame';
import { MatchIdOrSlug, TeamIdOrSlug } from '../common';
import { LoLTeamLastGame, loLTeamLastGameResponse } from '../common/lo-l-team-last-game';

export class LoLGamesService extends BaseService {
  /**
   * Get a single League of Legends game by ID
   * @param {number} lolGameId - A LoL game ID
   * @returns {Promise<HttpResponse<LoLGame>>} A League-of-Legends game
   */
  async getLolGamesLolGameId(lolGameId: number, requestConfig?: RequestConfig): Promise<HttpResponse<LoLGame>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/games/{lol_game_id}',
      config: this.config,
      responseSchema: loLGameResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_game_id', lolGameId);
    return this.client.call(request);
  }

  /**
   * List events for a given League of Legends game
   * @param {number} lolGameId - A LoL game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLGameEvent[]>>} A list of League-of-Legends game events
   */
  async getLolGamesLolGameIdEvents(
    lolGameId: number,
    params?: GetLolGamesLolGameIdEventsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLGameEvent[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/games/{lol_game_id}/events',
      config: this.config,
      responseSchema: z.array(loLGameEventResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_game_id', lolGameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List frames for a given League of Legends game
   * @param {number} lolGameId - A LoL game ID
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLGameFrame[]>>} A list of League-of-Legends game frames
   */
  async getLolGamesLolGameIdFrames(
    lolGameId: number,
    params?: GetLolGamesLolGameIdFramesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLGameFrame[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/games/{lol_game_id}/frames',
      config: this.config,
      responseSchema: z.array(loLGameFrameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lol_game_id', lolGameId);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }

  /**
   * List games for a given League of Legends match
   * @param {MatchIdOrSlug} matchIdOrSlug - A match ID or slug
   * @param {FilterOverLoLGames} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLGames} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLGames} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLGame[]>>} A list of League-of-Legends games
   */
  async getLolMatchesMatchIdOrSlugGames(
    matchIdOrSlug: MatchIdOrSlug,
    params?: GetLolMatchesMatchIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLGame[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/matches/{match_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(loLGameResponse),
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

  /**
   * List finished games for a given League of Legends team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {FilterOverLoLTeamLastGames} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLoLTeamLastGames} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLoLTeamLastGames} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<LoLTeamLastGame[]>>} A list of League-of-Legends games
   */
  async getLolTeamsTeamIdOrSlugGames(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetLolTeamsTeamIdOrSlugGamesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLTeamLastGame[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol/teams/{team_id_or_slug}/games',
      config: this.config,
      responseSchema: z.array(loLTeamLastGameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('team_id_or_slug', teamIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}