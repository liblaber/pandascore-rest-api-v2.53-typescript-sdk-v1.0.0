import { z } from 'zod';
import { loLEventDrake, loLEventDrakeRequest, loLEventDrakeResponse } from './lo-l-event-drake';
import { loLEventHerald, loLEventHeraldRequest, loLEventHeraldResponse } from './lo-l-event-herald';
import { loLEventNashor, loLEventNashorRequest, loLEventNashorResponse } from './lo-l-event-nashor';
import { loLEventPlayer, loLEventPlayerRequest, loLEventPlayerResponse } from './lo-l-event-player';
import { loLEventTower, loLEventTowerRequest, loLEventTowerResponse } from './lo-l-event-tower';
import { loLEventInhibitor, loLEventInhibitorRequest, loLEventInhibitorResponse } from './lo-l-event-inhibitor';
import { loLEventVoidgrub, loLEventVoidgrubRequest, loLEventVoidgrubResponse } from './lo-l-event-voidgrub';
import { loLEventUnknown, loLEventUnknownRequest, loLEventUnknownResponse } from './lo-l-event-unknown';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventVictim: any = z.lazy(() => {
  return z.union([
    loLEventDrake,
    loLEventHerald,
    loLEventNashor,
    loLEventPlayer,
    loLEventTower,
    loLEventInhibitor,
    loLEventVoidgrub,
    loLEventUnknown,
  ]);
});

/**
 *
 * @typedef  {LoLEventVictim} loLEventVictim
 * @property {LoLEventDrake}
 * @property {LoLEventHerald}
 * @property {LoLEventNashor}
 * @property {LoLEventPlayer}
 * @property {LoLEventTower}
 * @property {LoLEventInhibitor}
 * @property {LoLEventVoidgrub}
 * @property {LoLEventUnknown}
 */
export type LoLEventVictim = z.infer<typeof loLEventVictim>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventVictimResponse: any = z.lazy(() => {
  return z.union([
    loLEventDrakeResponse,
    loLEventHeraldResponse,
    loLEventNashorResponse,
    loLEventPlayerResponse,
    loLEventTowerResponse,
    loLEventInhibitorResponse,
    loLEventVoidgrubResponse,
    loLEventUnknownResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventVictimRequest: any = z.lazy(() => {
  return z.union([
    loLEventDrakeRequest,
    loLEventHeraldRequest,
    loLEventNashorRequest,
    loLEventPlayerRequest,
    loLEventTowerRequest,
    loLEventInhibitorRequest,
    loLEventVoidgrubRequest,
    loLEventUnknownRequest,
  ]);
});
