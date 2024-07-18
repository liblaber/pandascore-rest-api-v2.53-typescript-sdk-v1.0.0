import { z } from 'zod';
import { valorantEventKiller, valorantEventKillerRequest, valorantEventKillerResponse } from './valorant-event-killer';
import { valorantEventVictim, valorantEventVictimRequest, valorantEventVictimResponse } from './valorant-event-victim';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantKillEventDetails: any = z.lazy(() => {
  return z.object({
    bombKill: z.boolean(),
    killer: valorantEventKiller,
    victim: valorantEventVictim,
  });
});

/**
 *
 * @typedef  {ValorantKillEventDetails} valorantKillEventDetails
 * @property {boolean} - Whether the kill was caused by the bomb
 * @property {ValorantEventKiller}
 * @property {ValorantEventVictim}
 */
export type ValorantKillEventDetails = z.infer<typeof valorantKillEventDetails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantKillEventDetailsResponse: any = z.lazy(() => {
  return z
    .object({
      bomb_kill: z.boolean(),
      killer: valorantEventKillerResponse,
      victim: valorantEventVictimResponse,
    })
    .transform((data) => ({
      bombKill: data['bomb_kill'],
      killer: data['killer'],
      victim: data['victim'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantKillEventDetailsRequest: any = z.lazy(() => {
  return z
    .object({
      bombKill: z.boolean().nullish(),
      killer: valorantEventKillerRequest.nullish(),
      victim: valorantEventVictimRequest.nullish(),
    })
    .transform((data) => ({
      bomb_kill: data['bombKill'],
      killer: data['killer'],
      victim: data['victim'],
    }));
});