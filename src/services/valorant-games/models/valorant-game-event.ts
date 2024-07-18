import { z } from 'zod';
import { valorantKillEvent, valorantKillEventRequest, valorantKillEventResponse } from './valorant-kill-event';
import {
  valorantSpikePlantedEvent,
  valorantSpikePlantedEventRequest,
  valorantSpikePlantedEventResponse,
} from './valorant-spike-planted-event';
import {
  valorantSpikeDefusedEvent,
  valorantSpikeDefusedEventRequest,
  valorantSpikeDefusedEventResponse,
} from './valorant-spike-defused-event';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantGameEvent: any = z.lazy(() => {
  return z.union([valorantKillEvent, valorantSpikePlantedEvent, valorantSpikeDefusedEvent]);
});

/**
 *
 * @typedef  {ValorantGameEvent} valorantGameEvent
 * @property {ValorantKillEvent}
 * @property {ValorantSpikePlantedEvent}
 * @property {ValorantSpikeDefusedEvent}
 */
export type ValorantGameEvent = z.infer<typeof valorantGameEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameEventResponse: any = z.lazy(() => {
  return z.union([valorantKillEventResponse, valorantSpikePlantedEventResponse, valorantSpikeDefusedEventResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameEventRequest: any = z.lazy(() => {
  return z.union([valorantKillEventRequest, valorantSpikePlantedEventRequest, valorantSpikeDefusedEventRequest]);
});
