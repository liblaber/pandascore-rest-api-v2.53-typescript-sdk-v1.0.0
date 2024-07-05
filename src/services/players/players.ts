import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  League,
  Match,
  Player,
  PlayerIdOrSlug,
  Serie,
  ShortTournament,
  leagueResponse,
  matchResponse,
  playerResponse,
  serieResponse,
  shortTournamentResponse,
} from '../common';
import {
  GetPlayersParams,
  GetPlayersPlayerIdOrSlugLeaguesParams,
  GetPlayersPlayerIdOrSlugMatchesParams,
  GetPlayersPlayerIdOrSlugSeriesParams,
  GetPlayersPlayerIdOrSlugTournamentsParams,
} from './request-params';

export class PlayersService extends BaseService {
  /**
   * List players
   * @param {FilterOverPlayers} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverPlayers} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverPlayers} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Player[]>>} A list of players
   */
  async getPlayers(
    params?: GetPlayersParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Player[]>> {
    const path = '/players';
    const options: any = {
      responseSchema: z.array(playerResponse),
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
   * Get a single player by ID or by slug
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @returns {Promise<HttpResponse<Player>>} A player
   */
  async getPlayersPlayerIdOrSlug(
    playerIdOrSlug: PlayerIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Player>> {
    const path = this.client.buildPath('/players/{player_id_or_slug}', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: playerResponse,
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
   * List leagues for the given player. Only leagues from the player's current videogame.
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {FilterOverLeagues} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLeagues} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLeagues} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<League[]>>} A list of leagues
   */
  async getPlayersPlayerIdOrSlugLeagues(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetPlayersPlayerIdOrSlugLeaguesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<League[]>> {
    const path = this.client.buildPath('/players/{player_id_or_slug}/leagues', {
      player_id_or_slug: playerIdOrSlug,
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
   * List matches for the given player. Only matches from the player's current videogame.
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {FilterOverMatches} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverMatches} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverMatches} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Match[]>>} A list of matches of any e-sport
   */
  async getPlayersPlayerIdOrSlugMatches(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetPlayersPlayerIdOrSlugMatchesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match[]>> {
    const path = this.client.buildPath('/players/{player_id_or_slug}/matches', {
      player_id_or_slug: playerIdOrSlug,
    });
    const options: any = {
      responseSchema: z.array(matchResponse),
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
   * List series for the given player. Only series from the player's current videogame.
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {FilterOverSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of series
   */
  async getPlayersPlayerIdOrSlugSeries(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetPlayersPlayerIdOrSlugSeriesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const path = this.client.buildPath('/players/{player_id_or_slug}/series', {
      player_id_or_slug: playerIdOrSlug,
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
   * List tournaments for the given player. Only tournaments from the player's current videogame.
   * @param {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug
   * @param {FilterOverShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of tournaments
   */
  async getPlayersPlayerIdOrSlugTournaments(
    playerIdOrSlug: PlayerIdOrSlug,
    params?: GetPlayersPlayerIdOrSlugTournamentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const path = this.client.buildPath('/players/{player_id_or_slug}/tournaments', {
      player_id_or_slug: playerIdOrSlug,
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
}
