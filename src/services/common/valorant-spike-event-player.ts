import { z } from 'zod';
import {
  valorantEventPlayer,
  valorantEventPlayerRequest,
  valorantEventPlayerResponse,
} from './valorant-event-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantSpikeEventPlayer = z.object({
  player: valorantEventPlayer,
});

/**
 *
 * @typedef  {ValorantSpikeEventPlayer} valorantSpikeEventPlayer
 * @property {ValorantEventPlayer}
 */
export type ValorantSpikeEventPlayer = z.infer<typeof valorantSpikeEventPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantSpikeEventPlayerResponse = z
  .object({
    player: valorantEventPlayerResponse,
  })
  .transform((data) => ({
    player: data['player'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantSpikeEventPlayerRequest = z
  .object({ player: valorantEventPlayerRequest.nullish() })
  .transform((data) => ({
    player: data['player'],
  }));
