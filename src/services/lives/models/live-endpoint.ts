import { z } from 'zod';
import { liveType } from './live-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const liveEndpoint = z.object({
  beginAt: z.string().min(1),
  expectedBeginAt: z.string().min(1),
  lastActive: z.number().gte(0),
  matchId: z.number().gte(1),
  open: z.boolean(),
  type_: liveType,
  url: z.string(),
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
export const liveEndpointResponse = z
  .object({
    begin_at: z.string().min(1),
    expected_begin_at: z.string().min(1),
    last_active: z.number().gte(0),
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
    type_: data['type'],
    url: data['url'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const liveEndpointRequest = z
  .object({
    beginAt: z.string().nullish(),
    expectedBeginAt: z.string().nullish(),
    lastActive: z.number().nullish(),
    matchId: z.number().nullish(),
    open: z.boolean().nullish(),
    type_: liveType.nullish(),
    url: z.string().nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    expected_begin_at: data['expectedBeginAt'],
    last_active: data['lastActive'],
    match_id: data['matchId'],
    open: data['open'],
    type: data['type_'],
    url: data['url'],
  }));
