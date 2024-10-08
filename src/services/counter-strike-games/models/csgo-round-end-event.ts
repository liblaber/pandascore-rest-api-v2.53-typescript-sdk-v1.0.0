// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  csgoRoundEndEventDetails,
  csgoRoundEndEventDetailsRequest,
  csgoRoundEndEventDetailsResponse,
} from './csgo-round-end-event-details';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundEndEvent = z.lazy(() => {
  return z.object({
    ingameTimestamp: z.number().gte(0),
    roundEnd: csgoRoundEndEventDetails,
    roundNumber: z.number().gte(1),
    type: z.string(),
  });
});

/**
 *
 * @typedef  {CsgoRoundEndEvent} csgoRoundEndEvent
 * @property {number} - Time elapsed since the beginning of the game, in milliseconds
 * @property {CsgoRoundEndEventDetails}
 * @property {number}
 * @property {CsgoEventType}
 */
export type CsgoRoundEndEvent = z.infer<typeof csgoRoundEndEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundEndEventResponse = z.lazy(() => {
  return z
    .object({
      ingame_timestamp: z.number().gte(0),
      round_end: csgoRoundEndEventDetailsResponse,
      round_number: z.number().gte(1),
      type: z.string(),
    })
    .transform((data) => ({
      ingameTimestamp: data['ingame_timestamp'],
      roundEnd: data['round_end'],
      roundNumber: data['round_number'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundEndEventRequest = z.lazy(() => {
  return z
    .object({
      ingameTimestamp: z.number().nullish(),
      roundEnd: csgoRoundEndEventDetailsRequest.nullish(),
      roundNumber: z.number().nullish(),
      type: z.string().nullish(),
    })
    .transform((data) => ({
      ingame_timestamp: data['ingameTimestamp'],
      round_end: data['roundEnd'],
      round_number: data['roundNumber'],
      type: data['type'],
    }));
});
