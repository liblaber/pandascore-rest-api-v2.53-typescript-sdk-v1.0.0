import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Team, teamResponse } from '../common/team';
import { GetLolWildRiftTeamsParams } from './request-params';

export class LoLWildRiftTeamsService extends BaseService {
  /**
   * List teams for the LoL Wild Rift videogame
   * @param {FilterOverLolWildRiftTeams} [filter] - Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter).
   * @param {RangeOverLolWildRiftTeams} [range] - Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).
   * @param {any[]} [sort] - Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).
   * @param {SearchOverLolWildRiftTeams} [search] - Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Team[]>>} A list of LoL Wild Rift teams
   */
  async getLolWildRiftTeams(
    params?: GetLolWildRiftTeamsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Team[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lol-wild-rift/teams',
      config: this.config,
      responseSchema: z.array(teamResponse),
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
}
