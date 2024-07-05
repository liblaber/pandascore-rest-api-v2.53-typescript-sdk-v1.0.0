import { z } from 'zod';
import {
  csgoRoundStartEvent,
  csgoRoundStartEventRequest,
  csgoRoundStartEventResponse,
} from './csgo-round-start-event';
import {
  csgoRoundEndEvent,
  csgoRoundEndEventRequest,
  csgoRoundEndEventResponse,
} from './csgo-round-end-event';
import { csgoKillEvent, csgoKillEventRequest, csgoKillEventResponse } from './csgo-kill-event';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoEvent = z.union([csgoRoundStartEvent, csgoRoundEndEvent, csgoKillEvent]);

/**
 *
 * @typedef  {CsgoEvent} csgoEvent
 * @property {CsgoRoundStartEvent}
 * @property {CsgoRoundEndEvent}
 * @property {CsgoKillEvent}
 */
export type CsgoEvent = z.infer<typeof csgoEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoEventResponse = z.union([
  csgoRoundStartEventResponse,
  csgoRoundEndEventResponse,
  csgoKillEventResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoEventRequest = z.union([
  csgoRoundStartEventRequest,
  csgoRoundEndEventRequest,
  csgoKillEventRequest,
]);
