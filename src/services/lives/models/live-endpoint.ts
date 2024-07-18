import { z } from 'zod';
import { liveType } from './live-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const liveEndpoint: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    expectedBeginAt: z.string().min(1).nullable(),
    lastActive: z.number().gte(0).nullable(),
    matchId: z.number().gte(1),
    open: z.boolean(),
    type: liveType,
    url: z.string(),
  });
});

/**
 *
 * @typedef  {LiveEndpoint} liveEndpoint
 * @property {string}
 * @property {string}
 * @property {number} - Timestamp in milliseconds (since January 1, 1970 00:00:00 UTC)
 * @property {number}
 * @property {boolean} - Whether live is open
 * @property {LiveType}
 * @property {string}
 */
export type LiveEndpoint = z.infer<typeof liveEndpoint>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const liveEndpointResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.string().min(1).nullable(),
      expected_begin_at: z.string().min(1).nullable(),
      last_active: z.number().gte(0).nullable(),
      match_id: z.number().gte(1),
      open: z.boolean(),
      type: liveType,
      url: z.string(),
    })
    .transform((data) => ({
      beginAt: data['begin_at'],
      expectedBeginAt: data['expected_begin_at'],
      lastActive: data['last_active'],
      matchId: data['match_id'],
      open: data['open'],
      type: data['type'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const liveEndpointRequest: any = z.lazy(() => {
  return z
    .object({
      beginAt: z.string().nullish(),
      expectedBeginAt: z.string().nullish(),
      lastActive: z.number().nullish(),
      matchId: z.number().nullish(),
      open: z.boolean().nullish(),
      type: liveType.nullish(),
      url: z.string().nullish(),
    })
    .transform((data) => ({
      begin_at: data['beginAt'],
      expected_begin_at: data['expectedBeginAt'],
      last_active: data['lastActive'],
      match_id: data['matchId'],
      open: data['open'],
      type: data['type'],
      url: data['url'],
    }));
});