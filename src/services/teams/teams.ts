import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  League,
  Match,
  Serie,
  ShortTournament,
  Team,
  TeamIdOrSlug,
  leagueResponse,
  matchResponse,
  serieResponse,
  shortTournamentResponse,
  teamResponse,
} from '../common';
import {
  GetTeamsParams,
  GetTeamsTeamIdOrSlugLeaguesParams,
  GetTeamsTeamIdOrSlugMatchesParams,
  GetTeamsTeamIdOrSlugSeriesParams,
  GetTeamsTeamIdOrSlugTournamentsParams,
} from './request-params';

export class TeamsService extends BaseService {
  /**
   * List teams
   * @param {FilterOverTeams} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverTeams} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverTeams} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Team[]>>} A list of teams
   */
  async getTeams(
    params?: GetTeamsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Team[]>> {
    const path = '/teams';
    const options: any = {
      responseSchema: z.array(teamResponse),
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
   * Get a single team by ID or by slug
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @returns {Promise<HttpResponse<Team>>} A team
   */
  async getTeamsTeamIdOrSlug(
    teamIdOrSlug: TeamIdOrSlug,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Team>> {
    const path = this.client.buildPath('/teams/{team_id_or_slug}', {
      team_id_or_slug: teamIdOrSlug,
    });
    const options: any = {
      responseSchema: teamResponse,
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
   * List leagues in which the given team was part of
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {FilterOverLeagues} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLeagues} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLeagues} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<League[]>>} A list of leagues
   */
  async getTeamsTeamIdOrSlugLeagues(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetTeamsTeamIdOrSlugLeaguesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<League[]>> {
    const path = this.client.buildPath('/teams/{team_id_or_slug}/leagues', {
      team_id_or_slug: teamIdOrSlug,
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
   * List matches for the given team
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {FilterOverMatches} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverMatches} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverMatches} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Match[]>>} A list of matches of any e-sport
   */
  async getTeamsTeamIdOrSlugMatches(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetTeamsTeamIdOrSlugMatchesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Match[]>> {
    const path = this.client.buildPath('/teams/{team_id_or_slug}/matches', {
      team_id_or_slug: teamIdOrSlug,
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
   * List series in which the given team was part of
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {FilterOverSeries} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverSeries} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverSeries} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Serie[]>>} A list of series
   */
  async getTeamsTeamIdOrSlugSeries(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetTeamsTeamIdOrSlugSeriesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Serie[]>> {
    const path = this.client.buildPath('/teams/{team_id_or_slug}/series', {
      team_id_or_slug: teamIdOrSlug,
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
   * List tournaments in which the given team was part of
   * @param {TeamIdOrSlug} teamIdOrSlug - A team ID or slug
   * @param {FilterOverShortTournaments} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverShortTournaments} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverShortTournaments} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<ShortTournament[]>>} A list of tournaments
   */
  async getTeamsTeamIdOrSlugTournaments(
    teamIdOrSlug: TeamIdOrSlug,
    params?: GetTeamsTeamIdOrSlugTournamentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ShortTournament[]>> {
    const path = this.client.buildPath('/teams/{team_id_or_slug}/tournaments', {
      team_id_or_slug: teamIdOrSlug,
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
