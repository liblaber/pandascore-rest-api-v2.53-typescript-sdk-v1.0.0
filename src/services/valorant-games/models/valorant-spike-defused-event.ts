import { z } from 'zod';
import {
  valorantSpikeEventPlayer,
  valorantSpikeEventPlayerRequest,
  valorantSpikeEventPlayerResponse,
} from './valorant-spike-event-player';
import { valorantEventType } from './valorant-event-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantSpikeDefusedEvent: any = z.lazy(() => {
  return z.object({
    number: z.number().gte(1),
    spikeDefused: valorantSpikeEventPlayer,
    timestamp: z.number().gte(0),
    type: valorantEventType,
  });
});

/**
 *
 * @typedef  {ValorantSpikeDefusedEvent} valorantSpikeDefusedEvent
 * @property {number}
 * @property {ValorantSpikeEventPlayer}
 * @property {number} - Time elapsed since the beginning of round, in seconds
 * @property {ValorantEventType}
 */
export type ValorantSpikeDefusedEvent = z.infer<typeof valorantSpikeDefusedEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantSpikeDefusedEventResponse: any = z.lazy(() => {
  return z
    .object({
      number: z.number().gte(1),
      spike_defused: valorantSpikeEventPlayerResponse,
      timestamp: z.number().gte(0),
      type: valorantEventType,
    })
    .transform((data) => ({
      number: data['number'],
      spikeDefused: data['spike_defused'],
      timestamp: data['timestamp'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantSpikeDefusedEventRequest: any = z.lazy(() => {
  return z
    .object({
      number: z.number().nullish(),
      spikeDefused: valorantSpikeEventPlayerRequest.nullish(),
      timestamp: z.number().nullish(),
      type: valorantEventType.nullish(),
    })
    .transform((data) => ({
      number: data['number'],
      spike_defused: data['spikeDefused'],
      timestamp: data['timestamp'],
      type: data['type'],
    }));
});
