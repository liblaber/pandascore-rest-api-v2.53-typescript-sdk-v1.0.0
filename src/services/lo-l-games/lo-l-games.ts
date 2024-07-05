import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  LoLGame,
  LoLTeamLastGame,
  MatchIdOrSlug,
  TeamIdOrSlug,
  loLGameResponse,
  loLTeamLastGameResponse,
} from '../common';
import { LoLGameEvent, LoLGameFrame, loLGameEventResponse, loLGameFrameResponse } from './models';
import {
  GetLolGamesLolGameIdEventsParams,
  GetLolGamesLolGameIdFramesParams,
  GetLolMatchesMatchIdOrSlugGamesParams,
  GetLolTeamsTeamIdOrSlugGamesParams,
} from './request-params';

export class LoLGamesService extends BaseService {
  /**
   * Get a single League of Legends game by ID
   * @param {number} lolGameId - A LoL game ID
   * @returns {Promise<HttpResponse<LoLGame>>} A League-of-Legends game
   */
  async getLolGamesLolGameId(
    lolGameId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LoLGame>> {
    const path = this.client.buildPath('/lol/games/{lol_game_id}', { lol_game_id: lolGameId });
    const options: any = {
      responseSchema: loLGameResponse,
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
    const path = this.client.buildPath('/lol/games/{lol_game_id}/events', {
      lol_game_id: lolGameId,
    });
    const options: any = {
      responseSchema: z.array(loLGameEventResponse),
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
    const path = this.client.buildPath('/lol/games/{lol_game_id}/frames', {
      lol_game_id: lolGameId,
    });
    const options: any = {
      responseSchema: z.array(loLGameFrameResponse),
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
    const path = this.client.buildPath('/lol/matches/{match_id_or_slug}/games', {
      match_id_or_slug: matchIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(loLGameResponse),
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
    const path = this.client.buildPath('/lol/teams/{team_id_or_slug}/games', {
      team_id_or_slug: teamIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(loLTeamLastGameResponse),
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
