import { z } from 'zod';
import {
  loLEventPlayer,
  loLEventPlayerRequest,
  loLEventPlayerResponse,
} from '../../common/lo-l-event-player';
import { loLEventKiller, loLEventKillerRequest, loLEventKillerResponse } from './lo-l-event-killer';
import { loLEventVictim, loLEventVictimRequest, loLEventVictimResponse } from './lo-l-event-victim';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventPayload = z.object({
  assists: z.array(loLEventPlayer),
  killer: loLEventKiller,
  victim: loLEventVictim,
});

/**
 *
 * @typedef  {LoLEventPayload} loLEventPayload
 * @property {LoLEventPlayer[]}
 * @property {LoLEventKiller}
 * @property {LoLEventVictim}
 */
export type LoLEventPayload = z.infer<typeof loLEventPayload>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventPayloadResponse = z
  .object({
    assists: z.array(loLEventPlayerResponse),
    killer: loLEventKillerResponse,
    victim: loLEventVictimResponse,
  })
  .transform((data) => ({
    assists: data['assists'],
    killer: data['killer'],
    victim: data['victim'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventPayloadRequest = z
  .object({
    assists: z.array(loLEventPlayerRequest).nullish(),
    killer: loLEventKillerRequest.nullish(),
    victim: loLEventVictimRequest.nullish(),
  })
  .transform((data) => ({
    assists: data['assists'],
    killer: data['killer'],
    victim: data['victim'],
  }));
