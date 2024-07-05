import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Live, liveResponse } from './models';
import { GetLivesParams } from './request-params';

export class LivesService extends BaseService {
  /**
   * List currently running live matches, available from pandascore with live websocket data.
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Live[]>>} A list of games being played or about to be played
   */
  async getLives(
    params?: GetLivesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Live[]>> {
    const path = '/lives';
    const options: any = {
      responseSchema: z.array(liveResponse),
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
}
