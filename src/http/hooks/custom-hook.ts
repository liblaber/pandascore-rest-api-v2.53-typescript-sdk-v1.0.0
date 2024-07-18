import { HttpMetadata } from '../types';
import { Hook } from './hook';
import { HttpRequest, HttpResponse, HttpError } from './hook';

export class CustomHook implements Hook {
  beforeRequest(request: HttpRequest): HttpRequest {
    return request;
  }

  afterResponse(request: HttpRequest, response: HttpResponse<any>): HttpResponse<any> {
    return response;
  }

  onError(request: HttpRequest, response: HttpResponse<any>): HttpError {
    return new CustomHttpError('a custom error message', response.metadata);
  }
}

class CustomHttpError implements HttpError {
  constructor(
    public error: string,
    public metadata: HttpMetadata,
  ) {}
}