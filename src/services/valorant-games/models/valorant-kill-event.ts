import { z } from 'zod';
import {
  valorantKillEventDetails,
  valorantKillEventDetailsRequest,
  valorantKillEventDetailsResponse,
} from './valorant-kill-event-details';
import { valorantEventType } from './valorant-event-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantKillEvent: any = z.lazy(() => {
  return z.object({
    kill: valorantKillEventDetails,
    number: z.number().gte(1),
    timestamp: z.number().gte(0),
    type: valorantEventType,
  });
});

/**
 *
 * @typedef  {ValorantKillEvent} valorantKillEvent
 * @property {ValorantKillEventDetails}
 * @property {number}
 * @property {number} - Time elapsed since the beginning of round, in seconds
 * @property {ValorantEventType}
 */
export type ValorantKillEvent = z.infer<typeof valorantKillEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantKillEventResponse: any = z.lazy(() => {
  return z
    .object({
      kill: valorantKillEventDetailsResponse,
      number: z.number().gte(1),
      timestamp: z.number().gte(0),
      type: valorantEventType,
    })
    .transform((data) => ({
      kill: data['kill'],
      number: data['number'],
      timestamp: data['timestamp'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantKillEventRequest: any = z.lazy(() => {
  return z
    .object({
      kill: valorantKillEventDetailsRequest.nullish(),
      number: z.number().nullish(),
      timestamp: z.number().nullish(),
      type: valorantEventType.nullish(),
    })
    .transform((data) => ({
      kill: data['kill'],
      number: data['number'],
      timestamp: data['timestamp'],
      type: data['type'],
    }));
});