import { z } from 'zod';
import {
  csgoKillEventDetails,
  csgoKillEventDetailsRequest,
  csgoKillEventDetailsResponse,
} from './csgo-kill-event-details';
import { csgoEventType } from '../../common/csgo-event-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoKillEvent = z.object({
  ingameTimestamp: z.number().gte(0),
  kill: csgoKillEventDetails,
  roundNumber: z.number().gte(1),
  type_: csgoEventType,
});

/**
 *
 * @typedef  {CsgoKillEvent} csgoKillEvent
 * @property {number} - Time elapsed since the beginning of the game, in milliseconds
 * @property {CsgoKillEventDetails}
 * @property {number}
 * @property {CsgoEventType}
 */
export type CsgoKillEvent = z.infer<typeof csgoKillEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoKillEventResponse = z
  .object({
    ingame_timestamp: z.number().gte(0),
    kill: csgoKillEventDetailsResponse,
    round_number: z.number().gte(1),
    type: csgoEventType,
  })
  .transform((data) => ({
    ingameTimestamp: data['ingame_timestamp'],
    kill: data['kill'],
    roundNumber: data['round_number'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoKillEventRequest = z
  .object({
    ingameTimestamp: z.number().nullish(),
    kill: csgoKillEventDetailsRequest.nullish(),
    roundNumber: z.number().nullish(),
    type_: csgoEventType.nullish(),
  })
  .transform((data) => ({
    ingame_timestamp: data['ingameTimestamp'],
    kill: data['kill'],
    round_number: data['roundNumber'],
    type: data['type_'],
  }));
