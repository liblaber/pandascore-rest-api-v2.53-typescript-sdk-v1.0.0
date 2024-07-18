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
export const valorantSpikePlantedEvent: any = z.lazy(() => {
  return z.object({
    number: z.number().gte(1),
    spikePlanted: valorantSpikeEventPlayer,
    timestamp: z.number().gte(0),
    type: valorantEventType,
  });
});

/**
 *
 * @typedef  {ValorantSpikePlantedEvent} valorantSpikePlantedEvent
 * @property {number}
 * @property {ValorantSpikeEventPlayer}
 * @property {number} - Time elapsed since the beginning of round, in seconds
 * @property {ValorantEventType}
 */
export type ValorantSpikePlantedEvent = z.infer<typeof valorantSpikePlantedEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantSpikePlantedEventResponse: any = z.lazy(() => {
  return z
    .object({
      number: z.number().gte(1),
      spike_planted: valorantSpikeEventPlayerResponse,
      timestamp: z.number().gte(0),
      type: valorantEventType,
    })
    .transform((data) => ({
      number: data['number'],
      spikePlanted: data['spike_planted'],
      timestamp: data['timestamp'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantSpikePlantedEventRequest: any = z.lazy(() => {
  return z
    .object({
      number: z.number().nullish(),
      spikePlanted: valorantSpikeEventPlayerRequest.nullish(),
      timestamp: z.number().nullish(),
      type: valorantEventType.nullish(),
    })
    .transform((data) => ({
      number: data['number'],
      spike_planted: data['spikePlanted'],
      timestamp: data['timestamp'],
      type: data['type'],
    }));
});
