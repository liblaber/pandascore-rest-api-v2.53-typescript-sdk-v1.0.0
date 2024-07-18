import { z } from 'zod';
import {
  csgoRoundStartEventDetails,
  csgoRoundStartEventDetailsRequest,
  csgoRoundStartEventDetailsResponse,
} from './csgo-round-start-event-details';
import { csgoEventType } from './csgo-event-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundStartEvent: any = z.lazy(() => {
  return z.object({
    ingameTimestamp: z.number().gte(0),
    roundNumber: z.number().gte(1),
    roundStart: csgoRoundStartEventDetails,
    type: csgoEventType,
  });
});

/**
 *
 * @typedef  {CsgoRoundStartEvent} csgoRoundStartEvent
 * @property {number} - Time elapsed since the beginning of the game, in milliseconds
 * @property {number}
 * @property {CsgoRoundStartEventDetails}
 * @property {CsgoEventType}
 */
export type CsgoRoundStartEvent = z.infer<typeof csgoRoundStartEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundStartEventResponse: any = z.lazy(() => {
  return z
    .object({
      ingame_timestamp: z.number().gte(0),
      round_number: z.number().gte(1),
      round_start: csgoRoundStartEventDetailsResponse,
      type: csgoEventType,
    })
    .transform((data) => ({
      ingameTimestamp: data['ingame_timestamp'],
      roundNumber: data['round_number'],
      roundStart: data['round_start'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundStartEventRequest: any = z.lazy(() => {
  return z
    .object({
      ingameTimestamp: z.number().nullish(),
      roundNumber: z.number().nullish(),
      roundStart: csgoRoundStartEventDetailsRequest.nullish(),
      type: csgoEventType.nullish(),
    })
    .transform((data) => ({
      ingame_timestamp: data['ingameTimestamp'],
      round_number: data['roundNumber'],
      round_start: data['roundStart'],
      type: data['type'],
    }));
});