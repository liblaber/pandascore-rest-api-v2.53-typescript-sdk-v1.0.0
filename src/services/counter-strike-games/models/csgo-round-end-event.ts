import { z } from 'zod';
import {
  csgoRoundEndEventDetails,
  csgoRoundEndEventDetailsRequest,
  csgoRoundEndEventDetailsResponse,
} from './csgo-round-end-event-details';
import { csgoEventType } from './csgo-event-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundEndEvent: any = z.lazy(() => {
  return z.object({
    ingameTimestamp: z.number().gte(0),
    roundEnd: csgoRoundEndEventDetails,
    roundNumber: z.number().gte(1),
    type: csgoEventType,
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
export const csgoRoundEndEventResponse: any = z.lazy(() => {
  return z
    .object({
      ingame_timestamp: z.number().gte(0),
      round_end: csgoRoundEndEventDetailsResponse,
      round_number: z.number().gte(1),
      type: csgoEventType,
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
export const csgoRoundEndEventRequest: any = z.lazy(() => {
  return z
    .object({
      ingameTimestamp: z.number().nullish(),
      roundEnd: csgoRoundEndEventDetailsRequest.nullish(),
      roundNumber: z.number().nullish(),
      type: csgoEventType.nullish(),
    })
    .transform((data) => ({
      ingame_timestamp: data['ingameTimestamp'],
      round_end: data['roundEnd'],
      round_number: data['roundNumber'],
      type: data['type'],
    }));
});
