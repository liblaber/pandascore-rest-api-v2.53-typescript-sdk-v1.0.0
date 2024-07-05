import { z } from 'zod';
import {
  loLEventDrake,
  loLEventDrakeRequest,
  loLEventDrakeResponse,
} from '../../common/lo-l-event-drake';
import {
  loLEventHerald,
  loLEventHeraldRequest,
  loLEventHeraldResponse,
} from '../../common/lo-l-event-herald';
import { loLEventMinion, loLEventMinionRequest, loLEventMinionResponse } from './lo-l-event-minion';
import {
  loLEventNashor,
  loLEventNashorRequest,
  loLEventNashorResponse,
} from '../../common/lo-l-event-nashor';
import {
  loLEventPlayer,
  loLEventPlayerRequest,
  loLEventPlayerResponse,
} from '../../common/lo-l-event-player';
import {
  loLEventTower,
  loLEventTowerRequest,
  loLEventTowerResponse,
} from '../../common/lo-l-event-tower';
import {
  loLEventNeutralMinion,
  loLEventNeutralMinionRequest,
  loLEventNeutralMinionResponse,
} from './lo-l-event-neutral-minion';
import {
  loLEventVoidgrub,
  loLEventVoidgrubRequest,
  loLEventVoidgrubResponse,
} from '../../common/lo-l-event-voidgrub';
import {
  loLEventUnknown,
  loLEventUnknownRequest,
  loLEventUnknownResponse,
} from '../../common/lo-l-event-unknown';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventKiller = z.union([
  loLEventDrake,
  loLEventHerald,
  loLEventMinion,
  loLEventNashor,
  loLEventPlayer,
  loLEventTower,
  loLEventNeutralMinion,
  loLEventVoidgrub,
  loLEventUnknown,
]);

/**
 *
 * @typedef  {LoLEventKiller} loLEventKiller
 * @property {LoLEventDrake}
 * @property {LoLEventHerald}
 * @property {LoLEventMinion}
 * @property {LoLEventNashor}
 * @property {LoLEventPlayer}
 * @property {LoLEventTower}
 * @property {LoLEventNeutralMinion}
 * @property {LoLEventVoidgrub}
 * @property {LoLEventUnknown}
 */
export type LoLEventKiller = z.infer<typeof loLEventKiller>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventKillerResponse = z.union([
  loLEventDrakeResponse,
  loLEventHeraldResponse,
  loLEventMinionResponse,
  loLEventNashorResponse,
  loLEventPlayerResponse,
  loLEventTowerResponse,
  loLEventNeutralMinionResponse,
  loLEventVoidgrubResponse,
  loLEventUnknownResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventKillerRequest = z.union([
  loLEventDrakeRequest,
  loLEventHeraldRequest,
  loLEventMinionRequest,
  loLEventNashorRequest,
  loLEventPlayerRequest,
  loLEventTowerRequest,
  loLEventNeutralMinionRequest,
  loLEventVoidgrubRequest,
  loLEventUnknownRequest,
]);
