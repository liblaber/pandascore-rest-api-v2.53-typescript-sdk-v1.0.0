import { z } from 'zod';
import { loLEventPayload, loLEventPayloadRequest, loLEventPayloadResponse } from './lo-l-event-payload';
import { loLEventType } from './lo-l-event-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGameEvent: any = z.lazy(() => {
  return z.object({
    gameId: z.number().gte(1),
    ingameTimestamp: z.number().gte(0),
    isFirst: z.boolean(),
    matchId: z.number().gte(1),
    payload: loLEventPayload,
    tournamentId: z.number().gte(1),
    type: loLEventType,
  });
});

/**
 *
 * @typedef  {LoLGameEvent} loLGameEvent
 * @property {number} - LoL game ID
 * @property {number}
 * @property {boolean} - Whether event is first of its kind to happen
 * @property {number}
 * @property {LoLEventPayload}
 * @property {number}
 * @property {LoLEventType}
 */
export type LoLGameEvent = z.infer<typeof loLGameEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameEventResponse: any = z.lazy(() => {
  return z
    .object({
      game_id: z.number().gte(1),
      ingame_timestamp: z.number().gte(0),
      is_first: z.boolean(),
      match_id: z.number().gte(1),
      payload: loLEventPayloadResponse,
      tournament_id: z.number().gte(1),
      type: loLEventType,
    })
    .transform((data) => ({
      gameId: data['game_id'],
      ingameTimestamp: data['ingame_timestamp'],
      isFirst: data['is_first'],
      matchId: data['match_id'],
      payload: data['payload'],
      tournamentId: data['tournament_id'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameEventRequest: any = z.lazy(() => {
  return z
    .object({
      gameId: z.number().nullish(),
      ingameTimestamp: z.number().nullish(),
      isFirst: z.boolean().nullish(),
      matchId: z.number().nullish(),
      payload: loLEventPayloadRequest.nullish(),
      tournamentId: z.number().nullish(),
      type: loLEventType.nullish(),
    })
    .transform((data) => ({
      game_id: data['gameId'],
      ingame_timestamp: data['ingameTimestamp'],
      is_first: data['isFirst'],
      match_id: data['matchId'],
      payload: data['payload'],
      tournament_id: data['tournamentId'],
      type: data['type'],
    }));
});