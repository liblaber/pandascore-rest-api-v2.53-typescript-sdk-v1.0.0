import { HttpError } from '../error';
import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';

export class TerminatingHandler implements RequestHandler {
  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    const { url, requestInit } = request.getFetchArgs();
    const response = await fetch(url, requestInit);

    const metadata = {
      status: response.status,
      statusText: response.statusText,
      headers: this.getHeaders(response),
    };

    if (metadata.status >= 400) {
      throw new HttpError(metadata);
    }

    return {
      metadata,
      raw: await response.clone().arrayBuffer(),
    };
  }

  private getHeaders(response: Response): Record<string, string> {
    const headers: Record<string, string> = {};
    response.headers.forEach((value: string, key: string) => {
      headers[key] = value;
    });

    return headers;
  }

  private isErrorResponse(response: HttpResponse<unknown>): boolean {
    return response.metadata.status >= 400;
  }
}
