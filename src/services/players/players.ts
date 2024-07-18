import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Player, playerResponse } from '../common/player';
import {
  GetPlayersParams,
  GetPlayersPlayerIdOrSlugLeaguesParams,
  GetPlayersPlayerIdOrSlugMatchesParams,
  GetPlayersPlayerIdOrSlugSeriesParams,
  GetPlayersPlayerIdOrSlugTournamentsParams,
} from './request-params';
import { PlayerIdOrSlug } from '../common';
import { League, leagueResponse } from '../common/league';
import { Match, matchResponse } from '../common/match';
import { Serie, serieResponse } from '../common/serie';
import { ShortTournament, shortTournamentResponse } from '../common/short-tournament';

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
  async getPlayers(params?: GetPlayersParams, requestConfig?: RequestConfig): Promise<HttpResponse<Player[]>> {
    const request = new Request({
      method: 'GET',
      path: '/players',
      config: this.config,
      responseSchema: z.array(playerResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/players/{player_id_or_slug}',
      config: this.config,
      responseSchema: playerResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/players/{player_id_or_slug}/leagues',
      config: this.config,
      responseSchema: z.array(leagueResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/players/{player_id_or_slug}/matches',
      config: this.config,
      responseSchema: z.array(matchResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/players/{player_id_or_slug}/series',
      config: this.config,
      responseSchema: z.array(serieResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/players/{player_id_or_slug}/tournaments',
      config: this.config,
      responseSchema: z.array(shortTournamentResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('player_id_or_slug', playerIdOrSlug);
    request.addQueryParam('filter', params?.filter);
    request.addQueryParam('range', params?.range);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('search', params?.search);
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}
