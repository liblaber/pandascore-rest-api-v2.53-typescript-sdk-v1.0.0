import { z } from 'zod';
import { liveEndpoint, liveEndpointRequest, liveEndpointResponse } from './live-endpoint';
import { match, matchRequest, matchResponse } from '../../common/match';

/**
 * The shape of the model inside the application code - what the users use
 */
export const live = z.object({
  endpoints: z.array(liveEndpoint),
  match: match,
});

/**
 *
 * @typedef  {Live} live
 * @property {LiveEndpoint[]}
 * @property {Match}
 */
export type Live = z.infer<typeof live>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const liveResponse = z
  .object({
    endpoints: z.array(liveEndpointResponse),
    match: matchResponse,
  })
  .transform((data) => ({
    endpoints: data['endpoints'],
    match: data['match'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const liveRequest = z
  .object({ endpoints: z.array(liveEndpointRequest).nullish(), match: matchRequest.nullish() })
  .transform((data) => ({
    endpoints: data['endpoints'],
    match: data['match'],
  }));
