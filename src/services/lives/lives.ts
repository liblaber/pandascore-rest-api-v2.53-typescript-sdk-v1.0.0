import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Live, liveResponse } from './models/live';
import { GetLivesParams } from './request-params';

export class LivesService extends BaseService {
  /**
   * List currently running live matches, available from pandascore with live websocket data.
   * @param {Page} [page] - Pagination in the form of `page=2` or `page[size]=30&page[number]=2`
   * @param {number} [perPage] - Equivalent to `page[size]`
   * @returns {Promise<HttpResponse<Live[]>>} A list of games being played or about to be played
   */
  async getLives(params?: GetLivesParams, requestConfig?: RequestConfig): Promise<HttpResponse<Live[]>> {
    const request = new Request({
      method: 'GET',
      path: '/lives',
      config: this.config,
      responseSchema: z.array(liveResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('page', params?.page);
    request.addQueryParam('per_page', params?.perPage);
    return this.client.call(request);
  }
}
